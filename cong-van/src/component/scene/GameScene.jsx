import { useState, useEffect } from "react"; // 🌟 Import thêm useEffect
import { DndContext } from "@dnd-kit/core";
import { getNextEvent } from "../../hooks/gameState";
import { PHASES } from "../../data/phases/phases";

import Frame from "./../../assets/image/frame.png";
import Paper from "../item/Paper";
import Mail from "../item/Mail";
import Mine from "../item/Mine";

import ReorganizeNormal from "./../../assets/image/button/reorganize1.png";
import ReorganizeHovered from "./../../assets/image/button/reorganize2.png";
import ReorganizeClicked from "./../../assets/image/button/reorganize3.png";

import TabSwitchSound from "./../../assets/sound/tab-switch.mp3";
import OpenMailSound from "./../../assets/sound/open-mail.mp3";

import "./GameScene.css";
import News from "../item/News";
import Telephone from "../item/Telephone";
import StatTab from "../item/StatTab";

import INITIAL_UPGRADE_META from "../../data/upgrading";
import CoalQuotaDisplay from "../item/CoalQuotaDisplay";

export default function GameScene({ onGameEnd }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeEvents, setActiveEvents] = useState({
    mails: [],
    calls: []
  });
  const [activeNews, setActiveNews] = useState(null);
  const [isEventPaused, setIsEventPaused] = useState(false);

  const playPaperRustle = () => {
    const audio = new Audio(OpenMailSound);
    audio.volume = 0.55;
    audio.play().catch(() => { });
  };

  const playDeskSlide = () => {
    const audio = new Audio(TabSwitchSound);
    audio.volume = 0.45;
    audio.play().catch(() => { });
  };

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

  // 🌟 STATE QUẢN LÝ DANH SÁCH THỢ MỎ HIỂN THỊ TRÊN KHUNG BOARD
  const [miners, setMiners] = useState([]);

  const isEventActive = activeEvents.mails.length > 0 || activeEvents.calls.length > 0;
  const currentPhaseData = PHASES[playerState.currentPhaseID] || {};
  const quota = currentPhaseData.Coal_Quota || 0;

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

  const INITIAL_PAPER_POS = { x: 500, y: 100 };
  const [paperPos, setPaperPos] = useState(INITIAL_PAPER_POS);
  const [livePaperDelta, setLivePaperDelta] = useState({ x: 0, y: 0 });

  const [activeMailsList, setActiveMailsList] = useState([]);
  const [mailPositions, setMailPositions] = useState({});
  const [liveMailDelta, setLiveMailDelta] = useState({ x: 0, y: 0 });
  const [activeMailDragID, setActiveMailDragID] = useState(null);

  const [activeTab, setActiveTab] = useState("A");
  const [btnState, setBtnState] = useState("normal");

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

  const handleEventChoice = (choice) => {
    if (choice.effect) {
      setPlayerState(prev => {
        const newState = { ...prev };
        Object.keys(choice.effect).forEach(stat => {
          if (newState.hasOwnProperty(stat)) newState[stat] += choice.effect[stat];
        });
        return newState;
      });
    }

    if (choice.triggeredNews) {
      setActiveNews(choice.triggeredNews);
    }

    // Khi set về rỗng, useEffect ở trên sẽ phát hiện activeEvents thay đổi 
    // và tự động khởi động lại interval mới
    setActiveEvents({ mails: [], calls: [] });
  };

  const handleUpgradeClick = (tabKey, upgradeId, targetValue, costOrAmount) => {
    if (isTransitioning) return false;

    // 1. KIỂM TRA ĐIỀU KIỆN BAN ĐẦU (Chỉ áp dụng cho các Tab tiêu thụ tiền vàng Economy)
    if (tabKey !== 'D' && playerState.Economy < costOrAmount) {
      return false;
    }

    let isOperationSuccess = false;

    setPlayerState((prev) => {
      // Tìm meta-data của nâng cấp hiện tại để lấy chỉ số cộng thêm (value)
      const metaItem = INITIAL_UPGRADE_META[tabKey]?.find(item => item.id === upgradeId);
      if (!metaItem) return prev;

      const upgradeValue = metaItem.value;

      // ==========================================
      // LOGIC TAB A: KẾ HOẠCH MỞ RỘNG NHÂN SỰ
      // ==========================================
      if (tabKey === 'A') {
        isOperationSuccess = true;
        return {
          ...prev,
          Economy: prev.Economy - costOrAmount,
          Resource: prev.Resource + upgradeValue // Khi Resource tăng, useEffect tự sinh thêm Worker
        };
      }

      // ==========================================
      // LOGIC TAB B: CẢI TIẾN GIÁ TRỊ THÀNH PHẨM (Nâng cấp 1 lần)
      // ==========================================
      if (tabKey === 'B') {
        // Kiểm tra nếu đã đạt level tối đa (1) thì chặn
        if (prev[upgradeId] >= 1) return prev;

        isOperationSuccess = true;
        return {
          ...prev,
          Economy: prev.Economy - costOrAmount,
          coal_value: prev.coal_value + upgradeValue, // Cộng giá trị than
          [upgradeId]: 1 // Cập nhật trạng thái upgrade thành 1 (tối đa)
        };
      }

      // ==========================================
      // LOGIC TAB C: HỆ THỐNG THU THẬP TỰ ĐỘNG (Nâng cấp Level)
      // ==========================================
      if (tabKey === 'C') {
        const maxLevel = metaItem.maxLevel || 4;
        if (prev[upgradeId] >= maxLevel) return prev; // Chặn nếu đã đạt cấp tối đa

        isOperationSuccess = true;
        return {
          ...prev,
          Economy: prev.Economy - costOrAmount,
          [upgradeId]: targetValue // Cập nhật level mới cho thiết bị tự động (railway, auto...)
        };
      }

      // ==========================================
      // LOGIC TAB D: QUYẾT ĐỊNH CỦA QUẢN ĐỐC (Sử dụng Than)
      // ==========================================
      if (tabKey === 'D') {
        if (prev.Coal <= 0) return prev; // Không có than trong kho thì không thể thực hiện

        // --- Hành động 1: Tuồn Than lén lút ra chợ đen lấy Vốn ---
        if (upgradeId === "sell_market") {
          const amountToSell = parseInt(costOrAmount) || 0;

          // Chặn các trường hợp nhập bậy: Số âm, bằng 0, hoặc vượt quá lượng than hiện có
          if (amountToSell <= 0 || amountToSell > prev.Coal) {
            return prev;
          }

          // Tính số tiền kiếm được = Lượng than * Giá trị mỗi viên hiện tại
          const goldEarned = Math.floor(amountToSell * prev.coal_value);
          isOperationSuccess = true;

          return {
            ...prev,
            Coal: prev.Coal - amountToSell,     // Trừ đúng lượng than đã bán từ Input
            Economy: prev.Economy + goldEarned  // Cộng tiền vàng thặng dư vào ngân sách
          };
        }

        // --- Hành động 2: Nộp Than hoàn thành Chỉ Tiêu cấp trên đổi Nhân Sự ---
        if (upgradeId === "submit_cartel") {
          const quota = currentPhaseData.Coal_Quota;

          // 1. Kiểm tra điều kiện: Có đủ than để nộp chỉ tiêu không?
          if (playerState.Coal >= quota) {

            // 2. Thực hiện cập nhật State
            setPlayerState(prev => ({
              ...prev,
              Coal: prev.Coal - quota, // 🌟 Trừ đúng lượng than chỉ tiêu, phần dư được giữ lại
              currentPhaseID: currentPhaseData.Next_Phase // 🌟 Chuyển sang Phase mới
            }));
            isOperationSuccess = true;
          } else {
            // Không đủ than
            isOperationSuccess = false;
            console.warn("Không đủ than để hoàn thành chỉ tiêu!");
          }
        }
      }

      return prev;
    });

    // Trả về kết quả (true/false) để kích hoạt hiệu ứng nổ hạt lấp lánh hoặc popup báo lỗi đỏ
    return isOperationSuccess;
  };

  const handleMineClick = () => {
    if (isTransitioning || isEventActive) return;

    setPlayerState((prev) => {
      let addedCoal = 0;

      // Nếu Resource <= 0, không cho phép khai thác thêm than
      if (prev.Resource <= 0) {
        addedCoal = 2
      } else {
        addedCoal = 1 * prev.Resource;
      }

      return {
        ...prev,
        Coal: prev.Coal + addedCoal
      };
    });
  };

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
      rect1.left + rect1.width > rect2.left &&
      rect1.top + rect1.height > rect2.top
    );
  }

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

  let currentBtnSrc = ReorganizeNormal;
  if (btnState === "hover") currentBtnSrc = ReorganizeHovered;
  if (btnState === "click") currentBtnSrc = ReorganizeClicked;

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