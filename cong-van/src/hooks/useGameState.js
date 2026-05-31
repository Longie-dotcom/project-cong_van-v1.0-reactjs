import { PHASES } from "../data/phases/phases";

/**
 * Lấy dữ liệu đầy đủ của một Phase theo ID
 */
export function getPhaseData(phaseID) {
  const phase = PHASES[phaseID];
  if (!phase) {
    console.error(`❌ Phase not found: ${phaseID}`);
    return null;
  }
  return phase;
}

/**
 * Tìm sự kiện tiếp theo hợp lệ dựa trên Order và Flags của Phase
 */
export function getNextEvent(phaseID, state) {
  const phase = PHASES[phaseID];
  if (!phase) return { type: "NONE" };

  // Kiểm tra xem đã hết sự kiện trong Order chưa
  const currentIdx = state.currentEventIdx ?? 0;
  
  if (currentIdx >= phase.Order.length) {
    // Nếu hết sự kiện, kiểm tra xem có phải đến Ending không
    if (phase.Next_Phase === "ENDING") {
      // Logic xác định kết thúc (ví dụ dựa trên Happiness)
      const endingKey = state.Happiness > 50 ? "BINH_MINH_HOA_GIAI" : "KY_NGUYEN_THEP";
      return { type: "ENDING", data: phase };
    }
    return { type: "NONE" };
  }

  // Lấy sự kiện tiếp theo
  const nextEventID = phase.Order[currentIdx];
  const event = phase.Events[nextEventID];

  // Kiểm tra Flag
  const hasFlag = !event.requiredFlag || (state.flags && state.flags[event.requiredFlag] === true);

  if (hasFlag) {
    return { type: "EVENT", event: event, index: currentIdx };
  } else {
    // Nếu không thỏa mãn flag, bỏ qua sự kiện này và tăng chỉ số index
    return { type: "SKIP", index: currentIdx };
  }
}