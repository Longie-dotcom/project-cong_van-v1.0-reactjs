import { useCallback, useEffect, useRef, useState } from "react";
import { TELEPHONE_CONFIG } from "../../../data/assets/telephone";
import "./Telephone.css";
import { PAPER_CONFIG } from "../../../data/assets/paper";

function KeypadButton({ normalImg, hoverImg, clickImg, onClick, altText }) {
  const [status, setStatus] = useState("normal");

  let currentImg = normalImg;
  if (status === "hovered") currentImg = hoverImg;
  if (status === "clicked") currentImg = clickImg;

  return (
    <button
      className="keypad-digit-btn"
      onClick={onClick}
      onMouseEnter={() => setStatus("hovered")}
      onMouseLeave={() => setStatus("normal")}
      onMouseDown={() => setStatus("clicked")}
      onMouseUp={() => setStatus("hovered")}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
      }}
    >
      <img
        src={currentImg}
        alt={altText}
        style={{
          display: "block",
          width: "22px",
          height: "auto",
          imageRendering: "pixelated",
        }}
      />
    </button>
  );
}

export default function Telephone({ phoneCalls = [], onCallDialed, onChoiceSelect }) {
  const [phoneState, setPhoneState] = useState("idle");
  const [ringFrame, setRingFrame] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const typewriterIntervalRef = useRef(null);

  const [currentCallIdx, setCurrentCallIdx] = useState(0);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [dialedNumber, setDialedNumber] = useState("");

  const ringAudioRef = useRef(null);
  const blipPoolRef = useRef([]);
  const blipIndexRef = useRef(0);
  const activeBlipSourceRef = useRef(null);

  // 🆕 Polyphonic Keypad Sound Audio Channel Pool
  const keypadPoolRef = useRef([]);
  const keypadIndexRef = useRef(0);

  const numericButtonsConfig = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => ({
    value: num.toString(),
    ...TELEPHONE_CONFIG.BUTTONS[num] // Tự động lấy normal, hover, active
  }));

  // 🆕 Initialize the Keypad Sound audio channel buffers
  useEffect(() => {
    const POOL_SIZE = 4;
    for (let i = 0; i < POOL_SIZE; i++) {
      const audioInstance = new Audio(TELEPHONE_CONFIG.SOUNDS.keypad);
      audioInstance.volume = 0.4;
      keypadPoolRef.current.push(audioInstance);
    }

    return () => {
      keypadPoolRef.current.forEach((audio) => audio.pause());
      keypadPoolRef.current = [];
    };
  }, []);

  // 🆕 Playback channel routing function
  const playKeypadSound = useCallback(() => {
    if (keypadPoolRef.current.length > 0) {
      const audioChannel = keypadPoolRef.current[keypadIndexRef.current];
      if (audioChannel) {
        audioChannel.currentTime = 0;
        audioChannel.play().catch(() => { });
      }
      keypadIndexRef.current =
        (keypadIndexRef.current + 1) % keypadPoolRef.current.length;
    }
  }, []);

  // 🆕 Limit to 7 digits maximum and execute feedback audio sound
  const handleDigitPress = useCallback(
    (digit) => {
      if (dialedNumber.length < 7) {
        playKeypadSound();
        setDialedNumber((prev) => prev + digit);
      }
    },
    [dialedNumber.length, playKeypadSound],
  );

  const handleDeletePress = useCallback(() => {
    if (dialedNumber.length > 0) {
      playKeypadSound();
      setDialedNumber((prev) => prev.slice(0, -1));
    }
  }, [dialedNumber.length, playKeypadSound]);

  const handleTriggerCall = useCallback(() => {
    playKeypadSound();
    if (dialedNumber.trim() && onCallDialed) {
      onCallDialed(dialedNumber);
    }
  }, [dialedNumber, onCallDialed, playKeypadSound]);

  // ====================================================================
  // MONITOR INCOMING CALL DATA CHANGE UPDATES
  // ====================================================================
  useEffect(() => {
    const syncTimer = setTimeout(() => {
      if (phoneCalls && phoneCalls.length > 0) {
        setPhoneState("ringing");
        setIsOpen(false);
        setCurrentCallIdx(0);
        setCurrentLineIdx(0);
      } else {
        setPhoneState("idle");
        setIsOpen(false);
      }
    }, 0);

    return () => clearTimeout(syncTimer);
  }, [phoneCalls]);

  const activeCallNode = phoneCalls[currentCallIdx] || null;
  const currentSpeakerName = activeCallNode?.senderName || "ẨN DANH";
  const currentSpeakerImage = activeCallNode?.senderImage || null;
  const currentSpeakerBlip = activeCallNode?.senderBlip || null;
  const currentTextRaw = activeCallNode?.senderText || "";
  const linesArray = Array.isArray(currentTextRaw)
    ? currentTextRaw
    : [currentTextRaw];
  const currentLineText = linesArray[currentLineIdx] || "";

  // ====================================================================
  // AUDIO LOOP CONTROL (Ringtone handling)
  // ====================================================================
  useEffect(() => {
    const playRingtone = () => {
      if (phoneState === "ringing" && ringAudioRef.current) {
        ringAudioRef.current
          .play()
          .then(() => {
            window.removeEventListener("click", playRingtone);
            window.removeEventListener("mousedown", playRingtone);
          })
          .catch((err) => console.log("Audio waiting for bypass...", err));
      }
    };

    if (phoneState === "ringing") {
      if (!ringAudioRef.current) {
        ringAudioRef.current = new Audio(TELEPHONE_CONFIG.SOUNDS.ring);
        ringAudioRef.current.loop = true;
        ringAudioRef.current.volume = 0.1;
      }
      playRingtone();
      window.addEventListener("click", playRingtone);
      window.addEventListener("mousedown", playRingtone);
    } else {
      if (ringAudioRef.current) {
        ringAudioRef.current.pause();
        ringAudioRef.current.currentTime = 0;
      }
    }

    return () => {
      window.removeEventListener("click", playRingtone);
      window.removeEventListener("mousedown", playRingtone);
      if (ringAudioRef.current) {
        ringAudioRef.current.pause();
        ringAudioRef.current = null;
      }
    };
  }, [phoneState]);

  useEffect(() => {
    if (phoneState !== "ringing") return;
    const frameInterval = setInterval(() => {
      setRingFrame((prevFrame) => (prevFrame + 1) % TELEPHONE_CONFIG.MAIN.ringing.length);
    }, 200);
    return () => clearInterval(frameInterval);
  }, [phoneState, TELEPHONE_CONFIG.MAIN.ringing.length]);

  const handleOpenPhone = useCallback(() => {
    if (phoneState !== "ringing") return;
    setPhoneState("opened");
    setIsOpen(true);
  }, [phoneState]);

  useEffect(() => {
    if (phoneState !== "ringing") return;
    const autoOpenTimer = setTimeout(() => {
      handleOpenPhone();
    }, 1500);
    return () => clearTimeout(autoOpenTimer);
  }, [phoneState, handleOpenPhone]);

  // ====================================================================
  // TYPEWRITER EFFECT TICKER
  // ====================================================================
  useEffect(() => {
    if (!isOpen || !currentLineText) {
      setIsTyping(false);
      return;
    }

    setIsTyping(true);
    setDisplayedText("");

    const POOL_SIZE = 4;
    if (
      blipPoolRef.current.length === 0 ||
      activeBlipSourceRef.current !== currentSpeakerBlip
    ) {
      blipPoolRef.current.forEach((audio) => audio.pause());
      blipPoolRef.current = [];

      for (let i = 0; i < POOL_SIZE; i++) {
        const audioInstance = new Audio(currentSpeakerBlip);
        audioInstance.volume = 0.35;
        blipPoolRef.current.push(audioInstance);
      }
      activeBlipSourceRef.current = currentSpeakerBlip;
    }

    let nextCharIndex = 0;
    const typewriterInterval = setInterval(() => {
      if (nextCharIndex < currentLineText.length) {
        const nextChar = currentLineText.charAt(nextCharIndex);
        if (nextChar.trim() !== "" && blipPoolRef.current.length > 0) {
          const activeBlip = blipPoolRef.current[blipIndexRef.current];
          if (activeBlip) {
            activeBlip.currentTime = 0;
            activeBlip.play().catch(() => { });
          }
          blipIndexRef.current =
            (blipIndexRef.current + 1) % blipPoolRef.current.length;
        }
        setDisplayedText((prev) => prev + nextChar);
        nextCharIndex++;
      } else {
        clearInterval(typewriterInterval);
        setIsTyping(false);
      }
    }, 25); // 25ms speed as requested

    typewriterIntervalRef.current = typewriterInterval;

    return () => {
      clearInterval(typewriterInterval);
    };
  }, [
    isOpen,
    currentCallIdx,
    currentLineIdx,
    currentLineText,
    currentSpeakerBlip,
  ]);

  useEffect(() => {
    return () => {
      if (blipPoolRef.current.length > 0) {
        blipPoolRef.current.forEach((audio) => audio.pause());
        blipPoolRef.current = [];
      }
    };
  }, []);

  const moveToNextDialogue = useCallback(() => {
    // 1. Nếu còn dòng thoại tiếp theo trong cùng 1 cuộc gọi -> chuyển dòng
    if (currentLineIdx < linesArray.length - 1) {
      setCurrentLineIdx((prev) => prev + 1);
    }
    // 2. Nếu đang ở dòng cuối cùng của cuộc gọi
    else {
      // Nếu có cuộc gọi tiếp theo trong danh sách
      if (currentCallIdx < phoneCalls.length - 1) {
        setCurrentCallIdx((prev) => prev + 1);
        setCurrentLineIdx(0);
      } else {
        // Hết cuộc gọi -> Đóng phone
        setIsOpen(false);
        setPhoneState("idle");
      }
    }
  }, [currentLineIdx, linesArray.length, currentCallIdx, phoneCalls.length]);

  function handleDialogueClick() {
    // NẾU đang typing, cho hiện full text
    if (isTyping) {
      if (typewriterIntervalRef.current) clearInterval(typewriterIntervalRef.current);
      setDisplayedText(currentLineText);
      setIsTyping(false);
      return;
    }

    // NẾU đang ở dòng cuối và có lựa chọn -> CHẶN không cho chuyển tiếp tự động
    const isLastLine = currentLineIdx === linesArray.length - 1;
    const hasChoices = activeCallNode.choices && activeCallNode.choices.length > 0;

    if (isLastLine && hasChoices) {
      return; // Dừng lại, bắt buộc người dùng phải chọn
    }

    // Nếu không có lựa chọn, mới cho phép chuyển tiếp
    moveToNextDialogue();
  }

  // ====================================================================
  // KEYBOARD DIALOGUE HOTKEYS (Space / Enter)
  // ====================================================================
  useEffect(() => {
    if (!isOpen || !activeCallNode) return;

    const handleDialogueKeyDown = (e) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault(); // Stop spacebar scrolling
        handleDialogueClick();
      }
    };

    window.addEventListener("keydown", handleDialogueKeyDown);
    return () => {
      window.removeEventListener("keydown", handleDialogueKeyDown);
    };
  }, [isOpen, activeCallNode, isTyping, currentLineText, currentLineIdx, linesArray.length, currentCallIdx, phoneCalls.length]);

  return (
    <div className="telephone-system-wrapper">
      {/* LED Display Screen Output */}
      <div className="telephone-led-display">
        <span className="dialed-number-text">{dialedNumber || ""}</span>
      </div>

      <div className="telephone-component-container">
        <img
          src={
            phoneState === "ringing"
              ? TELEPHONE_CONFIG.MAIN.ringing[ringFrame % TELEPHONE_CONFIG.MAIN.ringing.length]
              : TELEPHONE_CONFIG.MAIN.idle
          }
          alt="Telephone Base"
          className="telephone-base-display"
        />

        <button
          className={`telephone-receiver-btn ${phoneState}`}
          onClick={handleOpenPhone}
          disabled={phoneState !== "ringing"}
        >
          <img
            src={TELEPHONE_CONFIG.MAIN.base}
            alt="Phone Handset Receiver"
            className="telephone-pixel-art"
          />
        </button>

        {/* PHYSICAL GRID DISPLAY USING IMAGE SWITCHING LOGIC */}
        <div className="telephone-keypad-grid">
          {numericButtonsConfig.map((btn) => (
            <KeypadButton
              key={btn.value}
              normalImg={btn.normal}
              hoverImg={btn.hover}
              clickImg={btn.active} // Chú ý: object của bạn đặt tên là 'active', không phải 'click'
              altText={`Button ${btn.value}`}
              onClick={() => handleDigitPress(btn.value)}
            />
          ))}

          {/* Delete & Call Button cũng dùng từ TELEPHONE */}
          <KeypadButton
            normalImg={TELEPHONE_CONFIG.BUTTONS.delete.normal}
            hoverImg={TELEPHONE_CONFIG.BUTTONS.delete.hover}
            clickImg={TELEPHONE_CONFIG.BUTTONS.delete.active}
            altText="Delete Button"
            onClick={handleDeletePress}
          />
          <KeypadButton
            normalImg={TELEPHONE_CONFIG.BUTTONS.call.normal}
            hoverImg={TELEPHONE_CONFIG.BUTTONS.call.hover}
            clickImg={TELEPHONE_CONFIG.BUTTONS.call.active}
            altText="Call Button"
            onClick={handleTriggerCall}
          />
        </div>
      </div>

      {isOpen && activeCallNode && (
        <div
          className="caller-dialogue-panel"
          onClick={handleDialogueClick}
          style={{ cursor: "pointer" }}
        >
          <div className="caller-profile-header">
            {currentSpeakerImage && (
              <div className={`caller-avatar-wrapper ${isTyping ? "avatar-glitch" : ""}`}>
                <img
                  src={currentSpeakerImage}
                  alt={currentSpeakerName}
                  className="caller-avatar"
                />
              </div>
            )}
          </div>

          <div className="caller-speech-bubble" style={{ position: "relative" }}>
            <p className="caller-text-content">
              <span className="caller-identity-tag">{currentSpeakerName}:</span>{" "}
              {displayedText}
            </p>

            {/* Chỉ hiển thị lựa chọn nếu đã chạy hết chữ (isTyping === false) 
      và đang ở dòng cuối cùng của cuộc gọi đó */}
            {!isTyping && activeCallNode.choices && currentLineIdx === linesArray.length - 1 ? (
              <div className="telephone-choices-container">
                {activeCallNode.choices.map((choice, idx) => (
                  <button
                    key={idx}
                    className="telephone-choice-btn"
                    onClick={(e) => {
                      e.stopPropagation(); // Ngăn sự kiện nổi bọt
                      onChoiceSelect(choice);
                      moveToNextDialogue();
                    }}
                  >
                    {choice.text}
                  </button>
                ))}
              </div>
            ) : (
              !isTyping && (
                <div className="dialogue-helper-text">
                  <span className="dialogue-next-arrow">▼</span>
                  [Space] hoặc Click để tiếp tục
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
