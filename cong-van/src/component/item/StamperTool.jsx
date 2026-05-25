import { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';

import StamperImageNormal from './../../assets/image/stamper/stamper1.png';
import StamperImageDropped from './../../assets/image/stamper/stamper2.png';

import './Stamper.css';

export default function StamperTool({ x = 900, y = 420, onStampDropped }) {
  const STAMPER = {
    width: 150,
    height: 194,
    stampOffsetY: 0, 
  };

  const DRAG_LIFT_HEIGHT = 150; 

  const HOME = { x, y };
  const [position, setPosition] = useState(HOME);
  const [phase, setPhase] = useState('idle'); // 'idle' | 'dropping' | 'returning'

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging
  } = useDraggable({
    id: 'stamper-tool',
    data: {
      onDragEndCustom: (mx, my) => {
        handleDragEnd(mx, my);
      }
    }
  });

  const dx = transform?.x || 0;
  const dy = transform?.y || 0;

  const handleDragEnd = (finalDx, finalDy) => {
    // 1. Player lets go -> Enter 'dropping' slam phase instantly
    setPhase('dropping');
    
    const dropX = position.x + finalDx;
    const dropY = position.y + finalDy;

    setPosition({ x: dropX, y: dropY });

    if (onStampDropped) {
      onStampDropped({ 
        x: dropX + STAMPER.width / 2, 
        y: dropY + STAMPER.stampOffsetY 
      });
    }

    // 2. Wait 500ms while slammed down, then lift up and slide back home
    setTimeout(() => {
      setPhase('returning');
      setPosition(HOME);
      setTimeout(() => setPhase('idle'), 300);
    }, 500);
  };

  // 🖼️ Dynamic frame controller
  // Uses StamperImageDropped ONLY when phase is exactly 'dropping'
  const currentStamperAsset = (phase === 'dropping') 
    ? StamperImageDropped 
    : StamperImageNormal;

  return (
    <div
      ref={setNodeRef}
      className={`stamper-tool ${phase}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: transform ? `translate3d(${dx}px, ${dy}px, 0)` : undefined,
      }}
    >
      {/* SHADOW */}
      <div
        className={`stamper-shadow ${isDragging ? 'active' : ''}`}
        style={{
          left: `${STAMPER.width / 2}px`,
          top: `${STAMPER.stampOffsetY + (isDragging ? DRAG_LIFT_HEIGHT : 0)}px`,
        }}
      />

      {/* STAMPER IMAGE */}
      <img
        src={currentStamperAsset}
        alt="stamper"
        className="stamper-image"
        style={{
          transform: isDragging ? `translateY(${-DRAG_LIFT_HEIGHT}px)` : 'none'
        }}
        {...listeners}
        {...attributes}
      />
    </div>
  );
}