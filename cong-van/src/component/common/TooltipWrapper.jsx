import "./TooltipWrapper.css";

export default function TooltipWrapper({ text, position = "top", children }) {
  return (
    <span className={`tooltip-wrapper tooltip-${position}`}>
      {children}
      {text ? (
        <span className="pixel-tooltip" role="tooltip">
          {text}
        </span>
      ) : null}
    </span>
  );
}
