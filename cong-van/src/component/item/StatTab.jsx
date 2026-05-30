import { useState, useEffect, useRef } from "react";

import EconomyIcon from "./../../assets/image/icon/economy-icon1.png";
import ResourceIcon from "./../../assets/image/icon/resource-icon1.png";
import CoalIcon from "./../../assets/image/icon/coal-icon1.png";

import "./StatTab.css";
import TooltipWrapper from "../common/TooltipWrapper";

export default function StatTab({ stats }) {
  const containerRef = useRef(null);
  const prevStatsRef = useRef(stats);

  const [animatingKeys, setAnimatingKeys] = useState({});
  const [statDeltas, setStatDeltas] = useState({});

  const iconMap = {
    Resource: ResourceIcon,
    Economy: EconomyIcon,
    Coal: CoalIcon,
  };

  const tooltipTextMap = {
    Resource: "Nhân lực",
    Economy: "Lợi nhuận (Tiền)",
    Coal: "Than đá",
  };

  // Theo dõi sự thay đổi của stats để kích hoạt hiệu ứng Bounce nhẹ và số nổi Delta (+X/-X)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    Object.keys(stats).forEach((key) => {
      if (!iconMap[key]) return;

      const prevVal = prevStatsRef.current[key] ?? stats[key];
      const newVal = stats[key];

      if (newVal !== prevVal) {
        // Trigger class animation bounce nhẹ cho text/icon
        setAnimatingKeys((prev) => ({ ...prev, [key]: true }));
        setTimeout(() => {
          setAnimatingKeys((prev) => ({ ...prev, [key]: false }));
        }, 600);

        // Xử lý tạo số Delta nổi (+X / -X) bay lên
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
      {/* 🌟 ĐÃ XÓA: Thẻ canvas hứng hạt bụi gây rối mắt đã được loại bỏ */}

      {Object.entries(stats)
        .filter(([key]) => iconMap[key]) 
        .map(([key, value]) => (
          <TooltipWrapper key={key} text={tooltipTextMap[key]} position="top">
            <div
              data-stat-key={key}
              className={`stat-tab-icon-item ${animatingKeys[key] ? "horizontal-bounce-active" : ""}`}
            >
              <img
                src={iconMap[key]}
                alt={`${key} icon`}
                className="stat-tab-pixel-icon"
              />
              <span className="stat-tab-value-text">{value}</span>
              
              {/* Số delta (+1/-1) nảy lên tinh tế vẫn được giữ lại giúp người chơi nhận biết thay đổi */}
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
        ))}
    </div>
  );
}