import { useState, useEffect, useRef } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { PAPER_CONFIG } from '../../../data/assets/paper';
import { STATS } from '../../../data/assets/stats';
import PixelParticles from '../../common/PixelParticles';
import UpgradeList from './UpgradeList';
import TabMenu from './TabMenu';
import './Paper.css';

export default function Paper({
  currentX = 200,
  currentY = 120,
  liveDelta = { x: 0, y: 0 },
  activeTab = 'A',
  setActiveTab,
  playerState = {},
  onUpgradeClick,
  isEventActive,
}) {
  const [animatingId, setAnimatingId] = useState(null);
  const [sellCoalAmount, setSellCoalAmount] = useState("");
  const [errorPopups, setErrorPopups] = useState([]);

  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const holdTimerRef = useRef(null);
  const lastSoundPlayedRef = useRef(0);
  const playerStateRef = useRef(playerState);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const iconPositionsRef = useRef({});

  const confirmationSounds = PAPER_CONFIG.SOUNDS.confirmation;
  const { spawnParticles } = PixelParticles(canvasRef);
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: 'paper-1' });

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

  const startHolding = (itemId, currentCost, ...args) => {
    const e = args.find(arg => arg && arg.clientX !== undefined);

    if (e && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      mousePosRef.current = {
        x: e.clientX - containerRect.left,
        y: e.clientY - containerRect.top
      };
    }

    triggerUpgradeJuice(itemId, currentCost, e);

    holdTimerRef.current = setInterval(() => {
      triggerUpgradeJuice(itemId, currentCost, null);
    }, 200);
  };

  const stopHolding = () => {
    if (holdTimerRef.current) {
      clearInterval(holdTimerRef.current);
      holdTimerRef.current = null;
    }
  };

  const triggerUpgradeJuice = (itemId, currentCost, e) => { // Bỏ tham số isMax cũ
    const currentState = playerStateRef.current;
    const currentEconomy = currentState[STATS.ECONOMY] || 0;
    const currentLevel = currentState[itemId] || 0;
    const metaItem = PAPER_CONFIG.UPGRADES[activeTab]?.find(i => i.id === itemId);

    // Logic kiểm tra Max
    let isCurrentlyMax = false;
    if (activeTab === 'B' && currentLevel >= 1) isCurrentlyMax = true;
    if (activeTab === 'C' && metaItem) {
      if (currentLevel >= (metaItem.maxLevel || 4)) isCurrentlyMax = true;
    }

    // Kiểm tra tài nguyên
    const isAffordable = activeTab === 'D'
      ? (itemId === "sell_market" ? (parseInt(sellCoalAmount) || 0) > 0 && (parseInt(sellCoalAmount) || 0) <= currentState[STATS.COAL] : true)
      : currentEconomy >= currentCost;
    
      // Thông báo lỗi
    let errorMessage = "Không đủ tài nguyên!"; // Mặc định
    switch (activeTab) {
      case 'A':
        errorMessage = "Không đủ tiền để mua!";
        break;
      case 'B':
        errorMessage = "Không đủ tiền để nâng cấp!";
        break;
      case 'C':
        errorMessage = "Không thể cải tiến thêm!";
        break;
      case 'D':
        errorMessage = "Không đủ than để bán!";
        break;
      default:
        errorMessage = "Không đủ tài nguyên!";
    }

    if (isEventActive) errorMessage = "Đang có sự kiện diễn ra";

    if (isCurrentlyMax || !isAffordable || isEventActive) {
      stopHolding();
      showErrorPopup(mousePosRef.current.x, mousePosRef.current.y, errorMessage);
      return;
    }

    // Thực hiện nâng cấp
    const isSuccess = onUpgradeClick ? onUpgradeClick(activeTab, itemId, currentLevel + 1, currentCost) : false;

    if (!isSuccess) {
      stopHolding();
      return;
    }

    // Xử lý hiệu ứng (âm thanh + hạt)
    const now = Date.now();
    if (now - lastSoundPlayedRef.current > 300) {
      const randomIndex = Math.floor(Math.random() * confirmationSounds.length);
      new Audio(confirmationSounds[randomIndex]).play().catch(() => { });
      lastSoundPlayedRef.current = now;
    }

    setAnimatingId(itemId);

    if (containerRef.current) {
      const rowElement = containerRef.current.querySelector(`[data-item-id="${itemId}"]`);
      const iconFrame = rowElement?.querySelector('.upgrade-icon-frame');

      if (iconFrame) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const iconRect = iconFrame.getBoundingClientRect();
        const targetX = iconRect.left - containerRect.left + iconRect.width / 2;
        const targetY = iconRect.top - containerRect.top + iconRect.height / 2;
        const asset = activeTab === 'C' ? metaItem.assets[currentLevel] || metaItem.assets[0] : metaItem.asset;

        spawnParticles(targetX, targetY, { count: 8, size: 32, imgSrc: asset });
      }
    }

    setTimeout(() => setAnimatingId(null), 400);
  };

  const showErrorPopup = (x, y, text) => {
    const errorAudio = new Audio(PAPER_CONFIG.SOUNDS.error);
    errorAudio.volume = 0.4;
    errorAudio.play().catch(() => { });
    const popupId = Date.now() + Math.random();
    setErrorPopups((prev) => [...prev, { id: popupId, x, y, text }]);
    setTimeout(() => setErrorPopups((prev) => prev.filter(p => p.id !== popupId)), 800);
  };

  return (
    <div ref={setNodeRef} style={{ left: `${currentX}px`, top: `${currentY}px`, transform: isDragging ? `translate3d(${liveDelta.x}px, ${liveDelta.y}px, 0)` : undefined }} className="paper">
      <TabMenu
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <img src={PAPER_CONFIG.UI.background} alt="Paper Asset Background" className="paper-image" {...listeners} {...attributes} />
      <div ref={containerRef} className="paper-text-layer">
        <canvas ref={canvasRef} className="paper-juice-canvas" />
        <div className="paper-title">{PAPER_CONFIG.UI.tabs[activeTab].title}</div>

        <UpgradeList
          containerRef={containerRef}
          iconPositions={iconPositionsRef}
          activeTab={activeTab}
          animatingId={animatingId}
          onStartHolding={startHolding}
          onStopHolding={stopHolding}
          playerState={playerState}
          sellCoalAmount={sellCoalAmount}
          setSellCoalAmount={setSellCoalAmount}
        />

        {errorPopups.map((popup) => (
          <div key={popup.id} className="paper-error-floating-popup" style={{ left: `${popup.x}px`, top: `${popup.y}px` }}>{popup.text}</div>
        ))}
      </div>
    </div>
  );
}