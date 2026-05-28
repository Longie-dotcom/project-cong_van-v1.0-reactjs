import { useState, useEffect, useRef } from 'react';
import { useDraggable } from '@dnd-kit/core';

import PaperImage from './../../assets/image/paper/paper.png';
import PaperImage2 from './../../assets/image/paper/paper2.png';

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

import TooltipWrapper from '../common/TooltipWrapper';

import './Paper.css';

export default function Paper({
  currentX = 200, 
  currentY = 120,
  liveDelta = { x: 0, y: 0 }, 
  activeTab = 'A', 
  setActiveTab, 
  documents = [],
  visualStamps = [],
  isStamperDragging = false,
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
  const statIcons = { Resource: ResourceIcon, Security: SecurityIcon, Trust: TrustIcon, Economy: EconomyIcon, Equality: EqualityIcon };
  const statOrder = ['Resource', 'Security', 'Trust', 'Economy', 'Equality'];

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
    <div ref={setNodeRef} style={style} className={`paper ${isStamperDragging ? "paper-stamp-ready" : ""}`}>
      
      {/* Mechanical Side-Stat Tabs Panel */}
      <div className="paper-side-stat-tabs">
        {statOrder.map((statKey, index) => {
          const effectObj = currentDocument?.effects?.find(
            (eff) => eff.effect && eff.effect[statKey] !== undefined
          );
          const val = effectObj ? effectObj.effect[statKey] : 0;
          const hasEffect = val !== 0;
          const isPositive = val > 0;
          const displaySign = isPositive ? `+${val}` : val;
          const statusClass = isPositive ? 'stat-inc' : 'stat-dec';

          return (
            <div 
              key={statKey} 
              className={`side-stat-tab-item ${hasEffect ? 'slide-out' : 'slide-hidden'}`}
              style={{ top: `${index * 64 + 40}px` }}
              onMouseEnter={() => {
                if (hasEffect && onEffectHover) {
                  onEffectHover(effectObj?.text || '');
                }
              }}
              onMouseLeave={() => {
                if (onEffectHover) {
                  onEffectHover(null);
                }
              }}
            >
              <div className="stat-icon-wrapper">
                <img src={statIcons[statKey]} alt={statKey} className="stat-pixel-icon" />
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

      {/* 🖼️ KEEP BEIGE PAPER BACKGROUND FOR THE DOSSIER */}
      <img
        src={PaperImage}
        alt="Paper Asset Background"
        className="paper-image"
        {...listeners}
        {...attributes}
      />

      {/* Visual Ink Stamp Imprints */}
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
            transform: `translate(-50%, -50%) rotate(${stamp.rotation || 0}deg)`, 
            opacity: stamp.opacity || 0.85,
            pointerEvents: 'none' 
          }}
        />
      ))}

      {/* 📝 SHOW STAMP INDICATOR ZONE WHEN DRAGGING THE STAMPER TOOL */}
      {isStamperDragging ? (
        <div className="stamp-indicator-zone">
          <span className="stamp-indicator-text">Khu vực đóng dấu</span>
        </div>
      ) : (
        <div className="paper-text-layer">
          <div className="paper-title">{currentDocument?.title}</div>
          <div className="paper-content">{currentDocument?.content}</div>
        </div>
      )}
    </div>
  );
}