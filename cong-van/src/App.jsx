import { useState } from 'react';

import './App.css';

import BootScene from './component/scene/BootScene';
import IntroScene from './component/scene/IntroScene';
import GameScene from './component/scene/GameScene';
import EndingScene from './component/scene/EndingScene';

function App() {

  const [gameState, setGameState] = useState("boot");

  // 🎮 Global game progress
  const [gameData, setGameData] = useState({
    currentPhaseID: "PHASE_1",
    currentEventID: null,
    eventHistory: []
  });

  // 🏁 Ending data
  const [endingData, setEndingData] = useState({
    title: "THE END",
    subtitle: "",
    description: ""
  });

  function handleGameEnding(endingPayload) {
    setEndingData({
      title: endingPayload.title,
      subtitle: endingPayload.subtitle,
      description: endingPayload.description
    });

    setGameState("ending");
  }

  function handleRestartGame() {
    setGameData({
      currentPhaseID: "PHASE_1",
      currentEventID: null,
      eventHistory: []
    });

    setGameState("intro");
  }

  switch (gameState) {

    case "boot":
      return (
        <BootScene
          onFinish={() => setGameState("intro")}
        />
      );

    case "intro":
      return (
        <IntroScene
          onFinish={() => setGameState("game")}
        />
      );

    case "game":
      return (
        <GameScene
          currentPhaseID={gameData.currentPhaseID}
          currentEventID={gameData.currentEventID}
          eventHistory={gameData.eventHistory}

          onGameStateUpdate={(newState) => {
            setGameData(newState);
          }}

          onGameEnd={handleGameEnding}
        />
      );

    case "ending":
      return (
        <EndingScene
          endingTitle={endingData.title}
          endingSubtitle={endingData.subtitle}
          endingDescription={endingData.description}
          onRestart={handleRestartGame}
        />
      );

    default:
      return null;
  }
}

export default App;