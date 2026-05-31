import { PAPER_CONFIG } from "../../../data/assets/paper";
import { STATS } from "../../../data/assets/stats";
import { GAME_BALANCE } from "../../../data/config";
import { UpgradeRow } from "./UpgradeRow"; // Import component con
import './UpgradeList.css';

export default function UpgradeList({
  containerRef, iconPositions, activeTab, playerState, onStartHolding, onStopHolding,
  animatingId, sellCoalAmount, setSellCoalAmount
}) {
  const currentTabMeta = PAPER_CONFIG.UPGRADES[activeTab] || [];

  return (
    <div className="paper-upgrades-container">
      {activeTab === 'D' && (
        <div className="market-price-indicator">Tỷ giá: 1 Than = {playerState.coal_value || 0} Tiền</div>
      )}

      {currentTabMeta.map((metaItem) => {
        const isTargetAnim = animatingId === metaItem.id;

        // Cấu hình linh hoạt cho từng Tab
        const getConfig = () => {
          if (activeTab === 'D') {
            const isSell = metaItem.id === "sell_market";
            return {
              icon: metaItem.asset,
              name: metaItem.name,
              metric: <div className="upgrade-desc-text">{metaItem.description}</div>,
              children: isSell && (
                <div className="sell-input-container" onClick={(e) => e.stopPropagation()}>
                  <label className="sell-input-label">Số lượng:</label>
                  <input type="number" className="sell-coal-input" value={sellCoalAmount} onChange={(e) => setSellCoalAmount(e.target.value)} />
                  <button
                    className="sell-max-btn" onClick={(e) => {
                      e.stopPropagation(); 
                      setSellCoalAmount(playerState[STATS.COAL]);
                    }}
                  >
                    Max
                  </button>
                </div>
              ),
              onMouseDown: (e) => onStartHolding(metaItem.id, isSell ? (parseInt(sellCoalAmount) || 0) : 0, e)
            };
          }

          if (activeTab === 'A') {
            const currentPrice = Math.trunc(metaItem.baseCost * Math.pow(GAME_BALANCE.PRICING.VILLAGE_MULTIPLIER, playerState[metaItem.id] || 0));
            return {
              icon: metaItem.asset,
              name: metaItem.name,
              levelTag: "Đầu Tư",
              metric: <span className="upgrade-metric-data">Chỉ số: <span className="metric-value">+{metaItem.value}</span> {metaItem.metric}</span>,
              cost: <span className="upgrade-cost-data">Giá: <span className="cost-value">{currentPrice}</span> Tiền</span>,
              onMouseDown: (e) => onStartHolding(metaItem.id, metaItem.baseCost, false, e)
            };
          }

          if (activeTab === 'B') {
            const isMax = (playerState[metaItem.id] || 0) >= 1;
            return {
              icon: metaItem.asset,
              name: metaItem.name,
              isMaxLevel: isMax,
              isDisabled: isMax,
              levelTag: isMax && "ĐÃ TỐI ĐA",
              metric: <span className="upgrade-metric-data">Chỉ số: <span className="metric-value">+{metaItem.value}</span> {metaItem.metric}</span>,
              cost: !isMax ? <span className="upgrade-cost-data">Giá: {metaItem.baseCost} Tiền</span> : <span className="upgrade-cost-data max-reached">Đã sở hữu</span>,
              onMouseDown: (e) => onStartHolding(metaItem.id, metaItem.baseCost, isMax, e)
            };
          }

          // Tab C (Default)
          const lvl = playerState[metaItem.id] || 1;
          const isMax = lvl >= metaItem.maxLevel;
          return {
            icon: metaItem.assets[lvl - 1] || metaItem.assets[0],
            name: metaItem.name,
            isMaxLevel: isMax,
            isDisabled: isMax,
            levelTag: isMax ? "ĐÃ TỐI ĐA" : `Lv.${lvl}`,
            metric: <span className="upgrade-metric-data">Chỉ số: <span className="metric-value">{metaItem.value * lvl}</span> {metaItem.metric}</span>,
            cost: !isMax ? <span className="upgrade-cost-data">Giá: <span className="cost-value">{metaItem.baseCost * (lvl + 1)}</span> Tiền</span> : <span className="upgrade-cost-data max-reached">Đã đạt tối đa</span>,
            onMouseDown: (e) => onStartHolding(metaItem.id, metaItem.baseCost * (lvl + 1), isMax, e)
          };
        };

        const config = getConfig();
        return (
          <UpgradeRow
            key={metaItem.id}
            data-item-id={metaItem.id}
            {...config}
            isTargetAnim={isTargetAnim}
            onStopHolding={onStopHolding}
            onRowReady={(element) => {
              if (containerRef.current) {
                const rect = element.getBoundingClientRect();
                const containerRect = containerRef.current.getBoundingClientRect();
                const pos = {
                  x: rect.left - containerRect.left + rect.width / 2,
                  y: rect.top - containerRect.top + rect.height / 2
                };
                iconPositions.current[metaItem.id] = pos;
              }
            }}
          />
        );
      })}
    </div>
  );
}