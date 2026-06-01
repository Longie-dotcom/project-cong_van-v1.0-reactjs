import { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import { useGameState } from "../../hooks/useGameState";
import { useDragAndDrop } from "../../hooks/useDragAndDrop";
import { useGameActions } from "../../hooks/useGameAction";
import { usePassiveCoal } from "../../hooks/usePassiveCoal";
import { useGameHub } from "../../hooks/useGameHub";
import { STATS, FLAG } from "../../data/assets/stats";
import { GAME_DATA } from "../../data/assets";
import { ENDINGS } from "../../data/phases/ending";

import Paper from "../item/Paper/Paper";
import Telephone from "../item/Telephone/Telephone";
import Mine from "../item/Mine/Mine";
import Mail from "../item/Indicator/Mail";
import Newspaper from "../item/Indicator/Newspaper";
import StatTab from "../item/Indicator/StatTab";
import CoalQuotaDisplay from "../item/Indicator/CoalQuotaDisplay";

import "./GameScene.css";
import SpriteButton from "../item/Button/SpriteButton";

export default function GameScene({ onGameEnd, playerState, setPlayerState }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeEvents, setActiveEvents] = useState({ mails: [], calls: [] });
  const [activeNews, setActiveNews] = useState(null);
  const [activeTab, setActiveTab] = useState("A");
  const [miners, setMiners] = useState([]);

  const isEventActive = activeEvents.mails.length > 0 || activeEvents.calls.length > 0;
  const currentPhaseData = GAME_DATA.PHASES[playerState.currentPhaseID] || {};
  const quota = currentPhaseData.Coal_Quota || 0;

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
    paperPos,
    livePaperDelta,
    mailPositions,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
    handleReorganizeDesk
  } = useDragAndDrop({
    initialPaperPos: INITIAL_PAPER_POS,
    deskObstacles: OBSTACLES,
    paperSize: PAPER_SIZE,
    mailSize: MAIL_SIZE,
    isTransitioning: isTransitioning,
    openMailSound: GAME_DATA.PAPER_RUSTLE_SOUND,
    activeMailsList: activeEvents.mails
  });

  const {
    handleUpgradeClick,
    handleMineClick,
    handleEventChoice
  } = useGameActions(
    playerState,
    setPlayerState,
    setActiveEvents,
    setActiveNews,
    currentPhaseData,
    GAME_DATA.UPGRADE_DATA,
    isTransitioning,
    isEventActive
  );

  const {
    fetchNextEvent
  } = useGameState(
    playerState
  )

  usePassiveCoal(
    playerState,
    setPlayerState
  );

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

    // Để tránh quá tải server, bạn có thể gửi sau mỗi 2 giây thay vì gửi ngay lập tức
    // Hoặc gửi ngay nếu là thay đổi quan trọng (tùy nhu cầu của bạn)
    const timer = setTimeout(syncState, 1000);

    return () => clearTimeout(timer);
  }, [playerState, isConnected, sendPlayerState]);

  // EFFECT THEO DÕI EVENTS MỚI
  useEffect(() => {
    if (isEventActive) return;

    const interval = setInterval(() => {
      const result = fetchNextEvent();

      if (!result) return;

      // =====================
      // ENDING
      // =====================
      if (result.type === "ENDING") {
        const state = playerState;

        const happiness = state[STATS.HAPPINESS] ?? 0;
        const joined = state[FLAG.JOINED_THE_REVOLUTION];

        let endingID = "BINH_MINH_HOA_GIAI";

        if (happiness < 50 && !joined) {
          endingID = "KY_NGUYEN_THEP";
        }
        else if (happiness >= 50 && joined) {
          endingID = "CHUYEN_CHINH_VO_SAN";
        }

        const ending = ENDINGS[endingID];

        onGameEnd({
          ...ending,
          endingID
        });

        return;
      }

      // =====================
      // EVENT
      // =====================
      if (result.type === "EVENT") {
        const nextEvent = result.event;

        setPlayerState(prev => ({
          ...prev,
          currentEventID: nextEvent.EventID,
          currentEventIdx: result.index + 1
        }));

        setActiveEvents({
          mails: nextEvent.MailsList || [],
          calls: nextEvent.Telephone ? [nextEvent.Telephone] : []
        });

        return;
      }

      // =====================
      // SKIP
      // =====================
      if (result.type === "SKIP") {
        setPlayerState(prev => ({
          ...prev,
          currentEventIdx: result.index + 1
        }));
      }

    }, 17000);

    return () => clearInterval(interval);
  }, [
    isEventActive,
    playerState.currentEventID,
    playerState.currentPhaseID,
    playerState.currentEventIdx
  ]);

  // EFFECT THEO DÕI CÁC UPGRADE ĐỂ TĂNG/GIẢM WORKER
  useEffect(() => {
    const totalUpgradeLevel = (
      playerState.railway +
      playerState.auto +
      playerState.tools +
      playerState.storage
    );

    // Giới hạn tối đa 20 miners
    const targetWorkerCount = Math.min(Math.floor(totalUpgradeLevel / 2), 20);

    setMiners((currentMiners) => {
      const diff = targetWorkerCount - currentMiners.length;

      if (diff === 0) return currentMiners;

      // Trường hợp 1: Thêm Worker mới
      if (diff > 0) {
        const directions = ['left', 'right', 'up', 'down'];
        const newWorkers = Array.from({ length: diff }).map((_, index) => {
          const randomDirection = directions[Math.floor(Math.random() * directions.length)];
          const spawnX = Math.floor(Math.random() * (472 - 40) + 40);

          // Tỷ lệ phân bổ vị trí spawn trên/dưới
          const spawnY = Math.random() > 0.5
            ? Math.floor(Math.random() * (390 - 100) + 100)
            : Math.floor(Math.random() * (850 - 590) + 590);

          return {
            id: `${Date.now()}-${index}-${Math.random()}`,
            direction: randomDirection,
            x: spawnX,
            y: spawnY,
          };
        });

        return [...currentMiners, ...newWorkers];
      }

      // Trường hợp 2: Giảm Worker (khi người chơi bị trừ hoặc mất nâng cấp - nếu có)
      if (diff < 0) {
        return currentMiners.slice(0, targetWorkerCount);
      }

      return currentMiners;
    });
  }, [
    playerState.railway,
    playerState.auto,
    playerState.tools,
    playerState.storage
  ]);

  return (
    <div className={`game-screen ${isTransitioning ? "desk-frozen" : ""}`}>
      <DndContext onDragStart={handleDragStart} onDragMove={handleDragMove} onDragEnd={handleDragEnd}>
        <div className="desk-area">
          <img src={GAME_DATA.DESK} alt="Desk Frame" className="desk-frame" />
          <StatTab stats={playerState} />

          <Paper
            currentX={paperPos.x} currentY={paperPos.y} liveDelta={livePaperDelta}
            activeTab={activeTab} setActiveTab={isTransitioning ? () => { } : setActiveTab}
            playerState={playerState} onUpgradeClick={handleUpgradeClick}
            isEventActive={isEventActive}
          />

          {/* Render Active Events */}
          <Telephone
            phoneCalls={activeEvents.calls}
            onCallDialed={(number) => console.log("Dialed:", number)}
            onChoiceSelect={handleEventChoice}
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

          <Mine playerState={playerState} onMineClick={handleMineClick} miners={miners} isEventActive={isEventActive} />

          <Newspaper
            title={activeNews?.title}
            content={activeNews?.content}
          />

          <CoalQuotaDisplay
            currentCoal={playerState.COAL}
            quota={quota}
          />

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