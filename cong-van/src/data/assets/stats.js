import EconomyIcon from "../../assets/image/icon/economy-icon1.png";
import ResourceIcon from "../../assets/image/icon/resource-icon1.png";
import CoalIcon from "../../assets/image/icon/coal-icon1.png";
import EconomyParticle from "../../assets/image/icon/economy-particle.png";
import ResourceParticle from "../../assets/image/icon/resource-particle.png";
import CoalParticle from "../../assets/image/icon/coal-particle.png";

export const STATS = Object.freeze({
  ECONOMY: "ECONOMY",
  RESOURCE: "RESOURCE",
  COAL: "COAL",
});

export const FLAG = Object.freeze({
  SUPPORTED_WORKER_SCORE: "SUPPORTED_WORKER_SCORE",

  JOINED_THE_REVOLUTION: "JOINED_THE_REVOLUTION",
});

export const STATS_CONFIG = Object.freeze({
  [STATS.ECONOMY]: {
    label: "Tiền",
    icon: EconomyIcon,
    particle: EconomyParticle,
  },
  [STATS.RESOURCE]: {
    label: "Tín nhiệm",
    icon: ResourceIcon,
    particle: ResourceParticle,
  },
  [STATS.COAL]: {
    label: "Than",
    icon: CoalIcon,
    particle: CoalParticle,
  },
});