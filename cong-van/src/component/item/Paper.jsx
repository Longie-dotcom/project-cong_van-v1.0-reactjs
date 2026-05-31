import { useState, useEffect, useRef } from 'react';
import { useDraggable } from '@dnd-kit/core';

import usePixelParticles from '../../hooks/usePixelParticles';

import PaperImage from './../../assets/image/paper/paper.png';
import PaperTabI1Image from './../../assets/image/paper/paper-tab-i1.png';
import PaperTabI2Image from './../../assets/image/paper/paper-tab-i2.png';
import PaperTabII1Image from './../../assets/image/paper/paper-tab-ii1.png';
import PaperTabII2Image from './../../assets/image/paper/paper-tab-ii2.png';
import PaperTabIII1Image from './../../assets/image/paper/paper-tab-iii1.png';
import PaperTabIII2Image from './../../assets/image/paper/paper-tab-iii2.png';
import PaperTabIV1Image from './../../assets/image/paper/paper-tab-iv1.png';
import PaperTabIV2Image from './../../assets/image/paper/paper-tab-iv2.png';

import TabSwitchSound from './../../assets/sound/tab-switch.mp3';
import ConfirmationSound1 from './../../assets/sound/confirmation_001.ogg';
import ConfirmationSound2 from './../../assets/sound/confirmation_002.ogg';
import ConfirmationSound3 from './../../assets/sound/confirmation_003.ogg';
import ConfirmationSound4 from './../../assets/sound/confirmation_004.ogg';
import ErrorSound from './../../assets/sound/error_006.ogg';

