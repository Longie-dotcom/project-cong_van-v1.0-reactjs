import { useEffect, useRef, useState } from "react";
import { DndContext } from "@dnd-kit/core";

import Frame from "./../../assets/image/frame.png";
import Paper from "../item/Paper";
import Mail from "../item/Mail"; 
import ReorganizeNormal from "./../../assets/image/button/reorganize1.png";
import ReorganizeHovered from "./../../assets/image/button/reorganize2.png";
import ReorganizeClicked from "./../../assets/image/button/reorganize3.png";

import StampingSound from "./../../assets/sound/stamp.mp3"; // Kept if you still want a click/confirmation sound!
import OpenMailSound from "./../../assets/sound/open-mail.mp3";
import TabSwitchSound from "./../../assets/sound/tab-switch.mp3";
import { getEventByPhase, EVENTS_DATABASE } from "../../data/gameEvents";

import "./GameScene.css";
import News from "../item/News";
import Telephone from "../item/Telephone";
import StatTab from "../item/StatTab";

export default function GameScene({
  currentPhaseID = "PHASE_1",
  currentEventID = null,
  eventHistory = [],
  onGameStateUpdate,
  onGameEnd,
}) {
  const [isPhoneDialogueActive, setIsPhoneDialogueActive] = useState(false);
  const [hoveredEffectText, setHoveredEffectText] = useState(null);

  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (hoveredEffectText) {
      timerRef.current = setTimeout(() => {
        setHoveredEffectText(null);
      }, 10000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [hoveredEffectText]);

  const playPaperRustle = () => {
    const audio = new Audio(OpenMailSound);
    audio.volume = 0.55;
    audio.play().catch(() => {});
  };

  const playDeskSlide = () => {
    const audio = new Audio(TabSwitchSound);
    audio.volume = 0.45;
    audio.play().catch(() => {});
  };

  const [fadePhase, setFadePhase] = useState("in");
  const [isTransitioning, setIsTransitioning] = useState(true);

  const [playerStats, setPlayerStats] = useState({
    Resource: 50,
    Security: 50,
    Trust: 50,
    Economy: 50,
    Equality: 50,
  });

  const INITIAL_PAPER_POS = { x: 500, y: 200 };
  const [paperPos, setPaperPos] = useState(INITIAL_PAPER_POS);
  const [livePaperDelta, setLivePaperDelta] = useState({ x: 0, y: 0 });

  const [activeMailsList, setActiveMailsList] = useState([]);
  const [mailPositions, setMailPositions] = useState({});
  const [liveMailDelta, setLiveMailDelta] = useState({ x: 0, y: 0 });
  const [activeMailDragID, setActiveMailDragID] = useState(null);

  const [activeTab, setActiveTab] = useState("A");
  const [btnState, setBtnState] = useState("normal");
  const hasReportedStateRef = useRef(false);

  const [gameEventID, setGameEventID] = useState(() => {
    if (currentEventID) return currentEventID;
    const initialEvent = getEventByPhase(currentPhaseID, {
      currentPhaseID,
      currentEventID: null,
      eventHistory,
    });
    return initialEvent ? initialEvent.EventID : null;
  });

  const effectiveEventID = currentEventID ?? gameEventID;
  const currentEventData = EVENTS_DATABASE[effectiveEventID];

  useEffect(() => {
    if (!currentEventData?.MailsList) return;

    const updateTimer = setTimeout(() => {
      setActiveMailsList((prevMails) => {
        const updatedMails = [...prevMails];
        const newMailEntries = [];

        currentEventData.MailsList.forEach((newMail, idx) => {
          const exists = updatedMails.some((m) => m.id === newMail.id);
          if (!exists) {
            updatedMails.push(newMail);
            newMailEntries.push({ id: newMail.id, idx });
          }
        });

        if (newMailEntries.length === 0) {
          return prevMails;
        }

        setMailPositions((prevPositions) => {
          const nextPositions = { ...prevPositions };
          newMailEntries.forEach(({ id, idx }) => {
            if (!nextPositions[id]) {
              nextPositions[id] = { x: 950 + idx * 30, y: 400 + idx * 20 };
            }
          });
          return nextPositions;
        });

        return updatedMails;
      });
    }, 0);

    return () => clearTimeout(updateTimer);
  }, [currentEventData]);

  const currentDocumentsList =
    currentEventData?.Choices.map((choice) => ({
      id: choice.ChoiceID,
      title: choice.Title,
      content: choice.Content,
      effects: choice.Effects,
      nextPhaseID: choice.NextPhaseID,
      EndingPayload: choice.EndingPayload,
    })) || [];

  useEffect(() => {
    if (hasReportedStateRef.current) return;

    if (currentEventID || typeof onGameStateUpdate !== "function") {
      hasReportedStateRef.current = true;
      return;
    }

    if (effectiveEventID) {
      onGameStateUpdate({
        currentPhaseID,
        currentEventID: effectiveEventID,
        eventHistory,
      });
      hasReportedStateRef.current = true;
    }
  }, [
    currentEventID,
    currentPhaseID,
    effectiveEventID,
    eventHistory,
    onGameStateUpdate,
  ]);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setFadePhase("idle");
      setIsTransitioning(false);
    }, 800);
    return () => clearTimeout(introTimer);
  }, []);

  const PAPER_SIZE = { width: 374, height: 544 };
  const MAIL_SIZE = { width: 80, height: 60 };
  const DESK_WIDTH = 1920;
  const DESK_HEIGHT = 1080;

  // Cleaned up obstacles to exclude stamper elements
  const OBSTACLES = [
    { id: "news-board", left: 1360, top: 300, width: 436, height: 736 },
    { id: "wall-left", left: -100, top: 0, width: 100, height: DESK_HEIGHT },
    { id: "wall-right", left: DESK_WIDTH, top: 0, width: 100, height: DESK_HEIGHT },
    { id: "wall-top", left: 0, top: -100, width: DESK_WIDTH, height: 100 },
    { id: "wall-bottom", left: 0, top: DESK_HEIGHT, width: DESK_WIDTH, height: 100 },
  ];

  function handleReorganizeDesk() {
    if (isTransitioning) return;
    setPaperPos(INITIAL_PAPER_POS);
    setLivePaperDelta({ x: 0, y: 0 });
    setMailPositions((prev) => {
      const resetPositions = { ...prev };
      activeMailsList.forEach((mail, idx) => {
        resetPositions[mail.id] = { x: 950 + idx * 20, y: 400 };
      });
      return resetPositions;
    });
    setLiveMailDelta({ x: 0, y: 0 });
  }

  function handleDragStart(event) {
    if (isTransitioning) return;
    const { active } = event;

    if (active.id === "paper-1") {
      setLivePaperDelta({ x: 0, y: 0 });
      playPaperRustle();
    }
    if (typeof active.id === "string" && active.id.startsWith("mail-")) {
      setActiveMailDragID(active.id);
      setLiveMailDelta({ x: 0, y: 0 });
      playPaperRustle();
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

  // Identical drag movement logic minus any stamper processing
  function handleDragMove(event) {
    if (isTransitioning) return;
    const { active, delta } = event;

    if (active.id === "paper-1") {
      let adjustedDelta = { x: delta.x, y: delta.y };
      let targetX = paperPos.x + adjustedDelta.x;
      let targetY = paperPos.y + adjustedDelta.y;
      let paperRect = {
        left: targetX,
        top: targetY,
        width: PAPER_SIZE.width,
        height: PAPER_SIZE.height,
      };

      for (let pass = 0; pass < 2; pass++) {
        for (const obstacle of OBSTACLES) {
          if (checkAABBCollision(paperRect, obstacle)) {
            const overlapLeft = paperRect.left + paperRect.width - obstacle.left;
            const overlapRight = obstacle.left + obstacle.width - paperRect.left;
            const overlapTop = paperRect.top + paperRect.height - obstacle.top;
            const overlapBottom = obstacle.top + obstacle.height - paperRect.top;
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
      let mailRect = {
        left: currentMailOrigin.x + adjustedDelta.x,
        top: currentMailOrigin.y + adjustedDelta.y,
        width: MAIL_SIZE.width,
        height: MAIL_SIZE.height,
      };

      for (let pass = 0; pass < 2; pass++) {
        for (const obstacle of OBSTACLES) {
          if (checkAABBCollision(mailRect, obstacle)) {
            const overlapLeft = mailRect.left + mailRect.width - obstacle.left;
            const overlapRight = obstacle.left + obstacle.width - mailRect.left;
            const overlapTop = mailRect.top + mailRect.height - obstacle.top;
            const overlapBottom = obstacle.top + obstacle.height - mailRect.top;
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

    if (active.id === "paper-1") {
      setPaperPos((prev) => ({
        x: prev.x + livePaperDelta.x,
        y: prev.y + livePaperDelta.y,
      }));
      setLivePaperDelta({ x: 0, y: 0 });
      playDeskSlide();
    }

    if (active.id === activeMailDragID) {
      setMailPositions((prev) => ({
        ...prev,
        [activeMailDragID]: {
          x: (prev[activeMailDragID]?.x || 950) + liveMailDelta.x,
          y: (prev[activeMailDragID]?.y || 400) + liveMailDelta.y,
        },
      }));
      setLiveMailDelta({ x: 0, y: 0 });
      setActiveMailDragID(null);
      playDeskSlide();
    }
  }

  // 🎯 NEW REPLACEMENT ACTION: Direct Selection Handler instead of Stamp Drop event
  function handleSelectChoice(choiceID) {
    if (isTransitioning || !currentEventData) return;

    const currentSelectedDoc = currentDocumentsList.find((doc) => doc.id === choiceID);

    if (currentSelectedDoc) {
      setIsTransitioning(true);

      // Play selection confirmation audio
      const audio = new Audio(StampingSound);
      audio.volume = 0.8;
      audio.play().catch((err) => console.log("Sound error:", err));

      // Calculate state updates
      setPlayerStats((prev) => {
        const updated = { ...prev };
        const modifications = currentSelectedDoc.effects;
        if (Array.isArray(modifications)) {
          modifications.forEach((mod) => {
            if (mod.effect) {
              Object.keys(mod.effect).forEach((statKey) => {
                if (updated[statKey] !== undefined) {
                  updated[statKey] = Math.max(
                    0,
                    Math.min(100, updated[statKey] + mod.effect[statKey]),
                  );
                }
              });
            }
          });
        } else if (modifications && typeof modifications === "object") {
          Object.keys(updated).forEach((key) => {
            if (modifications[key] !== undefined) {
              updated[key] = Math.max(
                0,
                Math.min(100, updated[key] + modifications[key]),
              );
            }
          });
        }
        return updated;
      });

      setTimeout(() => {
        setFadePhase("out");
      }, 600); // Shorter cinematic wait time since there is no visual stamping time

      setTimeout(() => {
        const updatedHistory = [...eventHistory, effectiveEventID];
        const targetedPhaseID = currentSelectedDoc.nextPhaseID;

        if (targetedPhaseID === "ENDING" || currentSelectedDoc.EndingPayload) {
          if (typeof onGameEnd === "function") {
            onGameEnd(currentSelectedDoc.EndingPayload);
          }
          return;
        }

        const temporaryStatePayload = {
          currentPhaseID: targetedPhaseID,
          currentEventID: effectiveEventID,
          eventHistory: updatedHistory,
        };
        const nextEventObj = getEventByPhase(targetedPhaseID, temporaryStatePayload);

        setActiveTab("A");
        setPaperPos(INITIAL_PAPER_POS);
        setLivePaperDelta({ x: 0, y: 0 });

        if (nextEventObj) {
          setGameEventID(nextEventObj.EventID);
          if (typeof onGameStateUpdate === "function") {
            onGameStateUpdate({
              currentPhaseID: targetedPhaseID,
              currentEventID: nextEventObj.EventID,
              eventHistory: updatedHistory,
            });
          }
        }

        setFadePhase("in");
      }, 1600);

      setTimeout(() => {
        if (currentSelectedDoc.nextPhaseID !== "ENDING") {
          setFadePhase("idle");
          setIsTransitioning(false);
        }
      }, 2600);
    }
  }

  let currentBtnSrc = ReorganizeNormal;
  if (btnState === "hover") currentBtnSrc = ReorganizeHovered;
  if (btnState === "click") currentBtnSrc = ReorganizeClicked;

  return (
    <div className={`game-screen ${isTransitioning ? "desk-frozen" : ""}`}>
      <DndContext
        onDragStart={handleDragStart}
        onDragMove={handleDragMove}
        onDragEnd={handleDragEnd}
      >
        <div className="desk-area">
          <img src={Frame} alt="Desk Frame" className="desk-frame" />
          <StatTab stats={playerStats} />

          {currentEventData ? (
            <>
              {/* Note: Update your <Paper /> component to accept an onConfirmChoice or execute handleSelectChoice directly inside it via button/tabs */}
              <Paper
                currentX={paperPos.x}
                currentY={paperPos.y}
                liveDelta={livePaperDelta}
                activeTab={activeTab}
                setActiveTab={isTransitioning ? () => {} : setActiveTab}
                documents={currentDocumentsList}
                onChoiceConfirm={handleSelectChoice} 
                onChoiceHover={null}
                onEffectHover={setHoveredEffectText}
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
                <News
                  title={currentEventData.Newspaper.Title}
                  content={currentEventData.Newspaper.Content}
                  onGameEnd={onGameEnd}
                />
              )}

              <Telephone
                key={`phone-node-reset-${currentEventData.EventID}`}
                phoneCalls={currentEventData.Telephone?.phoneCalls || []}
                onDialogueToggle={(isActive) => setIsPhoneDialogueActive(isActive)}
              />

              {hoveredEffectText && !isTransitioning && (
                <div className="telegraph-ticker-tape">
                  <div className="ticker-tape-header">PHÂN TÍCH BIỆN CHỨNG</div>
                  <div className="ticker-tape-content-wrapper">
                    <div className="ticker-tape-text">
                      DỰ BÁO BIỆN CHỨNG: {hoveredEffectText}
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="desk-loading-indicator">
              Đang nạp dữ liệu từ kho lưu trữ...
            </div>
          )}

          <button
            className={`reorganize-image-btn ${isTransitioning ? "btn-disabled" : ""}`}
            onClick={handleReorganizeDesk}
            onMouseEnter={() => !isTransitioning && setBtnState("hover")}
            onMouseLeave={() => setBtnState("normal")}
            onMouseDown={() => !isTransitioning && setBtnState("click")}
            onMouseUp={() => !isTransitioning && setBtnState("hover")}
            disabled={isTransitioning}
          >
            <img
              src={currentBtnSrc}
              alt="Reorganize Desk"
              className="pixel-button-art"
            />
          </button>

          {fadePhase !== "idle" && (
            <div
              className={`retro-scene-overlay ${fadePhase === "out" ? "fade-out-world" : "fade-in-new-world"}`}
            />
          )}
        </div>
      </DndContext>
    </div>
  );
}