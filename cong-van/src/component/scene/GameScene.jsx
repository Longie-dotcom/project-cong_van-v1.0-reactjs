import { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import { useGameState } from "../../hooks/useGameState";
import { useDragAndDrop } from "../../hooks/useDragAndDrop";
import { useGameActions } from "../../hooks/useGameAction";
import { useGameHub } from "../../hooks/useGameHub";
import { STATS, FLAG } from "../../data/assets/stats";
import { ENDINGS } from "../../data/phases/ending";
import { ALL_EVENTS } from "../../data/phases/phases";
import { GAME_DATA } from "../../data/assets";

import Paper from "../item/Paper/Paper";
import Telephone from "../item/Telephone/Telephone";
import Mail from "../item/Indicator/Mail";
import Newspaper from "../item/Indicator/Newspaper";
import StatTab from "../item/Indicator/StatTab";
import Stamper from "../item/Stamper/Stamper";
import ErrorPopup from "../item/Indicator/ErrorPopup";

import "./GameScene.css";
import SpriteButton from "../item/Button/SpriteButton";
import Note from "../item/Note/Note";

export default function GameScene({ onGameEnd, playerState, setPlayerState }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeEvents, setActiveEvents] = useState({ mails: [], calls: [] });
  const [activeNews, setActiveNews] = useState(null);
  const [marks, setMarks] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [transitionClass, setTransitionClass] = useState("");

  const isEventActive = activeEvents.mails.length > 0 || activeEvents.calls.length > 0;
  const currentEvent = ALL_EVENTS[playerState.currentEventID];

  const INITIAL_STAMPER_POS = { x: 1500, y: 100 };
  const INITIAL_PAPER_POS = { x: 500, y: 100 };
  const PAPER_SIZE = { width: 628, height: 840 };
  const MAIL_SIZE = { width: 80, height: 60 };
  const DESK_WIDTH = 1920;
  const DESK_HEIGHT = 1080;
  const OBSTACLES = [
    { id: "news-board", left: 1360, top: 300, width: 436, height: 736 },
    { id: "wall-left", left: -100, top: 0, width: 100, height: DESK_HEIGHT },
    { id: "wall-right", left: DESK_WIDTH, top: 0, width: 100, height: DESK_HEIGHT },
    { id: "wall-top", left: 0, top: -100, width: DESK_WIDTH, height: 100 },
    { id: "wall-bottom", left: 0, top: DESK_HEIGHT, width: DESK_WIDTH, height: 100 },
  ];

  const {
    sendPlayerState,
    isConnected,
    connection
  } = useGameHub(
    "https://uncommendable-projectively-elenor.ngrok-free.dev/gameHub"
  );

  const {
    handleStamp,
    handleEventChoice
  } = useGameActions(
    playerState,
    setPlayerState,
    setActiveEvents,
    setActiveNews,
    setMarks,
    activeEvents,
    setErrorMessage,
    setTransitionClass
  );

  const {
    paperPos,
    livePaperDelta,
    mailPositions,
    isStamperReturning,
    lastStampPos,
    isStamping,
    liveStamperDelta,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
    handleReorganizeDesk
  } = useDragAndDrop({
    initialPaperPos: INITIAL_PAPER_POS,
    initialStamperPos: INITIAL_STAMPER_POS,
    onStamp: handleStamp,
    deskObstacles: OBSTACLES,
    paperSize: PAPER_SIZE,
    mailSize: MAIL_SIZE,
    isTransitioning: isTransitioning,
    openMailSound: GAME_DATA.PAPER_RUSTLE_SOUND,
    activeMailsList: activeEvents.mails
  });

  const {
    fetchNextEvent
  } = useGameState(
    playerState
  )

  const handleConversationLogged = (log) => {
    setPlayerState(prev => ({
      ...prev,
      conversationHistory: [
        ...(prev.conversationHistory || []),
        log
      ]
    }));
  };

  // EFFECT CẬP NHẬT connectionId CHO playerState
  useEffect(() => {
    // Chỉ set nếu đã kết nối và ID chưa có trong playerState
    if (isConnected && connection.current?.connectionId && !playerState.connectionId) {
      setPlayerState(prev => ({
        ...prev,
        connectionId: connection.current.connectionId
      }));
    }
  }, [isConnected, connection, playerState.connectionId, setPlayerState]);

  // EFFECT ĐỒNG BỘ STATE LÊN SERVER
  useEffect(() => {
    if (!isConnected) return;

    const syncState = async () => {
      try {
        await sendPlayerState(playerState);
      } catch (err) {
        console.error("Lỗi đồng bộ state lên server:", err);
      }
    };

    const timer = setTimeout(syncState, 1000);

    return () => clearTimeout(timer);
  }, [playerState, isConnected, sendPlayerState]);

  // EFFECT ĐIỀU PHỐI EVENT & KIỂM TRA ENDING
  useEffect(() => {
    // 1. Kiểm tra khẩn cấp: Hễ âm tiền là xử thua tức thì, không đợi hết ngày
    const currentMoney = playerState[STATS.ECONOMY] ?? 0;
    if (currentMoney < 0) {
      const endingData = ENDINGS["BANKRUPTCY"];
      if (endingData) {
        onGameEnd({
          title: endingData.title,
          subtitle: endingData.subtitle,
          description: endingData.description,
          isFailure: true,
          finalStats: playerState
        });
        return;
      }
    }

    // 2. Nếu đang trong ngày làm việc -> Giữ nguyên trạng thái bàn làm việc
    if (playerState.currentEventID !== null) return;

    // 3. Khi ngày cũ đã dọn (currentEventID === null) -> Tiến hành bốc ngày mới và check chỉ tiêu Than đầu ngày
    const result = fetchNextEvent();
    if (!result || result.type === "NONE") return;

    // Xử lý thua Quota đầu ngày
    if (result.type === "GAME_OVER_STATS") {
      const endingData = ENDINGS[result.endingKey];
      if (endingData) {
        onGameEnd({
          title: endingData.title,
          subtitle: endingData.subtitle,
          description: endingData.description,
          isFailure: true,
          finalStats: playerState
        });
        return;
      }
    }

    // Xử lý phá đảo game thành công
    if (result.type === "GAME_OVER") {
      const endingData = ENDINGS[result.endingKey];

      if (endingData) {
        onGameEnd({
          title: endingData.title,
          subtitle: endingData.subtitle,
          description: endingData.description,
          isFailure: result.endingKey !== "BINH_MINH_VUNG_DAY",
          finalStats: playerState
        });
        return;
      }
    }

    // Nạp tài nguyên cho ngày mới
    if (result.type === "EVENT" || result.type === "SIDE_EVENT") {
      const nextEvent = result.eventData;
      const nextEventID = result.eventID;
      const delay = result.type === "EVENT" ? (Math.random() * 1000) : 1000;

      const timer = setTimeout(() => {
        setPlayerState(prev => ({
          ...prev,
          currentEventID: nextEventID,
          currentEventIdx: result.type === "EVENT" ? (result.index + 1) : prev.currentEventIdx,
          objectives: nextEvent.Objectives
            ? [nextEvent.Objectives]
            : []
        }));

        setActiveEvents({
          mails: nextEvent.Mails || [],
          calls: nextEvent.Telephone?.calls || []
        });
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [
    playerState.currentEventID,
    playerState.currentEventIdx,
    playerState[STATS.ECONOMY]
  ]);

  return (
    <div className={`game-screen ${isTransitioning ? "desk-frozen" : ""}`}>
      {transitionClass && (
        <div className={`retro-scene-overlay ${transitionClass}`} />
      )}

      <ErrorPopup
        message={errorMessage}
        duration={2500}
        onClose={() => setErrorMessage(null)}
      />

      <DndContext onDragStart={handleDragStart} onDragMove={handleDragMove} onDragEnd={handleDragEnd}>
        <div className="desk-area">
          <img src={GAME_DATA.DESK} alt="Desk Frame" className="desk-frame" />
          <StatTab stats={playerState} />
          <Note history={playerState.conversationHistory} objectives={playerState.objectives} />
          <Paper
            currentX={paperPos.x} currentY={paperPos.y} liveDelta={livePaperDelta}
            playerState={playerState}
            isEventActive={isEventActive} eventData={currentEvent} marks={marks}
          />

          {/* Render Active Events */}
          <Telephone
            phoneCalls={activeEvents.calls}
            onCallDialed={(number) => console.log("Dialed:", number)}
            onChoiceSelect={handleEventChoice}
            onConversationLogged={handleConversationLogged}
          />

          {activeEvents.mails.map((mailItem) => (
            <Mail
              key={mailItem.id}
              {...mailItem}
              currentX={mailPositions[mailItem.id]?.x || 950}
              currentY={mailPositions[mailItem.id]?.y || 400}
              onChoiceSelect={handleEventChoice}
            />
          ))}

          <Newspaper
            title={activeNews?.title}
            content={activeNews?.content}
          />

          <Stamper isReturning={isStamperReturning} lastStampPos={lastStampPos} isStamping={isStamping} liveDelta={liveStamperDelta} />

          <SpriteButton
            assets={GAME_DATA.REORGANIZE_BUTTON}
            onClick={handleReorganizeDesk}
            disabled={isTransitioning}
            x={44} // Tọa độ X
            y={28}   // Tọa độ Y
          />
        </div>
      </DndContext>
    </div>
  );
}