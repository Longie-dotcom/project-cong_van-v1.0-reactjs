import { useCallback, useEffect, useRef, useState } from "react";
import { TELEPHONE_CONFIG } from "../../../data/assets/telephone";
import "./Telephone.css";

export default function Telephone({ phoneCalls = [], onChoiceSelect, onConversationLogged }) {
  const [phoneState, setPhoneState] = useState("idle");
  const [ringFrame, setRingFrame] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const typewriterIntervalRef = useRef(null);

  // States quản lý sơ đồ hội thoại hình cây
  const [currentCallIdx, setCurrentCallIdx] = useState(0);
  const [currentNodeKey, setCurrentNodeKey] = useState("root");
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  // Refs điều khiển âm thanh thoại & nhạc chuông
  const ringAudioRef = useRef(null);
  const blipPoolRef = useRef([]);
  const blipIndexRef = useRef(0);
  const activeBlipSourceRef = useRef(null);

  const lastCallIdRef = useRef(null);
  // Bộ nhớ tạm thời lưu lựa chọn của người chơi để chờ thoại xong mới kích hoạt Event cha
  const pendingChoiceRef = useRef(null);
  const loggedNodesRef = useRef(new Set());


  // ====================================================================
  // ĐỒNG BỘ KHI CÓ EVENT CUỘC GỌI MỚI KÍCH HOẠT
  // ====================================================================
  useEffect(() => {
    const currentCallId = phoneCalls && phoneCalls[0]?.callID;

    if (currentCallId) {
      if (currentCallId !== lastCallIdRef.current) {
        lastCallIdRef.current = currentCallId;

        pendingChoiceRef.current = null;
        loggedNodesRef.current.clear();

        setPhoneState("ringing");
        setIsOpen(false);
        setCurrentCallIdx(0);
        setCurrentNodeKey(phoneCalls[0].startNodeID || "root");
        setCurrentLineIdx(0);
      }
    } else {
      lastCallIdRef.current = null;
      setPhoneState("idle");
      setIsOpen(false);
    }
  }, [phoneCalls]);

  // Bóc tách dữ liệu động theo Nút (Node) hiện tại
  const activeCallGroup = phoneCalls[currentCallIdx] || null;
  const nodesMap = activeCallGroup?.nodes || {};
  const currentNode = nodesMap[currentNodeKey] || null;

  const currentSpeakerName = currentNode?.senderName || "ẨN DANH";
  const currentSpeakerImage = currentNode?.senderImage || null;
  const currentSpeakerBlip = currentNode?.senderBlip || null;
  const currentTextRaw = currentNode?.senderText || "";
  const linesArray = Array.isArray(currentTextRaw) ? currentTextRaw : [currentTextRaw];
  const currentLineText = linesArray[currentLineIdx] || "";

  useEffect(() => {
    if (!isOpen || isTyping || !currentNode) return;

    const nodeKey = `${currentCallIdx}-${currentNodeKey}`;

    if (loggedNodesRef.current.has(nodeKey)) return;

    loggedNodesRef.current.add(nodeKey);

    onConversationLogged?.({
      type: "PHONE",
      sender: currentSpeakerName,
      topic: linesArray.join(" "),
      choice: null
    });

  }, [
    isOpen,
    isTyping,
    currentCallIdx,
    currentNodeKey,
    currentSpeakerName,
    linesArray,
    onConversationLogged
  ]);

  // ====================================================================
  // AUDIO RING TONE (Nhạc chuông điện thoại)
  // ====================================================================
  useEffect(() => {
    const playRingtone = () => {
      if (phoneState === "ringing" && ringAudioRef.current) {
        ringAudioRef.current.play()
          .then(() => {
            window.removeEventListener("click", playRingtone);
            window.removeEventListener("mousedown", playRingtone);
          }).catch((err) => console.log("Audio bpassed...", err));
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
    };
  }, [phoneState]);

  // Hoạt ảnh điện thoại rung reo
  useEffect(() => {
    if (phoneState !== "ringing") return;
    const frameInterval = setInterval(() => {
      setRingFrame((prevFrame) => (prevFrame + 1) % TELEPHONE_CONFIG.MAIN.ringing.length);
    }, 200);
    return () => clearInterval(frameInterval);
  }, [phoneState]);

  const handleOpenPhone = useCallback(() => {
    if (phoneState !== "ringing") return;
    setPhoneState("opened");
    setIsOpen(true);
  }, [phoneState]);

  // Tự động nhấc máy sau 1.5 giây đổ chuông
  useEffect(() => {
    if (phoneState !== "ringing") return;
    const autoOpenTimer = setTimeout(() => { handleOpenPhone(); }, 1500);
    return () => clearTimeout(autoOpenTimer);
  }, [phoneState, handleOpenPhone]);

  // ====================================================================
  // HIỆU ỨNG CHỮ CHẠY (TYPEWRITER) & TIẾNG BLIP VOICE
  // ====================================================================
  useEffect(() => {
    if (!isOpen || !currentLineText) {
      setIsTyping(false);
      return;
    }

    setIsTyping(true);
    setDisplayedText("");

    const POOL_SIZE = 4;
    if (blipPoolRef.current.length === 0 || activeBlipSourceRef.current !== currentSpeakerBlip) {
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
          blipIndexRef.current = (blipIndexRef.current + 1) % blipPoolRef.current.length;
        }
        setDisplayedText((prev) => prev + nextChar);
        nextCharIndex++;
      } else {
        clearInterval(typewriterInterval);
        setIsTyping(false);
      }
    }, 25);

    typewriterIntervalRef.current = typewriterInterval;
    return () => clearInterval(typewriterInterval);
  }, [isOpen, currentCallIdx, currentNodeKey, currentLineIdx, currentLineText, currentSpeakerBlip]);

  useEffect(() => {
    return () => {
      if (blipPoolRef.current.length > 0) {
        blipPoolRef.current.forEach((audio) => audio.pause());
        blipPoolRef.current = [];
      }
    };
  }, []);

  // ====================================================================
  // LOGIC DI CHUYỂN TRONG ĐỒ THỊ THOẠI HÌNH CÂY (ĐÃ SỬA KÍCH HOẠT EVENT)
  // ====================================================================
  const moveToNextDialogue = useCallback(() => {
    if (currentLineIdx < linesArray.length - 1) {
      setCurrentLineIdx((prev) => prev + 1);
      return;
    }

    // Nếu Node có thuộc tính đi tiếp trực tiếp sang node phản ứng
    if (currentNode && currentNode.nextNodeID) {
      setCurrentNodeKey(currentNode.nextNodeID);
      setCurrentLineIdx(0);
    }
    // Nếu hết sạch thoại trong cây và không còn lựa chọn nào nữa -> KẾT THÚC CUỘC GỌI CHÍNH THỨC
    else if (!currentNode?.choices || currentNode.choices.length === 0) {
      const nextCallIdx = currentCallIdx + 1;

      if (nextCallIdx < phoneCalls.length) {
        setCurrentCallIdx(nextCallIdx);
        setCurrentNodeKey(phoneCalls[nextCallIdx].startNodeID || "root");
        setCurrentLineIdx(0);
        setPhoneState("ringing");
        setIsOpen(false);
      } else {
        if (pendingChoiceRef.current) {
          if (onChoiceSelect) onChoiceSelect(pendingChoiceRef.current);
          pendingChoiceRef.current = null;
        } else {
          // Phòng trường hợp cuộc gọi thuần túy thông báo không có lựa chọn nào, vẫn gửi object rỗng để kết thúc event
          if (onChoiceSelect) onChoiceSelect({});
        }
        setIsOpen(false);
        setPhoneState("idle");
      }
    }
  }, [currentLineIdx, linesArray.length, currentNode, currentCallIdx, phoneCalls, onChoiceSelect]);

  function handleDialogueClick() {
    if (isTyping) {
      if (typewriterIntervalRef.current) clearInterval(typewriterIntervalRef.current);
      setDisplayedText(currentLineText);
      setIsTyping(false);
      return;
    }

    const isLastLine = currentLineIdx === linesArray.length - 1;
    const hasChoices = currentNode?.choices && currentNode.choices.length > 0;

    if (isLastLine && hasChoices) return;

    moveToNextDialogue();
  }

  // Hotkeys Space / Enter để lướt thoại
  useEffect(() => {
    if (!isOpen || !currentNode) return;
    const handleDialogueKeyDown = (e) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        handleDialogueClick();
      }
    };
    window.addEventListener("keydown", handleDialogueKeyDown);
    return () => window.removeEventListener("keydown", handleDialogueKeyDown);
  }, [isOpen, currentNode, isTyping, currentLineText, currentLineIdx, linesArray.length, currentCallIdx, phoneCalls.length]);

  return (
    <div className="telephone-system-wrapper">
      <div className="telephone-component-container">
        <img
          src={phoneState === "ringing" ? TELEPHONE_CONFIG.MAIN.ringing[ringFrame % TELEPHONE_CONFIG.MAIN.ringing.length] : TELEPHONE_CONFIG.MAIN.idle}
          alt="Telephone Base"
          className="telephone-base-display"
        />

        <button className={`telephone-receiver-btn ${phoneState}`} onClick={handleOpenPhone} disabled={phoneState !== "ringing"}>
          <img src={TELEPHONE_CONFIG.MAIN.base} alt="Phone Handset Receiver" className="telephone-pixel-art" />
        </button>
      </div>

      {isOpen && currentNode && (
        <div className="caller-dialogue-panel" onClick={handleDialogueClick} style={{ cursor: "pointer" }}>
          <div className="caller-profile-header">
            {currentSpeakerImage && (
              <div className={`caller-avatar-wrapper ${isTyping ? "avatar-glitch" : ""}`}>
                <img src={currentSpeakerImage} alt={currentSpeakerName} className="caller-avatar" />
              </div>
            )}
          </div>

          <div className="caller-speech-bubble" style={{ position: "relative" }}>
            <p className="caller-text-content">
              <span className="caller-identity-tag">{currentSpeakerName}:</span>{" "}
              {displayedText}
            </p>

            {/* Hiển thị lựa chọn phân nhánh cốt truyện */}
            {!isTyping && currentNode.choices && currentLineIdx === linesArray.length - 1 ? (
              <div className="telephone-choices-container">
                {currentNode.choices.map((choice, idx) => (
                  <button
                    key={idx}
                    className="telephone-choice-btn"
                    onClick={(e) => {
                      e.stopPropagation();

                      onConversationLogged?.({
                        type: "PHONE_CHOICE",
                        sender: currentSpeakerName,
                        choice: choice.text
                      });

                      if (choice.nextNodeID) {
                        // NẾU CÓ ĐOẠN THOẠI SAU: Ghim lựa chọn lại, nhảy tiếp node thoại tại local chứ KHÔNG báo lên GameScene vội
                        pendingChoiceRef.current = choice;
                        setCurrentNodeKey(choice.nextNodeID);
                        setCurrentLineIdx(0);
                      } else {
                        // NẾU KHÔNG CÓ ĐOẠN THOẠI SAU (End luôn): Kích hoạt kết thúc event ngay lập tức
                        if (onChoiceSelect) onChoiceSelect(choice);
                        setIsOpen(false);
                        setPhoneState("idle");
                      }
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