import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BOOT_DATA } from "../../data/assets";
import './BootScene.css';
import ErrorPopup from "../item/Indicator/ErrorPopup";

export default function BootScene({ setPlayerState }) {
  const [isActivated, setIsActivated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isActivated) return;

    const createAudio = (src, volume = 0.8) => {
      const audio = new Audio(src);
      audio.volume = volume;
      return audio;
    };

    const [errorMessage, setErrorMessage] = useState("");
    const stampAudio = createAudio(BOOT_DATA.STAMP_SOUND);
    const mailAudio = createAudio(BOOT_DATA.OPEN_MAIL_SOUND, 0.7);

    stampAudio.play().catch(() => { });

    const timer2 = setTimeout(() => stampAudio.play().catch(() => { }), 3000);
    const timer3 = setTimeout(() => mailAudio.play().catch(() => { }), 6000);

    const timer4 = setTimeout(() => {
      navigate("/intro");
    }, 7000);

    return () => {
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      stampAudio.pause();
      mailAudio.pause();
    };
  }, [isActivated, navigate]);

  return (
    <div className="screen boot-screen">
      <ErrorPopup
        message={errorMessage}
        onClose={() => setErrorMessage("")}
      />
      <button
        className="admin-float-btn"
        onClick={() => navigate("/admin")}
      >
        Bảng xếp hạng
      </button>

      {!isActivated ? (
        <div className="boot-ui-container">
          <img src={BOOT_DATA.AVATAR} alt="Logo" className="boot-logo" />

          <input
            type="text"
            placeholder={BOOT_DATA.NAME_FIELD_PLACEHOLDER}
            maxLength={25}
            onChange={(e) => {
              const newName = e.target.value.replace(/^\s+/, '');
              setPlayerState(prev => ({
                ...prev,
                name: newName
              }));
            }}
            className="boot-name-input"
            onClick={(e) => e.stopPropagation()} // Quan trọng: không kích hoạt màn hình
          />

          <div
            className="boot-click-trigger"
            onClick={() => {
              if (!playerState.name?.trim()) {
                setErrorMessage("Vui lòng nhập tên trước khi bắt đầu!");
                return;
              }

              setIsActivated(true);
            }}
          >
            <p>{BOOT_DATA.ACTIVATE_TITLE}</p>
          </div>
        </div>
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