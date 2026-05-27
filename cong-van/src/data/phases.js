import { PHASES } from "./constants";

export const GAME_PHASES = Object.freeze({
  [PHASES.PHASE_1]: {
    PhaseID: PHASES.PHASE_1,
    Events: [
      "EV_MAIN_P1_001",
      "EV_RAND_P1_001",
      "EV_RAND_P1_002",
      "EV_RAND_P1_003",
    ],
  },

  [PHASES.PHASE_2A]: {
    PhaseID: PHASES.PHASE_2A,
    Events: [
      "EV_MAIN_P2A_001",
      "EV_RAND_P2A_001",
      "EV_RAND_P2A_002",
      "EV_RAND_P2A_003",
    ],
  },

  [PHASES.PHASE_2B]: {
    PhaseID: PHASES.PHASE_2B,
    Events: ["EV_MAIN_P2B_001", "EV_RAND_P2B_001", "EV_RAND_P2B_002"],
  },

  [PHASES.PHASE_2C]: {
    PhaseID: PHASES.PHASE_2C,
    Events: [
      "EV_MAIN_P2C_001",
      "EV_RAND_P2C_001",
      "EV_RAND_P2C_002",
      "EV_RAND_P2C_003",
    ],
  },

  [PHASES.PHASE_3]: {
    PhaseID: PHASES.PHASE_3,
    Events: [
      "EV_MAIN_P3_001",
      "EV_RAND_P3_001",
      "EV_RAND_P3_002",
      "EV_RAND_P3_003",
      "EV_RAND_P3_004",
    ],
  },

  [PHASES.PHASE_4A]: {
    PhaseID: PHASES.PHASE_4A,
    Events: ["EV_MAIN_P4A_001", "EV_RAND_P4A_001", "EV_RAND_P4A_002"],
  },

  [PHASES.PHASE_4B]: {
    PhaseID: PHASES.PHASE_4B,
    Events: ["EV_MAIN_P4B_001", "EV_RAND_P4B_001", "EV_RAND_P4B_002"],
  },

  [PHASES.PHASE_4C]: {
    PhaseID: PHASES.PHASE_4C,
    Events: [
      "EV_MAIN_P4C_001",
      "EV_RAND_P4C_001",
      "EV_RAND_P4C_002",
      "EV_RAND_P4C_003",
    ],
  },

  [PHASES.PHASE_5]: {
    PhaseID: PHASES.PHASE_5,
    Events: [
      "EV_MAIN_P5_001",
      "EV_RAND_P5_001",
      "EV_RAND_P5_002",
      "EV_RAND_P5_003",
    ],
  },
});
