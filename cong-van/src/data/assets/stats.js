import EconomyIcon from "../../assets/image/icon/economy-icon1.png";
import ResourceIcon from "../../assets/image/icon/resource-icon1.png";
import CoalIcon from "../../assets/image/icon/coal-icon1.png";

export const STATS = Object.freeze({
  ECONOMY: "ECONOMY",
  RESOURCE: "RESOURCE",
  COAL: "COAL",
  HAPPINESS: "HAPPINESS",
});

export const FLAG = Object.freeze({
  WORKER_HELP_1: "WORKER_HELP_1",
  WORKER_HELP_2: "WORKER_HELP_2",
  WORKER_HELP_3: "WORKER_HELP_3",

  JOINED_THE_REVOLUTION: "JOINED_THE_REVOLUTION",
});

export const STATS_CONFIG = Object.freeze({
  [STATS.ECONOMY]: {
    label: "Tiền",
    icon: EconomyIcon,
  },
  [STATS.RESOURCE]: {
    label: "Nhân lực",
    icon: ResourceIcon,
  },
  [STATS.COAL]: {
    label: "Than",
    icon: CoalIcon,
  },
  [STATS.HAPPINESS]: {
    label: "Sự hài lòng",
    icon: null, // Ẩn chỉ số
  },
});