import { PHASE1_EVENTS } from "./phase1.events";
import { PHASE2A_EVENTS } from "./phase2a.events";
import { PHASE2B_EVENTS } from "./phase2b.events";
import { PHASE2C_EVENTS } from "./phase2c.events";
import { PHASE3_EVENTS } from "./phase3.events";
import { PHASE4A_EVENTS } from "./phase4a.events";
import { PHASE4B_EVENTS } from "./phase4b.events";
import { PHASE4C_EVENTS } from "./phase4c.events";
import { PHASE5_EVENTS } from "./phase5.events";

export const EVENTS_DATABASE = Object.freeze({
  ...PHASE1_EVENTS,
  ...PHASE2A_EVENTS,
  ...PHASE2B_EVENTS,
  ...PHASE2C_EVENTS,
  ...PHASE3_EVENTS,
  ...PHASE4A_EVENTS,
  ...PHASE4B_EVENTS,
  ...PHASE4C_EVENTS,
  ...PHASE5_EVENTS,
});
