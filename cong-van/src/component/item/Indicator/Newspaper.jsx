import { useEffect, useState } from "react";
import { NEWSPAPER_CONFIG } from "../../../data/assets/newspaper";
import "./Newspaper.css";

export default function Newspaper({
  title = NEWSPAPER_CONFIG.DEFAULTS.title,
  content = NEWSPAPER_CONFIG.DEFAULTS.content,
}) {
  const [typedContent, setTypedContent] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedContent(content.slice(0, index));
      index++;

      if (index > content.length) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [content]);

  return (
    <div className="news-board-wrapper">
      <img
        src={NEWSPAPER_CONFIG.BACKGROUND}
        alt="News Board Backdrop"
        className="news-board-bg"
      />

      <div className="news-text-container">
        <p className="news-title">{title}</p>
        <p className="news-content">{typedContent}</p>
      </div>
    </div>
  );
}
