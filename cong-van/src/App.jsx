import { useState, useCallback } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { STATS, FLAG } from "./data/assets/stats";
import "./App.css";

import BootScene from "./component/scene/BootScene";
import IntroScene from "./component/scene/IntroScene";
import EndingScene from "./component/scene/EndingScene";
import GameScene from "./component/scene/GameScene";
import AdminScene from "./component/scene/AdminScene";

function App() {
  const navigate = useNavigate();
  const [endingData, setEndingData] = useState(null);

  const RESET_STATE = {
    name: "",
    connectionId: null,
    coal_value: 1.0,

    [STATS.RESOURCE]: 0,
    [STATS.COAL]: 0,
    [STATS.ECONOMY]: 90000,
    [STATS.HAPPINESS]: 0,

    [FLAG.WORKER_HELP_1]: false,
    [FLAG.WORKER_HELP_2]: false,
    [FLAG.WORKER_HELP_3]: false,
    [FLAG.JOINED_THE_REVOLUTION]: false,

    currentEventIdx: 0,
    eventHistory: null,
    currentEventID: null,
    currentPhaseID: "PHASE_1",

    village_1: 0,
    village_2: 0,
    village_3: 0,
    village_4: 0,

    tech_1: 0,
    tech_2: 0,
    tech_3: 0,
    tech_4: 0,

    railway: 0,
    auto: 0,
    tools: 0,
    storage: 0,
  };

  const [playerState, setPlayerState] = useState(RESET_STATE);
  const handleGameEnd = useCallback((data) => {
    setEndingData(data);
    navigate("/ending");
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/boot" />} />

        <Route path="/boot" element={<BootScene setPlayerState={setPlayerState} />} />

        <Route path="/intro" element={<IntroScene />} />

        <Route
          path="/game"
          element={
            <GameScene
              playerState={playerState}
              setPlayerState={setPlayerState}
              onGameEnd={handleGameEnd}
            />
          }
        />

        <Route
          path="/ending"
          element={
            endingData ? (
              <EndingScene
                endingTitle={endingData.title}
                endingSubtitle={endingData.subtitle}
                endingDescription={endingData.description}
                onRestart={() => {
                  setPlayerState(RESET_STATE);
                  setEndingData(null);
                  navigate("/game");
                }}
              />
            ) : (
              <Navigate to="/game" />
            )
          }
        />

        <Route path="/admin" element={<AdminScene />} />
      </Routes>

      <div className="crt-overlay" />
    </>
  );
}

export default App;