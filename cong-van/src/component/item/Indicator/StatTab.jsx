import { useState, useEffect, useRef } from "react";
import { STATS_CONFIG } from '../../../data/assets/stats'; // Nhập cả STATS và STATS_CONFIG
import TooltipWrapper from "../../common/TooltipWrapper";
import "./StatTab.css";

export default function StatTab({ stats }) {
  const containerRef = useRef(null);
  const prevStatsRef = useRef(stats);

  const [animatingKeys, setAnimatingKeys] = useState({});
  const [statDeltas, setStatDeltas] = useState({});

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    Object.keys(stats).forEach((key) => {
      if (!STATS_CONFIG[key]) return;

      const prevVal = prevStatsRef.current[key] ?? stats[key];
      const newVal = stats[key];

      if (newVal !== prevVal) {
        setAnimatingKeys((prev) => ({ ...prev, [key]: true }));
        setTimeout(() => {
          setAnimatingKeys((prev) => ({ ...prev, [key]: false }));
        }, 600);

        const diff = newVal - prevVal;
        const deltaId = Date.now() + Math.random();
        setStatDeltas((prev) => ({
          ...prev,
          [key]: {
            text: diff > 0 ? `+${diff}` : `${diff}`,
            isPositive: diff > 0,
            id: deltaId,
          },
        }));

        setTimeout(() => {
          setStatDeltas((prev) => {
            if (prev[key]?.id === deltaId) {
              const newState = { ...prev };
              delete newState[key];
              return newState;
            }
            return prev;
          });
        }, 1000);
      }
    });

    prevStatsRef.current = stats;
  }, [stats]);

  return (
    <div ref={containerRef} className="stat-tab-row-container">
      {Object.entries(stats)
        .filter(([key]) => STATS_CONFIG[key] && STATS_CONFIG[key].icon) // 🌟 CHỈ LẤY CÁC KEY CÓ ICON
        .map(([key, value]) => {
          const config = STATS_CONFIG[key];

          return (
            <TooltipWrapper key={key} text={config.label} position="top">
              <div
                data-stat-key={key}
                className={`stat-tab-icon-item ${animatingKeys[key] ? "horizontal-bounce-active" : ""}`}
              >
                <img
                  src={config.icon}
                  alt={`${config.label} icon`}
                  className="stat-tab-pixel-icon"
                />

                <span className="stat-tab-value-text">
                  {value}
                </span>

                {statDeltas[key] && (
                  <span
                    key={statDeltas[key].id}
                    className={`delta-float ${statDeltas[key].isPositive ? "positive" : "negative"}`}
                  >
                    {statDeltas[key].text}
                  </span>
                )}
              </div>
            </TooltipWrapper>
          );
        })}
    </div>
  );
}