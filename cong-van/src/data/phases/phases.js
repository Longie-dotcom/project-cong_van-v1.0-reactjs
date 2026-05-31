import { PHASE1_EVENTS } from "./phase1.events";
import { PHASE2_EVENTS } from "./phase2.events";
import { PHASE3_EVENTS } from "./phase3.events";
import { PHASE4_EVENTS } from "./phase4.events";
import { ENDINGS } from "./ending";

export const PHASES = Object.freeze({
  "PHASE_1": {
    Order: [
      "EV_P1_ELIAS_TALK",
      "EV_P1_CARTEL_PRESSURE",
      "EV_P1_WORKER_PLEA",
      "EV_P1_MIRA_WAGE_CUT",
      "EV_P1_MIRA_SAFETY_GEAR",
      "EV_P1_MIRA_SHIFT_EXTEND",
      "EV_P1_CLARA_CONTACT",
    ],
    Coal_Quota: 10000, 
    Events: PHASE1_EVENTS,
    Next_Phase: "ENDING"
  },

  "PHASE_2": {
    Order: [
      "EV_P2_CLARA_INVITATION",   // Sự kiện mở đầu
      "EV_P2_CLARA_FOLLOWUP",     // Kích hoạt sau khi chọn "Gia nhập"
      "EV_P2_JOHN_REED_MISSION",  // Nhiệm vụ chính cho người đã gia nhập
      "EV_P2_MIRA_IDEOLOGY",      // Sự kiện xen ngang
      "EV_P2_WHITMORE_WARNING"    // Sự kiện đối trọng
    ],
    Coal_Quota: 11000, 
    Events: PHASE2_EVENTS,
    Next_Phase: "PHASE_3"
  },

  "PHASE_3": {
    Events: PHASE3_EVENTS,
  },

  "PHASE_4": {
    Events: PHASE4_EVENTS,
  },

  "ENDING": ENDINGS
});

