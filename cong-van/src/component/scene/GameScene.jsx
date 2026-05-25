import { useState, useEffect } from 'react';
import { DndContext } from '@dnd-kit/core';

import Frame from './../../assets/image/frame.png';
import Paper from '../item/Paper';
import StamperTool from '../item/StamperTool';
import StamperContainer from '../item/StamperContainer';
import Mail from '../item/Mail'; // 🆕 Import Component Mail mới
import ReorganizeNormal from './../../assets/image/button/reorganize1.png';
import ReorganizeHovered from './../../assets/image/button/reorganize2.png';
import ReorganizeClicked from './../../assets/image/button/reorganize3.png';

import StampingSound from './../../assets/sound/stamp.mp3';
import { getEventByPhase, EVENTS_DATABASE } from '../../data/gameEvents'; 

import './GameScene.css';
import News from '../item/News';
import Telephone from '../item/Telephone';
import StatTab from '../item/StatTab';

export default function GameScene({
  currentPhaseID = "PHASE_1",
  currentEventID = null, 
  eventHistory = [],
  onGameStateUpdate,
  onGameEnd 
}) {
  // 🎯 NEW STATE: Tracks if the stamper is active
  const [isStamperDragging, setIsStamperDragging] = useState(false);

  const [stampedDocuments, setStampedDocuments] = useState([]);
  const [fadePhase, setFadePhase] = useState('in'); 
  const [paperVisualStamps, setPaperVisualStamps] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  const [playerStats, setPlayerStats] = useState({ Resource: 50, Security: 50, Trust: 50, Economy: 50, Equality: 50 });

  const INITIAL_PAPER_POS = { x: 500, y: 200 };
  const [paperPos, setPaperPos] = useState(INITIAL_PAPER_POS);
  const [livePaperDelta, setLivePaperDelta] = useState({ x: 0, y: 0 });

  const [activeMailsList, setActiveMailsList] = useState([]);
  const [mailPositions, setMailPositions] = useState({});
  const [liveMailDelta, setLiveMailDelta] = useState({ x: 0, y: 0 });
  const [activeMailDragID, setActiveMailDragID] = useState(null);

  const [activeTab, setActiveTab] = useState('A');
  const [btnState, setBtnState] = useState('normal'); 

  const [gameEventID, setGameEventID] = useState(() => {
    if (currentEventID) return currentEventID;
    const initialEvent = getEventByPhase(currentPhaseID, { currentPhaseID, currentEventID: null, eventHistory });
    return initialEvent ? initialEvent.EventID : null;
  });

  useEffect(() => {
    if (currentEventID && currentEventID !== gameEventID) {
      setGameEventID(currentEventID);
    }
  }, [currentEventID]);

  const currentEventData = EVENTS_DATABASE[gameEventID];

  useEffect(() => {
    if (currentEventData?.MailsList) {
      setActiveMailsList(prevMails => {
        const updatedMails = [...prevMails];
        const newPositions = { ...mailPositions };
        currentEventData.MailsList.forEach((newMail, idx) => {
          const exists = updatedMails.some(m => m.id === newMail.id);
          if (!exists) {
            updatedMails.push(newMail);
            if (!newPositions[newMail.id]) {
              newPositions[newMail.id] = { x: 950 + (idx * 30), y: 400 + (idx * 20) };
            }
          }
        });
        return updatedMails;
      });
    }
  }, [gameEventID, currentEventData]);

  const currentDocumentsList = currentEventData?.Choices.map(choice => ({
    id: choice.ChoiceID,      
    title: choice.Title,      
    content: choice.Content,   
    effects: choice.Effects,
    nextPhaseID: choice.NextPhaseID,
    EndingPayload: choice.EndingPayload 
  })) || [];

  useEffect(() => {
    if (!currentEventID && gameEventID && typeof onGameStateUpdate === 'function') {
      onGameStateUpdate({ currentPhaseID, currentEventID: gameEventID, eventHistory });
    }
    const introTimer = setTimeout(() => {
      setFadePhase('idle');
      setIsTransitioning(false);
    }, 800);
    return () => clearTimeout(introTimer);
  }, []);

  const STAMPERX = 126;
  const STAMPERY = 658;
  const PAPER_SIZE = { width: 374, height: 544 };
  const MAIL_SIZE = { width: 80, height: 60 };
  const DESK_WIDTH = 1920;
  const DESK_HEIGHT = 1080;

  const OBSTACLES = [
    { id: 'news-board', left: 1360, top: 300, width: 436, height: 736 },
    { id: 'stamper-container', left: STAMPERX - 28, top: STAMPERY + 90, width: 192, height: 122 },
    { id: 'wall-left',   left: -100, top: 0, width: 100, height: DESK_HEIGHT },
    { id: 'wall-right',  left: DESK_WIDTH, top: 0, width: 100, height: DESK_HEIGHT },
    { id: 'wall-top',    left: 0, top: -100, width: DESK_WIDTH, height: 100 },
    { id: 'wall-bottom', left: 0, top: DESK_HEIGHT, width: DESK_WIDTH, height: 100 }
  ];

  function handleReorganizeDesk() {
    if (isTransitioning) return;
    setPaperPos(INITIAL_PAPER_POS);
    setLivePaperDelta({ x: 0, y: 0 }); 
    setMailPositions(prev => {
      const resetPositions = { ...prev };
      activeMailsList.forEach((mail, idx) => {
        resetPositions[mail.id] = { x: 950 + (idx * 20), y: 400 };
      });
      return resetPositions;
    });
    setLiveMailDelta({ x: 0, y: 0 });
  }

  function handleDragStart(event) {
    if (isTransitioning) return; 
    const { active } = event;

    // ⚡ DETECT IF STAMPER WAS PICKED UP
    if (active.id === 'stamper-tool') {
      setIsStamperDragging(true);
    }

    if (active.id === 'paper-1') {
      setLivePaperDelta({ x: 0, y: 0 });
    }
    if (typeof active.id === 'string' && active.id.startsWith('mail-')) {
      setActiveMailDragID(active.id);
      setLiveMailDelta({ x: 0, y: 0 });
    }
  }

  function checkAABBCollision(rect1, rect2) {
    return (
      rect1.left < rect2.left + rect2.width &&
      rect1.left + rect1.width > rect2.left &&
      rect1.top < rect2.top + rect2.height &&
      rect1.top + rect1.height > rect2.top
    );
  }

  function handleDragMove(event) {
    if (isTransitioning) return; 
    const { active, delta } = event;

    if (active.id === 'paper-1') {
      let adjustedDelta = { x: delta.x, y: delta.y };
      let targetX = paperPos.x + adjustedDelta.x;
      let targetY = paperPos.y + adjustedDelta.y;
      let paperRect = { left: targetX, top: targetY, width: PAPER_SIZE.width, height: PAPER_SIZE.height };

      for (let pass = 0; pass < 2; pass++) {
        for (const obstacle of OBSTACLES) {
          if (checkAABBCollision(paperRect, obstacle)) {
            const overlapLeft = (paperRect.left + paperRect.width) - obstacle.left;
            const overlapRight = (obstacle.left + obstacle.width) - paperRect.left;
            const overlapTop = (paperRect.top + paperRect.height) - obstacle.top;
            const overlapBottom = (obstacle.top + obstacle.height) - paperRect.top;
            const minOverlap = Math.min(overlapLeft, overlapRight, overlapTop, overlapBottom);

            if (minOverlap === overlapLeft) adjustedDelta.x -= overlapLeft;
            else if (minOverlap === overlapRight) adjustedDelta.x += overlapRight;
            else if (minOverlap === overlapTop) adjustedDelta.y -= overlapTop;
            else if (minOverlap === overlapBottom) adjustedDelta.y += overlapBottom;

            paperRect.left = paperPos.x + adjustedDelta.x;
            paperRect.top = paperPos.y + adjustedDelta.y;
          }
        }
      }
      setLivePaperDelta(adjustedDelta);
    }

    if (active.id === activeMailDragID) {
      let adjustedDelta = { x: delta.x, y: delta.y };
      const currentMailOrigin = mailPositions[activeMailDragID] || { x: 950, y: 400 };
      let mailRect = { left: currentMailOrigin.x + adjustedDelta.x, top: currentMailOrigin.y + adjustedDelta.y, width: MAIL_SIZE.width, height: MAIL_SIZE.height };

      for (let pass = 0; pass < 2; pass++) {
        for (const obstacle of OBSTACLES) {
          if (checkAABBCollision(mailRect, obstacle)) {
            const overlapLeft = (mailRect.left + mailRect.width) - obstacle.left;
            const overlapRight = (obstacle.left + obstacle.width) - mailRect.left;
            const overlapTop = (mailRect.top + mailRect.height) - obstacle.top;
            const overlapBottom = (obstacle.top + obstacle.height) - mailRect.top;
            const minOverlap = Math.min(overlapLeft, overlapRight, overlapTop, overlapBottom);

            if (minOverlap === overlapLeft) adjustedDelta.x -= overlapLeft;
            else if (minOverlap === overlapRight) adjustedDelta.x += overlapRight;
            else if (minOverlap === overlapTop) adjustedDelta.y -= overlapTop;
            else if (minOverlap === overlapBottom) adjustedDelta.y += overlapBottom;

            mailRect.left = currentMailOrigin.x + adjustedDelta.x;
            mailRect.top = currentMailOrigin.y + adjustedDelta.y;
          }
        }
      }
      setLiveMailDelta(adjustedDelta);
    }
  }

  function handleDragEnd(event) {
    if (isTransitioning) return; 
    const { active } = event;
    
    // ⚡ RESET TRACKING STATE REGARDLESS OF WHERE IT DROPPED
    if (active.id === 'stamper-tool') {
      setIsStamperDragging(false);
    }

    if (active.id === 'stamper-tool' && active.data.current?.onDragEndCustom) {
      active.data.current.onDragEndCustom(event.delta.x, event.delta.y);
    }

    if (active.id === 'paper-1') {
      setPaperPos(prev => ({ x: prev.x + livePaperDelta.x, y: prev.y + livePaperDelta.y }));
      setLivePaperDelta({ x: 0, y: 0 });
    }

    if (active.id === activeMailDragID) {
      setMailPositions(prev => ({
        ...prev,
        [activeMailDragID]: {
          x: (prev[activeMailDragID]?.x || 950) + liveMailDelta.x,
          y: (prev[activeMailDragID]?.y || 400) + liveMailDelta.y
        }
      }));
      setLiveMailDelta({ x: 0, y: 0 });
      setActiveMailDragID(null);
    }
  }

  function handleStampDropped(stampCoordinates) {
    if (isTransitioning) return;

    const { x: sx, y: sy } = stampCoordinates;
    const totalPaperX = paperPos.x + livePaperDelta.x;
    const totalPaperY = paperPos.y + livePaperDelta.y;

    const hitLeft = sx >= totalPaperX;
    const hitRight = sx <= totalPaperX + PAPER_SIZE.width;
    const hitTop = sy >= totalPaperY;
    const hitBottom = sy <= totalPaperY + PAPER_SIZE.height;

    if (hitLeft && hitRight && hitTop && hitBottom && currentEventData) {      
      const currentSelectedDoc = currentDocumentsList.find(doc => doc.id === activeTab);

      if (currentSelectedDoc) {
        setIsTransitioning(true);

        const audio = new Audio(StampingSound);
        audio.volume = 0.8; 
        audio.play().catch(err => console.log("Sound error:", err));

        const localX = sx - totalPaperX;
        const localY = sy - totalPaperY;

        setPaperVisualStamps(prev => [...prev, { x: localX, y: localY + 150, tab: activeTab }]);

        setPlayerStats(prev => {
          const updated = { ...prev };
          const modifications = currentSelectedDoc.effects;
          Object.keys(updated).forEach(key => {
            if (modifications[key] !== undefined) {
              updated[key] = Math.max(0, Math.min(100, updated[key] + modifications[key]));
            }
          });
          return updated;
        });

        if (!stampedDocuments.includes(activeTab)) {
          setStampedDocuments(prev => [...prev, activeTab]);
        }

        setTimeout(() => { setFadePhase('out'); }, 1200);

        setTimeout(() => {
          const updatedHistory = [...eventHistory, gameEventID];
          const targetedPhaseID = currentSelectedDoc.nextPhaseID;

          if (targetedPhaseID === "ENDING" || currentSelectedDoc.EndingPayload) {
            if (typeof onGameEnd === 'function') {
              onGameEnd(currentSelectedDoc.EndingPayload);
            }
            return; 
          }

          const temporaryStatePayload = { currentPhaseID: targetedPhaseID, currentEventID: gameEventID, eventHistory: updatedHistory };
          const nextEventObj = getEventByPhase(targetedPhaseID, temporaryStatePayload);

          setActiveTab('A');
          setPaperVisualStamps([]);
          setPaperPos(INITIAL_PAPER_POS);
          setLivePaperDelta({ x: 0, y: 0 });

          if (nextEventObj) {
            setGameEventID(nextEventObj.EventID);
            if (typeof onGameStateUpdate === 'function') {
              onGameStateUpdate({ currentPhaseID: targetedPhaseID, currentEventID: nextEventObj.EventID, eventHistory: updatedHistory });
            }
          }

          setFadePhase('in');
        }, 2200);

        setTimeout(() => {
          if (currentSelectedDoc.nextPhaseID !== "ENDING") {
            setFadePhase('idle');
            setIsTransitioning(false); 
          }
        }, 3200);
      }
    }
  }

  let currentBtnSrc = ReorganizeNormal;
  if (btnState === 'hover') currentBtnSrc = ReorganizeHovered;
  if (btnState === 'click') currentBtnSrc = ReorganizeClicked;

  return (
    <div className={`game-screen ${isTransitioning ? 'desk-frozen' : ''}`}>
      <DndContext onDragStart={handleDragStart} onDragMove={handleDragMove} onDragEnd={handleDragEnd}>
        <div className="desk-area">
          <img src={Frame} alt="Desk Frame" className="desk-frame" />
          <StatTab stats={playerStats} />

          {currentEventData ? (
            <>
              {/* 🎯 CONFIGURED WITH THE DRAG TRACKING PROP BELOW */}
              <Paper
                currentX={paperPos.x}
                currentY={paperPos.y}
                liveDelta={livePaperDelta}
                activeTab={activeTab}
                setActiveTab={isTransitioning ? () => {} : setActiveTab}
                documents={currentDocumentsList}
                visualStamps={paperVisualStamps}
                onStampDropped={handleStampDropped}
                isStamperDragging={isStamperDragging} 
              />

              {activeMailsList.map((mailItem) => {
                const pos = mailPositions[mailItem.id] || { x: 950, y: 400 };
                const isCurrentMailDragging = activeMailDragID === mailItem.id;

                return (
                  <Mail 
                    key={mailItem.id}
                    id={mailItem.id}
                    currentX={pos.x}
                    currentY={pos.y}
                    liveDelta={isCurrentMailDragging ? liveMailDelta : { x: 0, y: 0 }}
                    title={mailItem.Title}
                    content={mailItem.Content}
                    normalImg={mailItem.NormalAsset} 
                    hoverImg={mailItem.HoverAsset}
                    disabled={isTransitioning}
                  />
                );
              })}

              {currentEventData.Newspaper && (
                <News title={currentEventData.Newspaper.Title} content={currentEventData.Newspaper.Content} onGameEnd={onGameEnd} />
              )}

              <Telephone key={`phone-node-reset-${currentEventData.EventID}`} phoneCalls={currentEventData.Telephone?.phoneCalls || []} />
            </>
          ) : (
            <div className="desk-loading-indicator">Đang nạp dữ liệu từ kho lưu trữ...</div>
          )}

          <StamperTool x={STAMPERX} y={STAMPERY} onStampDropped={handleStampDropped} disabled={isTransitioning} />
          <StamperContainer />

          <button 
            className={`reorganize-image-btn ${isTransitioning ? 'btn-disabled' : ''}`} 
            onClick={handleReorganizeDesk}
            onMouseEnter={() => !isTransitioning && setBtnState('hover')}
            onMouseLeave={() => setBtnState('normal')}
            onMouseDown={() => !isTransitioning && setBtnState('click')}
            onMouseUp={() => !isTransitioning && setBtnState('hover')}
            disabled={isTransitioning}
          >
            <img src={currentBtnSrc} alt="Reorganize Desk" className="pixel-button-art" />
          </button>
        
          {fadePhase !== 'idle' && (
            <div className={`retro-scene-overlay ${fadePhase === 'out' ? 'fade-out-world' : 'fade-in-new-world'}`} />
          )}
        </div>
      </DndContext>
    </div>
  );
}