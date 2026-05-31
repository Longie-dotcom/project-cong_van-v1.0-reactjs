export const STATS = Object.freeze({
  ECONOMY: "Economy",
  COAL: "Coal",
  RESOURCE: "Resource",
  HAPPINESS: "Happiness"
});

export const FLAG = Object.freeze({
  // Flag 1: Lời cam kết (Mở khóa chuỗi nhiệm vụ)
  JOINED_THE_REVOLUTION: "joined_the_revolution", 
  
  // 3 Flags nhiệm vụ (Chỉ khả dụng khi đã JOINED_THE_REVOLUTION = true)
  MISSION_COAL_DELIVERY: "mission_coal_delivery",
  MISSION_FUND_TRANSFER: "mission_fund_transfer",
  MISSION_STRIKE_SUPPORT: "mission_strike_support"
});