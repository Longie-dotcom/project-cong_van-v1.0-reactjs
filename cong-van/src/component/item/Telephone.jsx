import { useCallback, useEffect, useRef, useState } from "react";

import Phone from "../../assets/image/telephone/phone.png";
import TelephoneNormal from "../../assets/image/telephone/telephone1.png";
import TelephoneRing1 from "../../assets/image/telephone/telephone2.png";
import TelephoneRing2 from "../../assets/image/telephone/telephone3.png";
import TelephoneRing3 from "../../assets/image/telephone/telephone4.png";

import Button1Normal from "../../assets/image/telephone/button1.png";
import Button1Hovered from "../../assets/image/telephone/button2.png";
import Button1Clicked from "../../assets/image/telephone/button3.png";

import Button2Normal from "../../assets/image/telephone/button4.png";
import Button2Hovered from "../../assets/image/telephone/button5.png";
import Button2Clicked from "../../assets/image/telephone/button6.png";

import Button3Normal from "../../assets/image/telephone/button7.png";
import Button3Hovered from "../../assets/image/telephone/button8.png";
import Button3Clicked from "../../assets/image/telephone/button9.png";

import Button4Normal from "../../assets/image/telephone/button10.png";
import Button4Hovered from "../../assets/image/telephone/button11.png";
import Button4Clicked from "../../assets/image/telephone/button12.png";

import Button5Normal from "../../assets/image/telephone/button13.png";
import Button5Hovered from "../../assets/image/telephone/button14.png";
import Button5Clicked from "../../assets/image/telephone/button15.png";

import Button6Normal from "../../assets/image/telephone/button16.png";
import Button6Hovered from "../../assets/image/telephone/button17.png";
import Button6Clicked from "../../assets/image/telephone/button18.png";

import Button7Normal from "../../assets/image/telephone/button19.png";
import Button7Hovered from "../../assets/image/telephone/button20.png";
import Button7Clicked from "../../assets/image/telephone/button21.png";

import Button8Normal from "../../assets/image/telephone/button22.png";
import Button8Hovered from "../../assets/image/telephone/button23.png";
import Button8Clicked from "../../assets/image/telephone/button24.png";

import Button9Normal from "../../assets/image/telephone/button25.png";
import Button9Hovered from "../../assets/image/telephone/button26.png";
import Button9Clicked from "../../assets/image/telephone/button27.png";

import ButtonDelNormal from "../../assets/image/telephone/button28.png";
import ButtonDelHovered from "../../assets/image/telephone/button29.png";
import ButtonDelClicked from "../../assets/image/telephone/button30.png";

import ButtonCallNormal from "../../assets/image/telephone/button31.png";
import ButtonCallHovered from "../../assets/image/telephone/button32.png";
import ButtonCallClicked from "../../assets/image/telephone/button33.png";

import TelephoneRingSound from "./../../assets/sound/telephone-1.mp3";
import TextBlipSound from "./../../assets/sound/default-sound.mp3";
import KeypadSound from "./../../assets/sound/keypad.mp3";

import "./Telephone.css";

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

