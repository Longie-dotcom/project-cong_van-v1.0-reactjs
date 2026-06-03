import { useState, useEffect } from "react";
import "./ErrorPopup.css";

export default function ErrorPopup({ message, duration = 3000, onClose }) {
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    if (!message) return;

    // 1. Kích hoạt hiệu ứng trượt lên (slide-out) trước khi kết thúc duration 400ms
    const hideTimer = setTimeout(() => {
      setIsHiding(true);
    }, duration - 400);

    // 2. Thực tế xóa component / gọi callback kết thúc
    const closeTimer = setTimeout(() => {
      setIsHiding(false);
      if (onClose) onClose();
    }, duration);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(closeTimer);
    };
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className={`error-popup-container ${isHiding ? "slide-out" : "slide-in"}`}>
      <div className="error-popup-content">
        <p className="error-text-msg">{message}</p>
      </div>
    </div>
  );
}