export const GAME_BALANCE = {
  // Tỉ lệ mỗi lần click vào mỏ
  MINE_CLICK: {
    BASE_COAL: 2,         // Than cơ bản nếu chưa có nhân lực hoặc nhân lực âm!
    MULTIPLIER: 0.124,    // Hệ số nhân với RESOURCE (nhân lực), Ví dụ: MULTIPLIER = 0.1 thì tức là 10 nhân lực sẽ cho ra 1 than cho mỗi click, note: Đã làm tròn trong công thức
  },

  // Tỉ lệ thu hoạch thụ động
  PASSIVE_INCOME: {
    ENABLED: true,
    INTERVAL_MS: 1000,
    GLOBAL_MULTIPLIER: 1.0,
  },

  // Giới hạn
  LIMITS: {
    MAX_MINERS: 20,
  },

  PRICING: {
    VILLAGE_MULTIPLIER: 1.5, // Hệ số scale-up giá mới cho mỗi lần mua mở rộng nhân lực
  }
};