import { useState, useRef, useEffect } from 'react';
import { MAIL_CONFIG } from '../../../data/assets/mails';
import './Mail.css';

export default function Mail({
  id,
  currentX,
  currentY,
  title,
  content,
  choices = [],
  onChoiceSelect,
  normalImg, 
  hoverImg,  
  disabled = false,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoverStatus, setHoverStatus] = useState('normal'); 
  const soundRef = useRef(null);
  
  useEffect(() => {
    const audio = new Audio(MAIL_CONFIG.SOUNDS.rustle);
    audio.volume = 0.3;
    audio.play().catch(() => {});
    return () => { audio.pause(); audio.currentTime = 0; };
  }, []);

  function handleOpenEnvelope() {
    if (disabled || isModalOpen) return;
    if (!soundRef.current) {
      soundRef.current = new Audio(MAIL_CONFIG.SOUNDS.open);
      soundRef.current.volume = 0.5;
    }
    soundRef.current.play().catch(() => {});
    setIsModalOpen(true);
  }

  function handleChoice(choice) {
    if (onChoiceSelect) onChoiceSelect(choice);
    setIsModalOpen(false);
  }

  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: `${currentX}px`,
          top: `${currentY}px`,
          zIndex: 10,
          cursor: 'pointer'
        }}
        onMouseEnter={() => !isModalOpen && setHoverStatus('hovered')}
        onMouseLeave={() => !isModalOpen && setHoverStatus('normal')}
        onClick={handleOpenEnvelope}
      >
        <img
          src={(hoverStatus === 'hovered') ? hoverImg : normalImg}
          alt={title}
          className="mail-pixel-art"
          style={{ display: 'block', imageRendering: 'pixelated' }}
        />

        {hoverStatus === 'hovered' && !isModalOpen && (
          <div className="mail-hover-label">Đọc thư</div>
        )}
      </div>

      {isModalOpen && (
        <div className="mail-modal-blur-overlay">
          <div className="mail-letter-reading-desk" onClick={(e) => e.stopPropagation()}>
            <div className="mail-letter-header">
              <p className="mail-letter-title">{title}</p>
            </div>
            <div className="mail-letter-body">
              <p className="mail-letter-text-content">{content}</p>
              {choices.length > 0 && (
                <div className="mail-choices-container">
                  {choices.map((choice, index) => (
                    <button key={index} className="mail-choice-btn" onClick={() => handleChoice(choice)}>
                      {choice.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}