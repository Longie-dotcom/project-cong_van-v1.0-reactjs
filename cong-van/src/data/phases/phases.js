import { PHASE1_EVENTS } from "./phase1.events";
import { PHASE2_EVENTS } from "./phase2.events";
import { PHASE3_EVENTS } from "./phase3.events";
import { ENDINGS } from "./ending";

export const PHASES = Object.freeze({
  "PHASE_1": {
    Order: [
      "EV_P1_ELIAS_CALL",
      "EV_P1_ALEXANDER_INTRO",
      "EV_P1_MIRA_COAL",
      "EV_P1_BERNARD_APPROVE",
      "EV_P1_BERNARD_DISAPPROVE",
      "EV_P1_MIRA_WAGE",
      "EV_P1_ELEANOR_APPROVE",
      "EV_P1_ELEANOR_DISAPPROVE",
      "EV_P1_MIRA_ACCIDENT",
      "EV_P1_ALEXANDER_APPROVE",
      "EV_P1_ALEXANDER_DISAPPROVE",
      "EV_P1_CLARA_LETTER"
    ],
    Coal_Quota: 100000,
    Events: PHASE1_EVENTS,
    Next_Phase: "PHASE_2"
  },

  "PHASE_2": {
    Order: [
      "EV_P2_CLARA_INVITATION",
      "EV_P2_BERNARD_WARNING",
      "EV_P2_ELEANOR_SUSPICION",
      "EV_P2_ALEXANDER_THREAT",
      "EV_P2_CLARA_SUPPORT",
      "EV_P2_JONAH_FIRST_MISSION",
      "EV_P2_MIRA_SON",
      "EV_P2_MIRA_WIDOW",
      "EV_P2_MIRA_COAL",
      "EV_P2_BERNARD_PRAISE",
      "EV_P2_REVOLUTION_THREAT"
    ],
    Coal_Quota: 1000000,
    Events: PHASE2_EVENTS,
    Next_Phase: "PHASE_3"
  },

  "PHASE_3": {
    Order: [
      "EV_P3_MIRA_STRIKE_1",
      "EV_P3_MIRA_STRIKE_2",
      "EV_P3_MIRA_STRIKE_3",
      "EV_P3_MIRA_STRIKE_4",
      "EV_P3_MIRA_STRIKE_5",
      "EV_P3_MIRA_WARNING",
      "EV_P3_CARTEL_BREAKDOWN",
      "EV_P3_COAL_DEPOT_SABOTAGE",
      "EV_P3_COLLECTIVE_PUNISHMENT",
      "EV_P3_CHAIN_COLLAPSE"
    ],
    Coal_Quota: 10000000,
    Events: PHASE3_EVENTS,
    Next_Phase: "ENDING"
  },

  "ENDING": ENDINGS
});

