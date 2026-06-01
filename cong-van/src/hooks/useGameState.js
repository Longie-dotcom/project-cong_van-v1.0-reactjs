import { PHASES } from "../data/phases/phases";
import { SIDE_EVENT } from "../data/phases/sideEvents";

export function useGameState(playerState) {
  const fetchNextEvent = () => {
    const phase = PHASES[playerState.currentPhaseID];
    if (!phase || !phase.Order) return { type: "NONE" };

    let currentIdx = playerState.currentEventIdx ?? 0;

    // Vòng lặp tìm sự kiện hợp lệ (không delay)
    while (currentIdx < phase.Order.length) {
      const nextEventID = phase.Order[currentIdx];
      const event = phase.Events[nextEventID];

      if (!event) {
        currentIdx++;
        continue;
      }

      const shouldShow = event.requiredFlag 
        ? playerState[event.requiredFlag] === (event.requiredValue ?? true)
        : true;

      if (shouldShow) {
        return { type: "EVENT", event, index: currentIdx };
      }
      currentIdx++;
    }

    // Nếu hết Order thì trả về SIDE_EVENT
    const sideEventIDs = Object.keys(SIDE_EVENT);
    const randomID = sideEventIDs[Math.floor(Math.random() * sideEventIDs.length)];
    return { type: "SIDE_EVENT", event: SIDE_EVENT[randomID] };
  };

  return { fetchNextEvent };
}