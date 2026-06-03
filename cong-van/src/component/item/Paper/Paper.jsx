import { useEffect, useRef, useState, useMemo } from 'react';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import { STAMPER_CONFIG } from '../../../data/assets/stamper';
import { PAPER_CONFIG } from '../../../data/assets/paper';
import { STATS_CONFIG, STATS } from '../../../data/assets/stats';
import TabMenu from './TabMenu';
import './Paper.css';

export default function Paper({
  currentX = 200,
  currentY = 120,
  liveDelta = { x: 0, y: 0 },
  playerState = {},
  eventData,
  marks = [],
}) {
  const [activeTab, setActiveTab] = useState("I");
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const playerStateRef = useRef(playerState);
  const { setNodeRef: setDraggableRef, attributes, listeners, isDragging } = useDraggable({ id: 'paper-1' });
  const { setNodeRef: setDroppableRef } = useDroppable({ id: 'paper-1' });
  const setCombinedRef = (node) => {
    setDraggableRef(node);
    setDroppableRef(node);
  };

  const currentChoice = useMemo(() => {
    return eventData?.Paper?.choices?.[activeTab];
  }, [eventData, activeTab]);

  const willGoBankrupt = useMemo(() => {
    if (!currentChoice?.effect) return false;

    const currentMoney = playerState[STATS.ECONOMY] ?? 0;
    const economyEffect = currentChoice.effect.find((ef) => {
      const statKey = Array.isArray(ef.stat)
        ? ef.stat[0]
        : ef.stat;
      return statKey === STATS.ECONOMY;
    });

    if (!economyEffect) return false;

    return currentMoney + economyEffect.value < 0;
  }, [currentChoice, playerState]);

  useEffect(() => {
    playerStateRef.current = playerState;
  }, [playerState]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    }
  }, [activeTab]);

  return (
    <div
      ref={setCombinedRef}
      style={{
        left: `${currentX}px`,
        top: `${currentY}px`,
        transform: isDragging ? `translate3d(${liveDelta.x}px, ${liveDelta.y}px, 0)` : undefined
      }}
      className="paper"
      data-current-choice={currentChoice ? JSON.stringify(currentChoice) : ""}
    >
      <div className="drag-handle" {...listeners} {...attributes}>
        <img src={PAPER_CONFIG.UI.background} className="paper-image" alt="paper-background" />
      </div>

      {currentChoice ? (
        <div className="paper-content">
          <h2 className="paper-title">{currentChoice.title}</h2>
          <p className="paper-description">{currentChoice.description}</p>

          <div className="effects-list">
            {currentChoice.effect?.map((ef, idx) => {
              const statKey = Array.isArray(ef.stat) ? ef.stat[0] : ef.stat;
              const statConfig = STATS_CONFIG[statKey];

              return (
                <div key={idx} className="effect-box">
                  <div className="effect-icon">
                    <img src={statConfig?.particle} alt={statConfig?.label} />
                  </div>

                  <div className="effect-detail">
                    <div className="effect-header">
                      <span className="effect-name">
                        {statConfig?.label}
                      </span>

                      <span
                        className={`effect-value ${ef.value > 0 ? "positive" : "negative"
                          }`}
                      >
                        {ef.value > 0 ? "+" : ""}
                        {ef.value}
                      </span>
                    </div>

                    <div className="effect-description">
                      {ef.explaination}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {willGoBankrupt && (
            <div className="paper-warning">
              Lựa chọn này sẽ khiến ngân quỹ âm.
              Hội đồng quản trị có thể sa thải bạn ngay lập tức.
            </div>
          )}
        </div>
      ) : (
        <div className="paper-content">
        </div>
      )}

      {marks.map((mark) => (
        <img
          key={mark.id}
          src={STAMPER_CONFIG.IMAGES.stamp}
          className="stamp-mark"
          style={{
            left: `${mark.x}px`,
            top: `${mark.y}px`,
          }}
        />
      ))}

      <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}