export default function Telephone({ phoneCalls = [], onCallDialed }) {
  const [phoneState, setPhoneState] = useState("idle");
  const [ringFrame, setRingFrame] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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

  const ringFrames = [
    TelephoneNormal,
    TelephoneRing1,
    TelephoneRing2,
    TelephoneRing3,
  ];

  const numericButtonsConfig = [
    {
      value: "1",
      normal: Button1Normal,
      hover: Button1Hovered,
      click: Button1Clicked,
    },
    {
      value: "2",
      normal: Button2Normal,
      hover: Button2Hovered,
      click: Button2Clicked,
    },
    {
      value: "3",
      normal: Button3Normal,
      hover: Button3Hovered,
      click: Button3Clicked,
    },
    {
      value: "4",
      normal: Button4Normal,
      hover: Button4Hovered,
      click: Button4Clicked,
    },
    {
      value: "5",
      normal: Button5Normal,
      hover: Button5Hovered,
      click: Button5Clicked,
    },
    {
      value: "6",
      normal: Button6Normal,
      hover: Button6Hovered,
      click: Button6Clicked,
    },
    {
      value: "7",
      normal: Button7Normal,
      hover: Button7Hovered,
      click: Button7Clicked,
    },
    {
      value: "8",
      normal: Button8Normal,
      hover: Button8Hovered,
      click: Button8Clicked,
    },
    {
      value: "9",
      normal: Button9Normal,
      hover: Button9Hovered,
      click: Button9Clicked,
    },
  ];

  // 🆕 Initialize the Keypad Sound audio channel buffers
  useEffect(() => {
    const POOL_SIZE = 4;
    for (let i = 0; i < POOL_SIZE; i++) {
      const audioInstance = new Audio(KeypadSound);
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
        audioChannel.play().catch(() => {});
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
  // KEYBOARD INPUT LISTENER
  // ====================================================================
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (/[0-9]/.test(e.key)) {
        handleDigitPress(e.key);
      } else if (e.key === "Backspace") {
        handleDeletePress();
      } else if (e.key === "Enter") {
        handleTriggerCall();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleDeletePress, handleDigitPress, handleTriggerCall]);

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
  const currentSpeakerBlip = activeCallNode?.senderBlip || TextBlipSound;
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
        ringAudioRef.current = new Audio(TelephoneRingSound);
        ringAudioRef.current.loop = true;
        ringAudioRef.current.volume = 0.6;
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
      setRingFrame((prevFrame) => (prevFrame + 1) % ringFrames.length);
    }, 200);
    return () => clearInterval(frameInterval);
  }, [phoneState, ringFrames.length]);

  const handleOpenPhone = useCallback(() => {
    if (phoneState !== "ringing") return;
    setPhoneState("opened");
    setIsOpen(true);
  }, [phoneState]);

  useEffect(() => {
    if (phoneState !== "ringing") return;
    const autoOpenTimer = setTimeout(() => {
      handleOpenPhone();
    }, 5000);
    return () => clearTimeout(autoOpenTimer);
  }, [phoneState, handleOpenPhone]);

  // ====================================================================
  // TYPEWRITER EFFECT TICKER
  // ====================================================================
  useEffect(() => {
    if (!isOpen || !currentLineText) return;

    const resetTimer = setTimeout(() => {
      setDisplayedText("");
    }, 0);
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

    const typewriterInterval = setInterval(() => {
      setDisplayedText((prev) => {
        const nextIdx = prev.length;
        if (nextIdx < currentLineText.length) {
          const nextChar = currentLineText.charAt(nextIdx);
          if (nextChar.trim() !== "" && blipPoolRef.current.length > 0) {
            const activeBlip = blipPoolRef.current[blipIndexRef.current];
            if (activeBlip) {
              activeBlip.currentTime = 0;
              activeBlip.play().catch(() => {});
            }
            blipIndexRef.current =
              (blipIndexRef.current + 1) % blipPoolRef.current.length;
          }
          return prev + nextChar;
        } else {
          clearInterval(typewriterInterval);
          return prev;
        }
      });
    }, 40);

    return () => {
      clearTimeout(resetTimer);
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

  const isTextFinished = displayedText.length === currentLineText.length;

  function handleDialogueClick() {
    if (!isTextFinished) {
      setDisplayedText(currentLineText);
      return;
    }
    if (currentLineIdx < linesArray.length - 1) {
      setCurrentLineIdx((prev) => prev + 1);
    } else if (currentCallIdx < phoneCalls.length - 1) {
      setCurrentCallIdx((prev) => prev + 1);
      setCurrentLineIdx(0);
    } else {
      setIsOpen(false);
      setPhoneState("idle");
    }
  }

  return (
    <div className="telephone-system-wrapper">
      {/* LED Display Screen Output */}
      <div className="telephone-led-display">
        <span className="dialed-number-text">{dialedNumber || ""}</span>
      </div>

      <div className="telephone-component-container">
        <img
          src={
            phoneState === "ringing" ? ringFrames[ringFrame] : TelephoneNormal
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
            src={Phone}
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
              clickImg={btn.click}
              altText={`Button ${btn.value}`}
              onClick={() => handleDigitPress(btn.value)}
            />
          ))}

          {/* Delete Button */}
          <KeypadButton
            normalImg={ButtonDelNormal}
            hoverImg={ButtonDelHovered}
            clickImg={ButtonDelClicked}
            altText="Delete Button"
            onClick={handleDeletePress}
          />

          {/* Call Button */}
          <KeypadButton
            normalImg={ButtonCallNormal}
            hoverImg={ButtonCallHovered}
            clickImg={ButtonCallClicked}
            altText="Call Button"
            onClick={handleTriggerCall}
          />
        </div>
      </div>

      {isOpen && activeCallNode && (
        <div
          className={`caller-dialogue-panel ${isTextFinished ? "dismissible" : ""}`}
          onClick={handleDialogueClick}
        >
          <div className="caller-profile-header">
            {currentSpeakerImage && (
              <img
                src={currentSpeakerImage}
                alt={currentSpeakerName}
                className="caller-avatar"
              />
            )}
          </div>

          <div className="caller-speech-bubble">
            <p className="caller-text-content">
              <span className="caller-identity-tag">{currentSpeakerName}:</span>{" "}
              {displayedText}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
