import { PHASES } from "./constants";
import { EVENTS_DATABASE } from "./events";
import { GAME_PHASES } from "./phases";

// 🎯 Đối tượng lưu trữ trạng thái Game toàn cục (Global State)
export const GAME_STATE = {
  currentPhaseID: PHASES.PHASE_1,
  currentEventID: null,
  eventHistory: [], // Nơi lưu vết tất cả EventID đã từng xuất hiện
};

/**
 * Hàm lấy sự kiện ngẫu nhiên theo Phase và tự động cập nhật lịch sử vào Game State
 * @param {string} phaseID - ID của Phase muốn lấy sự kiện (e.g., "PHASE_1")
 * @param {Object} state - Đối tượng quản lý State (Mặc định dùng GAME_STATE toàn cục)
 * @returns {Object|null} Trả về dữ liệu Event hoặc null nếu hết sự kiện khả dụng
 */
export function getEventByPhase(phaseID, state = GAME_STATE) {
  const phase = GAME_PHASES[phaseID];

  if (!phase) {
    console.error(`❌ Phase not found: ${phaseID}`);
    return null;
  }
  console.log("AAAAAAAAAA: ", phaseID);
  // 1. Tạo danh sách các sự kiện thuộc Phase này từ Database
  let pool = (phase.Events || [])
    .map((id) => EVENTS_DATABASE[id])
    .filter(Boolean);

  // 2. ❌ Loại bỏ sự kiện đang hiển thị trên màn hình hiện tại (nếu có)
  if (state.currentEventID) {
    pool = pool.filter((e) => e.EventID !== state.currentEventID);
  }

  // 3. ❌ Loại bỏ tất cả các sự kiện đã từng gặp trong lịch sử (Đọc từ state.eventHistory)
  pool = pool.filter((e) => !state.eventHistory.includes(e.EventID));

  // 4. Nếu kho sự kiện trống, cảnh báo và dừng lại
  if (pool.length === 0) {
    console.warn(`⚠️ No available events in phase ${phaseID}`);
    return null;
  }

  // 5. 🎲 Bốc ngẫu nhiên một sự kiện từ kho sự kiện khả dụng còn lại
  const chosenEvent = pool[Math.floor(Math.random() * pool.length)];

  // ====================================================================
  // 💾 TIẾN HÀNH LƯU TRỮ VÀO STATE ĐỂ ĐỒNG BỘ LỊCH SỬ (MUTATE GAME STATE)
  // ====================================================================

  // Nếu sự kiện hiện tại đang chạy chưa nằm trong lịch sử, đẩy nó vào lịch sử trước khi đổi Event mới
  if (
    state.currentEventID &&
    !state.eventHistory.includes(state.currentEventID)
  ) {
    state.eventHistory.push(state.currentEventID);
  }

  // Cập nhật thông tin sự kiện mới được chọn vào State quản lý
  state.currentPhaseID = phaseID;
  state.currentEventID = chosenEvent.EventID;

  // Trả về dữ liệu sự kiện đã chọn để Component sẵn sàng hiển thị
  return chosenEvent;
}
