import { useState, useRef } from 'react';
import { useDraggable } from '@dnd-kit/core';
import OpenMailSound from '../../assets/sound/open-mail.mp3';
import './Mail.css';

export default function Mail({
  id,
  currentX,
  currentY,
  liveDelta = { x: 0, y: 0 },
  title,
  content,
  normalImg, 
  hoverImg,  
  disabled = false
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoverStatus, setHoverStatus] = useState('normal'); 
  const soundRef = useRef(null);
  
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: id,
    disabled: isModalOpen || disabled 
  });

  const inlineStyle = {
    position: 'absolute',
    left: `${currentX}px`,
    top: `${currentY}px`,
    transform: isDragging ? `translate3d(${liveDelta.x}px, ${liveDelta.y}px, 0)` : undefined,
    zIndex: isDragging ? 999 : 10,
    cursor: isDragging ? 'grabbing' : 'grab'
  };

  const assetDisplaySource = (hoverStatus === 'hovered' || isDragging) ? hoverImg : normalImg;

  // Hàm mở thư chuẩn, chặn đứng sự kiện lan truyền để dnd-kit không hiểu lầm là drag
  function handleOpenEnvelope(e) {
    e.stopPropagation();
    e.preventDefault();
    if (disabled) return;

    if (!soundRef.current) {
      soundRef.current = new Audio(OpenMailSound);
      soundRef.current.volume = 0.5;
    }
    soundRef.current.currentTime = 0;
    soundRef.current.play().catch(() => {});

    setIsModalOpen(true);
  }

  return (
    <>
      <div 
        ref={setNodeRef} 
        style={inlineStyle} 
        onMouseEnter={() => !isModalOpen && setHoverStatus('hovered')}
        onMouseLeave={() => !isModalOpen && setHoverStatus('normal')}
        {...listeners}
        {...attributes}
      >
        <img 
          src={assetDisplaySource} 
          alt={title} 
          className="mail-pixel-art"
          style={{ display: 'block', imageRendering: 'pixelated', pointerEvents: 'none' }} 
        />

        {/* Nút bấm chuyên dụng chỉ xuất hiện khi hover và biến mất khi đang drag */}
        {hoverStatus === 'hovered' && !isDragging && !isModalOpen && (
          <button 
            className="mail-action-open-btn"
            onPointerDown={(e) => e.stopPropagation()} // Chặn không cho dnd-kit kích hoạt drag tại đây
            onClick={handleOpenEnvelope}
          >
            ĐỌC THƯ
          </button>
        )}
      </div>

      {/* Giao diện Modal Đọc Thư */}
      {isModalOpen && (
        <div className="mail-modal-blur-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="mail-letter-reading-desk" onClick={(e) => e.stopPropagation()}>
            <div className="mail-letter-header">
              <p className="mail-letter-title">{title}</p>
              <button className="mail-letter-close-btn" onClick={() => setIsModalOpen(false)}>×</button>
            </div>
            <div className="mail-letter-body">
              <p className="mail-letter-text-content">{content}</p>
            </div>
            <div className="mail-letter-footer">
              <span className="footer-dismiss-prompt">Nhấp ra ngoài để đóng lại</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}