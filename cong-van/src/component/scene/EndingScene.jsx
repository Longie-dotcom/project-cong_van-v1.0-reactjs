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
        <p className="ending-title">{endingTitle}</p>

        <p className="ending-subtitle">
          {endingSubtitle}
        </p>

        <p className="ending-description">
          {endingDescription}
        </p>

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