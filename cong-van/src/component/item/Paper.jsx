import { useState, useEffect, useRef } from 'react';
import { useDraggable } from '@dnd-kit/core';

import PaperImage from './../../assets/image/paper/paper.png';

import PaperTabI1Image from './../../assets/image/paper/paper-tab-i1.png';
import PaperTabI2Image from './../../assets/image/paper/paper-tab-i2.png';

import PaperTabII1Image from './../../assets/image/paper/paper-tab-ii1.png';
import PaperTabII2Image from './../../assets/image/paper/paper-tab-ii2.png';

import PaperTabIII1Image from './../../assets/image/paper/paper-tab-iii1.png';
import PaperTabIII2Image from './../../assets/image/paper/paper-tab-iii2.png';

import TabSwitchSound from './../../assets/sound/tab-switch.mp3';
import './Paper.css';

export default function Paper({
  currentX = 200, 
  currentY = 120,
  liveDelta = { x: 0, y: 0 }, 
  activeTab = 'A', 
  setActiveTab, 
  documents = [],
  onChoiceConfirm, // 🎯 Received from the refactored parent scene
  onChoiceHover = null,
  onEffectHover = null
}) {
  const [hoveredTab, setHoveredTab] = useState(null);
  const switchAudioRef = useRef(null);

  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: 'paper-1'
  });

  const style = {
    left: `${currentX}px`,
    top: `${currentY}px`,
    transform: isDragging
      ? `translate3d(${liveDelta.x}px, ${liveDelta.y}px, 0)`
      : undefined
  };

  const tabAssets = {
    A: { normal: PaperTabI1Image, hover: PaperTabI2Image },
    B: { normal: PaperTabII1Image, hover: PaperTabII2Image },
    C: { normal: PaperTabIII1Image, hover: PaperTabIII2Image }
  };

  const currentDocument = documents.find(doc => doc.id === activeTab);

  function handleTabClick(docId) {
    if (activeTab !== docId) {
      if (!switchAudioRef.current) {
        switchAudioRef.current = new Audio(TabSwitchSound);
        switchAudioRef.current.volume = 0.5;
      }
      switchAudioRef.current.currentTime = 0;
      switchAudioRef.current.play().catch(err => console.log("Audio play deferred...", err));
      setActiveTab(docId);
    }
  }

  useEffect(() => {
    return () => {
      if (switchAudioRef.current) {
        switchAudioRef.current.pause();
        switchAudioRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={setNodeRef} style={style} className="paper">
      
      {/* Tabs Layout Handler */}
      <div className="paper-tabs">
        {documents.map((doc, index) => {
          const isHovered = hoveredTab === doc.id;
          const isActive = activeTab === doc.id;
          const asset = tabAssets[doc.id];

          return (
            <img
              key={doc.id}
              src={isHovered || isActive ? asset?.hover : asset?.normal}
              alt={doc.id}
              className={`paper-tab ${isHovered || isActive ? 'tab-hovered' : ''}`}
              style={{ top: `${index * 80}px` }}
              onMouseEnter={() => {
                setHoveredTab(doc.id);
                if (onChoiceHover) onChoiceHover(doc.effects);
              }}
              onMouseLeave={() => {
                setHoveredTab(null);
                if (onChoiceHover) onChoiceHover(null);
              }}
              onClick={() => handleTabClick(doc.id)}
            />
          );
        })}
      </div>

      {/* Beige Paper Draggable Background Asset */}
      <img
        src={PaperImage}
        alt="Paper Asset Background"
        className="paper-image"
        {...listeners}
        {...attributes}
      />

      {/* Document Text Layer & Selection Button Interaction */}
      <div className="paper-text-layer">
        <div className="paper-title">{currentDocument?.title}</div>
        <div className="paper-content">{currentDocument?.content}</div>
        
        {currentDocument && (
          <button 
            className="paper-action-confirm-btn"
            onClick={() => onChoiceConfirm && onChoiceConfirm(activeTab)}
          >
            Ký Duyệt Văn Bản
          </button>
        )}
      </div>
    </div>
  );
}