import EconomyParticle from './../../assets/image/icon/economy-particle.png';
import UPGRADE_META from '../../data/assets/paper';
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
  const [hoveredTab, setHoveredTab] = useState(null);
  const [animatingId, setAnimatingId] = useState(null);
  const [sellCoalAmount, setSellCoalAmount] = useState("");
  const [errorPopups, setErrorPopups] = useState([]);

  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const switchAudioRef = useRef(null);
  const holdTimerRef = useRef(null);
  const lastSoundPlayedRef = useRef(0);
  const playerStateRef = useRef(playerState);
  const mousePosRef = useRef({ x: 0, y: 0 });

  const confirmationSounds = [ConfirmationSound1, ConfirmationSound2, ConfirmationSound3, ConfirmationSound4];
  const { spawnParticles } = usePixelParticles(canvasRef, EconomyParticle);
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: 'paper-1' });

  const style = {
    left: `${currentX}px`,
    top: `${currentY}px`,
    transform: isDragging ? `translate3d(${liveDelta.x}px, ${liveDelta.y}px, 0)` : undefined
  };

  const tabKeys = ['A', 'B', 'C', 'D'];
  const tabAssets = {
    A: { normal: PaperTabI1Image, hover: PaperTabI2Image },
    B: { normal: PaperTabII1Image, hover: PaperTabII2Image },
    C: { normal: PaperTabIII1Image, hover: PaperTabIII2Image },
    D: { normal: PaperTabIV1Image, hover: PaperTabIV2Image }
  };

  const paperTitles = {
    A: "Kế Hoạch Mở Rộng Nhân Lực",
    B: "Cải Tiến Giá Trị Của Than",
    C: "Hệ Thống Thu Thập Tự Động",
    D: "Quyết Định Của Quản Đốc"
  };

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
    // Tìm sự kiện e trong danh sách tham số (nó sẽ là phần tử cuối cùng hoặc phần tử thứ 3 nếu bạn không truyền isMax)
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

  function handleTabClick(docId) {
    if (activeTab !== docId) {
      if (!switchAudioRef.current) {
        switchAudioRef.current = new Audio(TabSwitchSound);
        switchAudioRef.current.volume = 0.5;
      }
      switchAudioRef.current.currentTime = 0;
      switchAudioRef.current.play().catch(() => { });
      setActiveTab(docId);
    }
  }

  const triggerUpgradeJuice = (itemId, currentCost, e) => { // Bỏ tham số isMax cũ
    const currentState = playerStateRef.current;
    const currentLevel = currentState[itemId] || 0;
    const metaItem = UPGRADE_META[activeTab]?.find(i => i.id === itemId);

    // 1. Logic kiểm tra Max (cập nhật mới nhất)
    let isCurrentlyMax = false;
    if (activeTab === 'B' && currentLevel >= 1) isCurrentlyMax = true;
    if (activeTab === 'C') {
      const metaItem = UPGRADE_META['C'].find(i => i.id === itemId);
      if (currentLevel >= (metaItem?.maxLevel || 4)) isCurrentlyMax = true;
    }

    // 2. Kiểm tra tài nguyên (cập nhật mới nhất)
    const isAffordable = activeTab === 'D'
      ? (itemId === "sell_market" ? (parseInt(sellCoalAmount) || 0) > 0 && (parseInt(sellCoalAmount) || 0) <= currentState.Coal : true)
      : currentState.Economy >= currentCost;

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
      // Không cần truyền e ở đây nữa, dùng luôn ref đã tính toán
      showErrorPopup(mousePosRef.current.x, mousePosRef.current.y, errorMessage);
      return;
    }

    // 3. Thực hiện nâng cấp
    const isSuccess = onUpgradeClick ? onUpgradeClick(activeTab, itemId, currentLevel + 1, currentCost) : false;

    if (!isSuccess) {
      stopHolding();
      return;
    }

    // 3. Xử lý hiệu ứng (âm thanh + hạt)
    const now = Date.now();
    if (now - lastSoundPlayedRef.current > 300) {
      const randomIndex = Math.floor(Math.random() * confirmationSounds.length);
      new Audio(confirmationSounds[randomIndex]).play().catch(() => { });
      lastSoundPlayedRef.current = now;
    }

    setAnimatingId(itemId);

    if (containerRef.current) {
      const rowElement = containerRef.current.querySelector(`[data-item-id="${itemId}"]`);
      if (rowElement) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const iconFrame = rowElement.querySelector('.upgrade-icon-frame');
        const iconRect = iconFrame.getBoundingClientRect();
        const targetX = iconRect.left - containerRect.left + iconRect.width / 2;
        const targetY = iconRect.top - containerRect.top + iconRect.height / 2;
        const upgradeIconImg = iconFrame.querySelector('.upgrade-pixel-icon');
        const customIconSrc = upgradeIconImg ? upgradeIconImg.getAttribute('src') : null;

        spawnParticles(targetX, targetY, { count: 8, size: 32, imgSrc: customIconSrc });
      }
    }

    setTimeout(() => setAnimatingId(null), 400);
  };

  const showErrorPopup = (x, y, text) => {
    const errorAudio = new Audio(ErrorSound);
    errorAudio.volume = 0.4;
    errorAudio.play().catch(() => { });
    const popupId = Date.now() + Math.random();
    setErrorPopups((prev) => [...prev, { id: popupId, x, y, text }]);
    setTimeout(() => setErrorPopups((prev) => prev.filter(p => p.id !== popupId)), 800);
  };

  const renderUpgradeRows = () => {
    const currentTabMeta = UPGRADE_META[activeTab] || [];

    if (activeTab === 'D') {
      return (
        <>
          <div className="market-price-indicator">Tỷ giá: 1 Than = {playerState.coal_value || 0} Tiền</div>
          {currentTabMeta.map((metaItem) => {
            const isTargetAnim = animatingId === metaItem.id;
            const isSell = metaItem.id === "sell_market";
            return (
              <div key={metaItem.id} className={`upgrade-item-row upgrade-purchasable ${isTargetAnim ? 'juice-shake-row' : ''}`} data-item-id={metaItem.id}
                onMouseDown={(e) => startHolding(metaItem.id, isSell ? (parseInt(sellCoalAmount) || 0) : 0, e)}
                onMouseUp={stopHolding} onMouseLeave={stopHolding}>
                <div className={`upgrade-icon-frame ${isTargetAnim ? 'juice-pop-icon' : ''}`}>
                  <img src={metaItem.asset} alt={metaItem.name} className="upgrade-pixel-icon" />
                </div>
                <div className="upgrade-info-text">
                  <div className="upgrade-name-row"><span className="upgrade-title-name">{metaItem.name}</span></div>
                  <div className="upgrade-desc-text">{metaItem.description}</div>
                  {isSell && (
                    <div className="sell-input-container" onClick={(e) => e.stopPropagation()}>
                      <label className="sell-input-label">Số lượng:</label>
                      <input type="number" className="sell-coal-input" min="1" max={playerState.Coal} value={sellCoalAmount} onChange={(e) => setSellCoalAmount(e.target.value)} />
                      <button className="sell-max-btn" onClick={(e) => { e.preventDefault(); setSellCoalAmount(playerState.Coal); }}>Max</button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </>
      );
    }

    if (activeTab === 'A') {
      return currentTabMeta.map((metaItem) => {
        const currentCost = metaItem.baseCost;
        const isTargetAnim = animatingId === metaItem.id;
        const isMaxLevel = false; // Tab A là nâng cấp liên tục
        return (
          <div key={metaItem.id} className={`upgrade-item-row upgrade-purchasable ${isTargetAnim ? 'juice-shake-row' : ''}`} data-item-id={metaItem.id}
            onMouseDown={(e) => startHolding(metaItem.id, currentCost, isMaxLevel, e)}
            onMouseUp={stopHolding} onMouseLeave={stopHolding}>
            <div className={`upgrade-icon-frame ${isTargetAnim ? 'juice-pop-icon' : ''}`}>
              <img src={metaItem.asset} alt={metaItem.name} className="upgrade-pixel-icon" />
            </div>
            <div className="upgrade-info-text">
              <div className="upgrade-name-row"><span className="upgrade-title-name">{metaItem.name}</span><span className="upgrade-level-tag instant-buy">Đầu Tư</span></div>
              <div className="upgrade-data-row">
                <span className="upgrade-metric-data">Chỉ số: <span className="metric-value">+{metaItem.value}</span> {metaItem.metric}</span>
                <span className="upgrade-cost-data">Giá: <span className="cost-value">{currentCost}</span> Tiền</span>
              </div>
            </div>
          </div>
        );
      });
    }

    if (activeTab === 'B') {
      return currentTabMeta.map((metaItem) => {
        const currentLevel = playerState[metaItem.id] || 0;
        const isMaxLevel = currentLevel >= 1;
        const isTargetAnim = animatingId === metaItem.id;
        return (
          <div key={metaItem.id} className={`upgrade-item-row ${isMaxLevel ? 'upgrade-disabled' : 'upgrade-purchasable'} ${isTargetAnim ? 'juice-shake-row' : ''}`} data-item-id={metaItem.id}
            onMouseDown={(e) => startHolding(metaItem.id, metaItem.baseCost, isMaxLevel, e)}
            onMouseUp={stopHolding} onMouseLeave={stopHolding}>
            <div className={`upgrade-icon-frame ${isTargetAnim ? 'juice-pop-icon' : ''}`}>
              <img src={metaItem.asset} alt={metaItem.name} className="upgrade-pixel-icon" />
            </div>
            <div className="upgrade-info-text">
              <div className="upgrade-name-row"><span className="upgrade-title-name">{metaItem.name}</span>{isMaxLevel && <span className="upgrade-level-tag">ĐÃ TỐI ĐA</span>}</div>
              <div className="upgrade-data-row">
                <span className="upgrade-metric-data">Chỉ số: <span className="metric-value">+{metaItem.value}</span> {metaItem.metric}</span>
                {!isMaxLevel ? <span className="upgrade-cost-data">Giá: {metaItem.baseCost} Tiền</span> : <span className="upgrade-cost-data max-reached">Đã sở hữu</span>}
              </div>
            </div>
            {isMaxLevel && <div className="max-level-overlay">ĐÃ MUA</div>}
          </div>
        );
      });
    }

    // Default for Tab C
    return currentTabMeta.map((metaItem) => {
      const currentLevel = playerState[metaItem.id] || 1;
      const currentImgAsset = metaItem.assets[currentLevel - 1] || metaItem.assets[0];
      const calculatedValue = metaItem.value * currentLevel;
      const isMaxLevel = currentLevel >= metaItem.maxLevel;
      const currentCost = metaItem.baseCost * (currentLevel + 1);
      const isTargetAnim = animatingId === metaItem.id;
      return (
        <div key={metaItem.id} className={`upgrade-item-row ${isMaxLevel ? 'upgrade-disabled' : ''} ${isTargetAnim ? 'juice-shake-row' : ''}`} data-item-id={metaItem.id}
          onMouseDown={(e) => startHolding(metaItem.id, currentCost, isMaxLevel, e)}
          onMouseUp={stopHolding} onMouseLeave={stopHolding}>
          <div className={`upgrade-icon-frame ${isTargetAnim ? 'juice-pop-icon' : ''}`}>
            <img src={currentImgAsset} alt={metaItem.name} className="upgrade-pixel-icon" />
          </div>
          <div className="upgrade-info-text">
            <div className="upgrade-name-row"><span className="upgrade-title-name">{metaItem.name}</span><span className="upgrade-level-tag">Lv.{currentLevel}</span></div>
            <div className="upgrade-data-row">
              <span className="upgrade-metric-data">Chỉ số: <span className="metric-value">{calculatedValue}</span> {metaItem.metric}</span>
              {!isMaxLevel ? <span className="upgrade-cost-data">Giá: <span className="cost-value">{currentCost}</span> Tiền</span> : <span className="upgrade-cost-data max-reached">Đã đạt tối đa</span>}
            </div>
          </div>
          {isMaxLevel && <div className="max-level-overlay">ĐÃ TỐI ĐA</div>}
        </div>
      );
    });
  };

  return (
    <div ref={setNodeRef} style={style} className="paper">
      <div className="paper-tabs">
        {tabKeys.map((tabKey, index) => {
          const isHovered = hoveredTab === tabKey;
          const isActive = activeTab === tabKey;
          const asset = tabAssets[tabKey];
          return (
            <img key={tabKey} src={isHovered || isActive ? asset?.hover : asset?.normal} alt={`Tab ${tabKey}`}
              className={`paper-tab ${isHovered || isActive ? 'tab-hovered' : ''}`}
              style={{ top: `${index * 80}px` }}
              onMouseEnter={() => setHoveredTab(tabKey)} onMouseLeave={() => setHoveredTab(null)}
              onClick={() => handleTabClick(tabKey)} />
          );
        })}
      </div>
      <img src={PaperImage} alt="Paper Asset Background" className="paper-image" {...listeners} {...attributes} />
      <div ref={containerRef} className="paper-text-layer">
        <canvas ref={canvasRef} className="paper-juice-canvas" />
        <div className="paper-title">{paperTitles[activeTab]}</div>
        <div className="paper-upgrades-container">{renderUpgradeRows()}</div>
        {errorPopups.map((popup) => (
          <div key={popup.id} className="paper-error-floating-popup" style={{ left: `${popup.x}px`, top: `${popup.y}px` }}>{popup.text}</div>
        ))}
      </div>
    </div>
  );
}