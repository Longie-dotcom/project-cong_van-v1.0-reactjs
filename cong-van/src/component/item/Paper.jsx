import { useState, useEffect, useRef } from 'react';
import { useDraggable } from '@dnd-kit/core';

import PaperImage from './../../assets/image/paper/paper.png';

import PaperTabI1Image from './../../assets/image/paper/paper-tab-i1.png';
import PaperTabI2Image from './../../assets/image/paper/paper-tab-i2.png';

import PaperTabII1Image from './../../assets/image/paper/paper-tab-ii1.png';
import PaperTabII2Image from './../../assets/image/paper/paper-tab-ii2.png';

import PaperTabIII1Image from './../../assets/image/paper/paper-tab-iii1.png';
import PaperTabIII2Image from './../../assets/image/paper/paper-tab-iii2.png';

import EconomyIcon from './../../assets/image/icon/economy-icon2.png';
import ResourceIcon from './../../assets/image/icon/resource-icon2.png';
import SecurityIcon from './../../assets/image/icon/security-icon2.png';
import TrustIcon from './../../assets/image/icon/trust-icon2.png';
import EqualityIcon from './../../assets/image/icon/equality-icon2.png'; 

import TabSwitchSound from './../../assets/sound/tab-switch.mp3';

// Import target fallback art asset used as the visible dropped stamp graphic 
import StampMarkImage from './../../assets/image/stamper/stamp.png';

import './Paper.css';

export default function Paper({
  currentX = 200, 
  currentY = 120,
  liveDelta = { x: 0, y: 0 }, 
  activeTab = 'A', 
  setActiveTab, 
  documents = [],
  visualStamps = [] 
}) {
  const [hoveredTab, setHoveredTab] = useState(null);

  // 🔊 Audio reference to hold the persistent tab-switch audio object safely
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

  // 🗺️ Map state database keys cleanly to imported pixel icons
  const statIcons = {
    Resource: ResourceIcon,
    Security: SecurityIcon,
    Trust: TrustIcon,
    Economy: EconomyIcon,
    Equality: EqualityIcon
  };

  // Explicit static map order to make sure the side-tabs don't jump layout lines erratically
  const statOrder = ['Resource', 'Security', 'Trust', 'Economy', 'Equality'];

  // ====================================================================
  // 🔊 TAB SWITCH AUDIO TRIGGER HANDLER
  // ====================================================================
  function handleTabClick(docId) {
    // 1. Only play sound and switch if the player clicks a different tab
    if (activeTab !== docId) {
      if (!switchAudioRef.current) {
        switchAudioRef.current = new Audio(TabSwitchSound);
        switchAudioRef.current.volume = 0.5; // Balanced volume mix
      }

      // 2. Rewind audio channel to zero to support instant rapid clicking speed
      switchAudioRef.current.currentTime = 0;
      switchAudioRef.current.play().catch(err => {
        console.log("Audio waiting for player interaction to play...", err);
      });

      // 3. Update the parent active state index hook
      setActiveTab(docId);
    }
  }

  // Clean up tab switch sound instance on complete scene unmounts
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
      
      {/* 📊 MECHANICAL SLIDE-OUT STAT ICON TABS PANEL */}
      <div className="paper-side-stat-tabs">
        {statOrder.map((statKey, index) => {
          const val = currentDocument?.effects?.[statKey] || 0;
          const hasEffect = val !== 0;
          const isPositive = val > 0;
          const displaySign = isPositive ? `+${val}` : val;
          const statusClass = isPositive ? 'stat-inc' : 'stat-dec';

          return (
            <div 
              key={statKey} 
              className={`side-stat-tab-item ${hasEffect ? 'slide-out' : 'slide-hidden'}`}
              style={{ top: `${index * 64 + 40}px` }} // Clean vertical spacing stack layout
            >
              <div className="stat-icon-wrapper">
                <img 
                  src={statIcons[statKey]} 
                  alt={statKey} 
                  className="stat-pixel-icon" 
                />
                {hasEffect && (
                  <span className={`stat-badge-overlay ${statusClass}`}>
                    {displaySign}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

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
              onMouseEnter={() => setHoveredTab(doc.id)}
              onMouseLeave={() => setHoveredTab(null)}
              onClick={() => handleTabClick(doc.id)} // 🌟 Uses our new sound wrapper handler
            />
          );
        })}
      </div>

      {/* Main Base Paper Image Background Layer */}
      <img
        src={PaperImage}
        alt="Paper Asset Background"
        className="paper-image"
        {...listeners}
        {...attributes}
      />

      {/* 🔴 VISUAL INK STAMP IMPRINTS CONTAINER */}
      {visualStamps.map((stamp, idx) => (
        <img
          key={`stamp-mark-${idx}`}
          src={StampMarkImage}
          alt="Stamped Mark"
          className="rendered-stamp-ink"
          style={{
            position: 'absolute',
            left: `${stamp.x}px`,
            top: `${stamp.y}px`,
            transform: 'translate(-50%, -50%)', 
            pointerEvents: 'none' 
          }}
        />
      ))}

      {/* Narrative & Parameter Impact Text Layer Container */}
      <div className="paper-text-layer">
        <div className="paper-title">{currentDocument?.title}</div>
        <div className="paper-content">{currentDocument?.content}</div>
      </div>
    </div>
  );
}