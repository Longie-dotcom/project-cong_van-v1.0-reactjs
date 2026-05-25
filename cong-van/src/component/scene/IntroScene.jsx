import { useEffect, useState, useRef } from 'react';

import Logo from './../../assets/image/logo.png';

import BernardHale from './../../assets/image/character/bernard-hale.png';
import AlexanderWhitmore from './../../assets/image/character/alexander-whitmore.png';
import EleanorWentworth from './../../assets/image/character/eleanor-wentworth.png';

import AlexanderWhitmoreSound from './../../assets/sound/alexander-whitmore.mp3';
import BernardHaleSound from './../../assets/sound/bernard-hale.mp3';
import EleanorWentworthSound from './../../assets/sound/eleanor-wentworth.mp3';

import './IntroScene.css';

const SPEAKER_SOUNDS = {
  "Bernard Hale": BernardHaleSound,
  "Alexander Whitmore": AlexanderWhitmoreSound,
  "Eleanor Wentworth": EleanorWentworthSound
};

const dialogues = [
  {
    speaker: "Bernard Hale",
    text: "Chúc mừng ngài Patrick. Quốc hội đã đặt niềm tin vào ngài."
  },
  {
    speaker: "Eleanor Wentworth",
    text: "Mùa đông năm nay sẽ rất khắc nghiệt... người dân cần một nhà lãnh đạo dám thực hiện những \"hy sinh cần thiết\"."
  },
  {
    speaker: "Alexander Whitmore",
    text: "Đừng để cảm xúc cản trở \"lợi ích quốc gia\". Than đá phải được đưa vào các lò luyện thép trước khi quá muộn."
  }
];

export default function IntroScene({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [showStart, setShowStart] = useState(false);
  const [scene, setScene] = useState("menu");
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  
  const [isTyping, setIsTyping] = useState(false);

  // 🛠️ Sử dụng hệ thống Audio Pool đa kênh để tránh nghẹt âm thanh
  const blipPoolRef = useRef([]);
  const blipIndexRef = useRef(0);
  const activeBlipSourceRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowStart(true);
      }, 1500);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Hiệu ứng gõ chữ và xử lý xoay vòng Audio Channel
  useEffect(() => {
    if (scene !== "conversation") return;

    const currentDialogue = dialogues[dialogueIndex];
    const speakerSoundFile = SPEAKER_SOUNDS[currentDialogue.speaker];
    let index = 0;

    setTypedText("");
    setIsTyping(true);

    // Kích thước Pool (4 kênh giúp phân phối tải phát âm thanh cực tốt ở tốc độ cao)
    const POOL_SIZE = 4;

    // Khởi tạo hoặc tái cấu trúc Pool nếu nhân vật thay đổi giọng thoại
    if (blipPoolRef.current.length === 0 || activeBlipSourceRef.current !== speakerSoundFile) {
      // Dừng toàn bộ âm thanh cũ
      blipPoolRef.current.forEach(audio => audio.pause());
      blipPoolRef.current = [];

      // Tạo các kênh âm thanh mới cho nhân vật hiện tại
      for (let i = 0; i < POOL_SIZE; i++) {
        const audioInstance = new Audio(speakerSoundFile);
        audioInstance.volume = 0.85; // Giữ âm lượng lớn rõ ràng
        blipPoolRef.current.push(audioInstance);
      }
      activeBlipSourceRef.current = speakerSoundFile;
    }

    const typewriterInterval = setInterval(() => {
      const nextChar = currentDialogue.text.charAt(index);
      
      setTypedText(currentDialogue.text.slice(0, index + 1));
      index++;

      // 🔊 Phát âm thanh luân phiên qua các kênh (bỏ qua khoảng trắng)
      if (nextChar && nextChar.trim() !== "" && blipPoolRef.current.length > 0) {
        const activeBlip = blipPoolRef.current[blipIndexRef.current];
        
        if (activeBlip) {
          activeBlip.currentTime = 0; 
          activeBlip.play().catch(err => console.log("Blip block:", err));
        }

        // Chuyển chỉ số sang kênh tiếp theo trong Pool (0 -> 1 -> 2 -> 3 -> 0)
        blipIndexRef.current = (blipIndexRef.current + 1) % blipPoolRef.current.length;
      }

      if (index >= currentDialogue.text.length) {
        clearInterval(typewriterInterval);
        setIsTyping(false);
      }
    }, 25); // ⚡ Tốc độ chạy chữ 25ms siêu mượt

    return () => {
      clearInterval(typewriterInterval);
    };
  }, [scene, dialogueIndex]);

  // Dọn dẹp tài nguyên khi unmount component
  useEffect(() => {
    return () => {
      if (blipPoolRef.current.length > 0) {
        blipPoolRef.current.forEach(audio => audio.pause());
        blipPoolRef.current = [];
      }
    };
  }, []);

  const handleStart = () => {
    const docEl = document.documentElement;
    if (docEl.requestFullscreen) {
      docEl.requestFullscreen().catch((err) => {
        console.warn(`Fullscreen initiation failed or skipped: ${err.message}`);
      });
    } else if (docEl.webkitRequestFullscreen) {
      docEl.webkitRequestFullscreen();
    }

    setFadeOut(false);

    setTimeout(() => {
      setScene("conversation");
      setFadeOut(true);
    }, 1200);
  };

  const handleNextDialogue = () => {
    if (isTyping) return;

    if (dialogueIndex < dialogues.length - 1) {
      setDialogueIndex(prev => prev + 1);
      return;
    }

    setFadeOut(false);

    setTimeout(() => {
      onFinish?.();
    }, 1200);
  };

  const currentSpeaker = dialogues[dialogueIndex].speaker;

  return (
    <div className="intro-screen">
      {scene === "menu" && (
        <>
          <img
            src={Logo}
            alt="Logo"
            className={`intro-logo ${showStart ? 'logo-up' : ''}`}
          />
          <div
            className={`start-text ${showStart ? 'show-start' : ''}`}
            onClick={handleStart}
          >
            Bắt đầu
          </div>
        </>
      )}

      {scene === "conversation" && (
        <div className="conversation-scene">
          <div className="character-row">
            <img
              src={BernardHale}
              alt="Bernard Hale"
              className={`character-image ${currentSpeaker === "Bernard Hale" ? 'active-character' : 'inactive-character'}`}
            />
            <img
              src={AlexanderWhitmore}
              alt="Alexander Whitmore"
              className={`character-image ${currentSpeaker === "Alexander Whitmore" ? 'active-character' : 'inactive-character'}`}
            />
            <img
              src={EleanorWentworth}
              alt="Eleanor Wentworth"
              className={`character-image ${currentSpeaker === "Eleanor Wentworth" ? 'active-character' : 'inactive-character'}`}
            />
          </div>

          <div className="speaker-name">{currentSpeaker}</div>

          <div 
            className={`dialogue-click-zone ${isTyping ? 'zone-locked' : 'zone-clickable'}`}
            onClick={handleNextDialogue}
          >
            <div className="dialogue-box">{typedText}</div>
            {!isTyping && <div className="continue-hint">Nhấn để tiếp tục</div>}
          </div>
        </div>
      )}

      <div className={`fade-layer ${fadeOut ? 'fade-out' : ''}`} />
    </div>
  );
}