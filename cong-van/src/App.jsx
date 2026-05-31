import { useState } from 'react';

import './App.css';

import BootScene from './component/scene/BootScene';
import IntroScene from './component/scene/IntroScene';
// import GameScene from './component/scene/GameScene';
import EndingScene from './component/scene/EndingScene';
import GameScene from './component/scene/GameScene';

function App() {
  const [endingData, setEndingData] = useState();
  const [gameState, setGameState] = useState("game");

  const renderScene = () => {
    switch (gameState) {
      case "boot":
        return <BootScene onFinish={() => setGameState("intro")} />;
      case "intro":
        return <IntroScene onFinish={() => setGameState("game")} />;
      case "game":
        return (
          <GameScene
            onGameStateUpdate={(newState) => {
              setGameData(newState);
            }}
            onGameEnd={setEndingData}
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
  };

  return (
    <>
      {renderScene()}
      <div className="crt-overlay" />
    </>
  );
}

export default App;