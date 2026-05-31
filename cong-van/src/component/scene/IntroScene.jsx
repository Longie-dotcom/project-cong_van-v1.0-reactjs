import React, { useEffect, useState, useRef } from "react";
import { INTRO_DATA } from "../../data/assets";
import "./IntroScene.css";

// --- Sub-Components ---
const CharacterDisplay = ({ activeCharKey }) => (
  <div className="character-row">
    {Object.entries(INTRO_DATA.CHARACTERS).map(([key, char]) => (
      <img
        key={key}
        src={char.img}
        alt={char.name}
        className={`character-image ${activeCharKey === key ? "active-character" : "inactive-character"}`}
      />
    ))}
  </div>
);

// --- Main Component ---
export default function IntroScene({ onFinish }) {
  const [scene, setScene] = useState("menu");
  const [fadeOut, setFadeOut] = useState(true);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const blipPoolRef = useRef([]);
  const blipIndexRef = useRef(0);
  const activeBlipSourceRef = useRef(null);

  const currentDialogue = INTRO_DATA.DIALOGUES[dialogueIndex];
  const currentChar = INTRO_DATA.CHARACTERS[currentDialogue.charKey];

  // Logic Audio Pool
  useEffect(() => {
    if (scene !== "conversation") return;
    const soundFile = currentChar.sound;

    if (activeBlipSourceRef.current !== soundFile) {
      blipPoolRef.current.forEach(a => a.pause());
      blipPoolRef.current = Array.from({ length: 4 }, () => new Audio(soundFile));
      activeBlipSourceRef.current = soundFile;
    }
  }, [scene, dialogueIndex, currentChar.sound]);

  // Logic Gõ chữ
  useEffect(() => {
    if (scene !== "conversation") return;
    setIsTyping(true);
    let index = 0;
    setTypedText("");

    const interval = setInterval(() => {
      const char = currentDialogue.text.charAt(index);
      setTypedText(prev => prev + char);
      
      if (char.trim() !== "" && blipPoolRef.current[blipIndexRef.current]) {
        const audio = blipPoolRef.current[blipIndexRef.current];
        audio.currentTime = 0;
        audio.play().catch(() => {});
        blipIndexRef.current = (blipIndexRef.current + 1) % 4;
      }

      index++;
      if (index >= currentDialogue.text.length) {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [dialogueIndex, scene, currentDialogue.text]);

  const handleNext = () => {
    if (isTyping) return;
    if (dialogueIndex < INTRO_DATA.DIALOGUES.length - 1) {
      setDialogueIndex(prev => prev + 1);
    } else {
      setFadeOut(false);
      setTimeout(onFinish, 1200);
    }
  };

  return (
    <div className="intro-screen">
      {scene === "menu" ? (
        <div onClick={() => { setScene("conversation"); setFadeOut(true); }}>
          <img src={INTRO_DATA.LOGO} alt="Logo" className="intro-logo" />
          <div className="start-text">{INTRO_DATA.START_TITLE}</div>
        </div>
      ) : (
        <div className="conversation-scene">
          <CharacterDisplay activeCharKey={currentDialogue.charKey} />
          <div className="speaker-name">{currentChar.name}</div>
          <div className={`dialogue-click-zone ${isTyping ? "zone-locked" : "zone-clickable"}`} onClick={handleNext}>
            <div className="dialogue-box">{typedText}</div>
            {!isTyping && <div className="continue-hint">{INTRO_DATA.ACTIVATE_TITLE}</div>}
          </div>
        </div>
      )}
      <div className={`fade-layer ${fadeOut ? "fade-out" : ""}`} />
    </div>
  );
}