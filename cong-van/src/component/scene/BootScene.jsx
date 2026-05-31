import { useState, useEffect } from "react";
import { BOOT_DATA } from "../../data/assets";
import './BootScene.css';

export default function BootScene({ onFinish }) {
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    if (!isActivated) return;

    // Helper tạo Audio instance từ BOOT_DATA
    const createAudio = (src, volume = 0.8) => {
      const audio = new Audio(src);
      audio.volume = volume;
      return audio;
    };

    const stampAudio = createAudio(BOOT_DATA.STAMP_SOUND);
    const mailAudio = createAudio(BOOT_DATA.OPEN_MAIL_SOUND, 0.7);

    // Timeline xử lý
    stampAudio.play().catch(() => {}); // Giây 0: Đóng dấu 1

    const timer2 = setTimeout(() => stampAudio.play().catch(() => {}), 3000); // Giây 3: Đóng dấu 2
    const timer3 = setTimeout(() => mailAudio.play().catch(() => {}), 6000);   // Giây 6: Mở thư
    const timer4 = setTimeout(onFinish, 7000);                                 // Giây 7: Kết thúc

    return () => {
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      stampAudio.pause();
      mailAudio.pause();
    };
  }, [isActivated, onFinish]);

  return (
    <div 
      className="screen boot-screen" 
      onClick={() => !isActivated && setIsActivated(true)}
      style={{ cursor: !isActivated ? 'pointer' : 'default' }}
    >
      {!isActivated ? (
        <>
          <img src={BOOT_DATA.AVATAR} alt="Logo" className="boot-logo" />
          <div className="boot-click-trigger"><p>{BOOT_DATA.ACTIVATE_TITLE}</p></div>
        </>
      ) : (
        <>
          <p className="boot-text-one">{BOOT_DATA.AUTHORS}</p>
          <p className="boot-text-two">{BOOT_DATA.INTRODUCTION}</p>
          <div className="boot-curtain-overlay" />
        </>
      )}
    </div>
  );
}