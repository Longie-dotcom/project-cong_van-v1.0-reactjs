import { useEffect, useState } from 'react';
import NewsPaper from './../../assets/image/newspaper.png';
import './News.css';

export default function News({ 
    title = "TIN MỚI", 
    content = "Nội dung thông báo hôm nay..." }) {
  
  const [typedContent, setTypedContent] = useState("");

  // Run typing animation whenever a new content scenario arrives
  useEffect(() => {
    let index = 0;
    setTypedContent("");

    const interval = setInterval(() => {
      setTypedContent(content.slice(0, index));
      index++;

      if (index > content.length) {
        clearInterval(interval);
      }
    }, 20); // Snappy 20ms pacing

    return () => clearInterval(interval);
  }, [content]);

  return (
    <div className="news-board-wrapper">
      {/* Retro Background Panel */}
      <img
        src={NewsPaper}
        alt="News Board Backdrop"
        className="news-board-bg"
      />

      {/* Crisp Pixel-Art Overlay Content */}
      <div className="news-text-container">
        <p className="news-title">{title}</p>
        <p className="news-content">{typedContent}</p>
      </div>
    </div>
  );
}