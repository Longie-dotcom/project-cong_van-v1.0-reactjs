import { ALL_EVENTS, GAME_EVENT_ORDER } from "../data/phases/phases";
import { SIDE_EVENT } from "../data/phases/sideEvents";
import { STATS, FLAG } from "../data/assets/stats";

export function useGameState(playerState) {
  const fetchNextEvent = () => {
    let currentIdx = playerState.currentEventIdx ?? 0;

    // ============================================================
    // 💀 ENGINE KIỂM TRA ĐIỀU KIỆN SỐNG CÒN (SURVIVAL CHECKER)
    // ============================================================
    
    // 1. Kiểm tra ví tiền toàn cục (Âm tiền xử thua ngay tại chỗ)
    const currentMoney = playerState[STATS.ECONOMY] ?? 0;
    if (currentMoney < 0) {
      return { type: "GAME_OVER_STATS", endingKey: "BANKRUPTCY" };
    }

    // 2. Nếu vượt quá độ dài cốt truyện -> Phá đảo thành công
    if (currentIdx >= GAME_EVENT_ORDER.length) {
      const supportScore = playerState[FLAG.SUPPORTED_WORKER_SCORE] ?? 0;
      const joined = playerState[FLAG.JOINED_THE_REVOLUTION] ?? false;

      let endingKey = "BANKRUPTCY";

      if (!joined && supportScore < 7) {
        endingKey = "DIA_NGUC_THANG_CAP"; // bad end 1
      }

      if (!joined && supportScore >= 7) {
        endingKey = "KE_TIEP_TAY_DIA_NGUC"; // bad end 2
      }

      if (joined && supportScore < 7) {
        endingKey = "PHAN_BOI_KHONG_THUOC_VE_AI"; // bad end 3
      }

      if (joined && supportScore >= 7) {
        endingKey = "BINH_MINH_VUNG_DAY"; // good end
      }

      return {
        type: "GAME_OVER",
        endingKey
      };
    }

    // 3. Duyệt tìm Event hợp lệ kế tiếp và kiểm tra chỉ tiêu Than đầu ngày
    while (currentIdx < GAME_EVENT_ORDER.length) {
      const nextEventID = GAME_EVENT_ORDER[currentIdx];
      const event = ALL_EVENTS[nextEventID];

      if (!event) {
        currentIdx++;
        continue;
      }

      // 🔍 KIỂM TRA CHỈ TIÊU THAN TRỰC TIẾP TẠI ĐÂY
      if (event.MinCoalRequired) {
        const currentCoal = playerState[STATS.COAL] ?? 0;
        // Nếu kho than hiện tại thấp hơn yêu cầu tối thiểu của ngày này -> Xử thua!
        if (currentCoal < event.MinCoalRequired) {
          return { type: "GAME_OVER_STATS", endingKey: "QUOTA_FAILED" };
        }
      }

      // Kiểm tra các điều kiện phụ (nếu có) của Event
      let shouldShow = true;
      if (event.conditions && Array.isArray(event.conditions)) {
        shouldShow = event.conditions.every(cond => {
          const stateValue = playerState[cond.flag] ?? 0;
          const targetValue = cond.value;

          switch (cond.operator) {
            case ">":   return stateValue > targetValue;
            case "<":   return stateValue < targetValue;
            case ">=":  return stateValue >= targetValue;
            case "<=":  return stateValue <= targetValue;
            case "!=":  return stateValue !== targetValue;
            case "==":
            case "===":
            default:    return stateValue === targetValue;
          }
        });
      } else if (event.requiredFlag) {
        const stateValue = playerState[event.requiredFlag];
        const targetValue = event.requiredValue ?? true;
        shouldShow = stateValue === targetValue;
      }

      if (shouldShow) {
        return { type: "EVENT", eventID: nextEventID, eventData: event, index: currentIdx };
      }
      
      currentIdx++;
    }

    // Nếu không khớp chuỗi cốt truyện chính thì bốc Side Event ngẫu nhiên
    const sideEventIDs = Object.keys(SIDE_EVENT);
    const randomID = sideEventIDs[Math.floor(Math.random() * sideEventIDs.length)];
    return { type: "SIDE_EVENT", eventID: randomID, eventData: SIDE_EVENT[randomID] };
  };

  return { fetchNextEvent };
}