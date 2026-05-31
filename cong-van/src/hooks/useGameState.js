import { PHASES } from "../data/phases/phases";

export function useGameState(playerState) {
  const fetchNextEvent = () => {
    const phase = PHASES[playerState.currentPhaseID];
    if (!phase || !phase.Order) return { type: "NONE" };

    const currentIdx = playerState.currentEventIdx ?? 0;

    if (currentIdx >= phase.Order.length) {
      return phase.Next_Phase === "ENDING"
        ? { type: "ENDING", data: phase }
        : { type: "NONE" };
    }

    const nextEventID = phase.Order[currentIdx];
    const event = phase.Events[nextEventID];

    if (!event) {
      console.error(`❌ Sự kiện không tồn tại: ${nextEventID} trong Phase ${playerState.currentPhaseID}`);
      return { type: "SKIP", index: currentIdx };
    }

    const hasFlag = !event.requiredFlag || (playerState.flags?.[event.requiredFlag] === true);

    return hasFlag
      ? { type: "EVENT", event, index: currentIdx }
      : { type: "SKIP", index: currentIdx };
  };

  return {
    fetchNextEvent,
  };
}