import { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import { getNextEvent } from "../../hooks/useGameState";
import { useDragAndDrop } from "../../hooks/useDragAndDrop";

import { GAME_DATA } from "../../data/assets";

import Paper from "../item/Paper";
import Mail from "../item/Mail";
import Mine from "../item/Mine";
import News from "../item/News";
import Telephone from "../item/Telephone";
import StatTab from "../item/StatTab";
import CoalQuotaDisplay from "../item/CoalQuotaDisplay";

import "./GameScene.css";

export default function GameScene({ onGameEnd }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeEvents, setActiveEvents] = useState({
    mails: [],
    calls: []
  });
  const [activeNews, setActiveNews] = useState(null);
  const [isEventPaused, setIsEventPaused] = useState(false);
  const [miners, setMiners] = useState([]);
  const isEventActive = activeEvents.mails.length > 0 || activeEvents.calls.length > 0;
  const currentPhaseData = PHASES[playerState.currentPhaseID] || {};
  const quota = currentPhaseData.Coal_Quota || 0;
  const [activeMailsList, setActiveMailsList] = useState([]);
  const [activeTab, setActiveTab] = useState("A");
  const [btnState, setBtnState] = useState("normal");

  const INITIAL_PAPER_POS = { x: 500, y: 100 };
  const PAPER_SIZE = { width: 628, height: 840 };
  const MAIL_SIZE = { width: 80, height: 60 };
  const DESK_WIDTH = 1920;
  const DESK_HEIGHT = 1080;
  const OBSTACLES = [
    { id: "news-board", left: 1360, top: 300, width: 436, height: 736 },
    { id: "wall-left", left: -100, top: 0, width: 100, height: DESK_HEIGHT },
    { id: "wall-right", left: DESK_WIDTH, top: 0, width: 100, height: DESK_HEIGHT }, // ❌ Chỗ cũ bị lỗi
    { id: "wall-right", left: DESK_WIDTH, top: 0, width: 100, height: DESK_HEIGHT }, // 🌟 Sửa lại thành thế này
    { id: "wall-top", left: 0, top: -100, width: DESK_WIDTH, height: 100 },
    { id: "wall-bottom", left: 0, top: DESK_HEIGHT, width: DESK_WIDTH, height: 100 },
  ];

  let currentBtnSrc = ReorganizeNormal;
  if (btnState === "hover") currentBtnSrc = ReorganizeHovered;
  if (btnState === "click") currentBtnSrc = ReorganizeClicked;

  // KHỞI TẠO STATE TẬP TRUNG CHO NGƯỜI CHƠI
  const [playerState, setPlayerState] = useState({
    Resource: 50,      // Mặc định ban đầu có 150 Resource -> Sẽ tự sinh ra 1 Worker ban đầu
    Coal: 50,
    coal_value: 1.0,
    Economy: 9900,
    Happiness: 0,

    eventHistory: null,
    currentEventID: null,
    currentPhaseID: "PHASE_1",

    b_upgrade_1: 0,
    b_upgrade_2: 0,
    b_upgrade_3: 0,
    b_upgrade_4: 0,

    railway: 1,
    auto: 1,
    tools: 1,
    storage: 1
  });

  // HOOKS
  const {
    paperPos,
    livePaperDelta,
    mailPositions,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
    handleReorganizeDesk
  } = useDragAndDrop(
    INITIAL_PAPER_POS,
    OBSTACLES,
    PAPER_SIZE,
    MAIL_SIZE,
    isTransitioning,
    OpenMailSound,
    TabSwitchSound,
    activeEvents.mails // Dùng activeEvents.mails thay cho activeMailsList cũ
  );

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
    UPGRADE_DATA
  );

  // GAME LOOP
  useEffect(() => {
    if (isEventActive) return;

    const interval = setInterval(() => {
      const result = getNextEvent(playerState.currentPhaseID, playerState);

      if (!result || result.type === "NONE") return;

      if (result.type === "ENDING") {
        // Xử lý khi đạt Ending
        console.log("Game Reached Ending:", result.data);
        // Có thể set trạng thái game sang màn hình kết thúc
        onGameEnd(result.data);
      }
      else if (result.type === "EVENT") {
        const nextEvent = result.event;

        // Cập nhật State: lưu lại Index để không lặp lại sự kiện cũ
        setPlayerState(prev => ({
          ...prev,
          currentEventID: nextEvent.EventID,
          currentEventIdx: result.index + 1 // Tăng index lên để lần tới lấy sự kiện tiếp theo
        }));

        // Kích hoạt giao diện
        setActiveEvents({
          mails: nextEvent.MailsList || [],
          calls: nextEvent.Telephone ? [nextEvent.Telephone] : []
        });
      }
      else if (result.type === "SKIP") {
        // Nếu sự kiện bị skip (do thiếu flag), tự động tăng index để kiểm tra sự kiện tiếp theo ngay lập tức
        setPlayerState(prev => ({ ...prev, currentEventIdx: result.index + 1 }));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isEventActive, playerState.currentEventID, playerState.currentPhaseID]);

  // 🌟 EFFECT THEO DÕI STATE RESOURCE ĐỂ TĂNG/GIẢM WORKER (NỚI RỘNG PHẠM VI XA MỎ)
  useEffect(() => {
    const targetWorkerCount = Math.floor(playerState.Resource / 1000);

    setMiners((currentMiners) => {
      const diff = targetWorkerCount - currentMiners.length;

      if (diff === 0) return currentMiners;

      // Trường hợp 1: Thêm Worker mới
      if (diff > 0) {
        const directions = ['left', 'right', 'up', 'down'];

        const newWorkers = Array.from({ length: diff }).map((_, index) => {
          const randomDirection = directions[Math.floor(Math.random() * directions.length)];

          // Giữ nguyên X nằm trong bề ngang mỏ đá (512px)
          const spawnX = Math.floor(Math.random() * (472 - 40) + 40);

          let spawnY = 0;

          // Tỷ lệ 50/50 đứng vùng trên hoặc vùng dưới
          if (Math.random() > 0.5) {
            /* VÙNG TRÊN CAO hẳn: Từ Y = 100px đến 390px 
              (Mỏ đá bắt đầu từ 414px nên mốc 390px vẫn đảm bảo không đè lên mỏ)
            */
            spawnY = Math.floor(Math.random() * (390 - 100) + 100);
          } else {
            /* VÙNG DƯỚI THẤP hẳn: Từ Y = 590px đến 850px 
              (Mỏ đá kết thúc ở 574px nên mốc 590px đổ xuống thoải mái đất diễn)
            */
            spawnY = Math.floor(Math.random() * (850 - 590) + 590);
          }

          return {
            id: `${Date.now()}-${index}-${Math.random()}`,
            direction: randomDirection,
            x: spawnX,
            y: spawnY,
          };
        });

        return [...currentMiners, ...newWorkers];
      }

      // Trường hợp 2: Giảm Worker
      if (diff < 0) {
        return currentMiners.slice(0, targetWorkerCount);
      }

      return currentMiners;
    });
  }, [playerState.Resource]);

  return (
    <div className={`game-screen ${isTransitioning ? "desk-frozen" : ""}`}>
      <DndContext onDragStart={handleDragStart} onDragMove={handleDragMove} onDragEnd={handleDragEnd}>
        <div className="desk-area">
          <img src={Frame} alt="Desk Frame" className="desk-frame" />
          <StatTab stats={{ Resource: playerState.Resource, Coal: playerState.Coal, Economy: playerState.Economy }} />

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

          <News
            title={activeNews?.title}
            content={activeNews?.content}
          />

          <CoalQuotaDisplay
            currentCoal={playerState.Coal}
            quota={quota}
          />

          <button
            className={`reorganize-image-btn ${isTransitioning ? "btn-disabled" : ""}`}
            onClick={handleReorganizeDesk}
            onMouseEnter={() => !isTransitioning && setBtnState("hover")}
            onMouseLeave={() => setBtnState("normal")}
            onMouseDown={() => !isTransitioning && setBtnState("click")}
            onMouseUp={() => !isTransitioning && setBtnState("hover")}
            disabled={isTransitioning}
          >
            <img src={currentBtnSrc} alt="Reorganize Desk" className="pixel-button-art" />
          </button>
        </div>
      </DndContext>
    </div>
  );
}