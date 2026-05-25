import './EndingScene.css';

export default function EndingScene({
  endingTitle = "THE END",
  endingSubtitle = "Theodore Has Changed Forever",
  endingDescription = "Your decisions reshaped the future of the city.",
  onRestart
}) {
  return (
    <div className="ending-scene">
      <div className="ending-overlay" />

      <div className="ending-panel">
        <h1 className="ending-title">{endingTitle}</h1>

        <p className="ending-subtitle">
          {endingSubtitle}
        </p>

        <div className="ending-description">
          {endingDescription}
        </div>

        <button
          className="ending-button"
          onClick={onRestart}
        >
          RESTART
        </button>
      </div>
    </div>
  );
}