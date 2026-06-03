import { useRef, useState } from "react";
import { NOTE_CONFIG } from "../../../data/assets/note";
import './TabMenu.css';

export default function TabMenu({
  activeTab,
  setActiveTab
}) {
  const switchAudioRef = useRef(null);
  const [hoveredTab, setHoveredTab] = useState(null);

  function handleTabClick(docId) {
    if (activeTab !== docId) {
      if (!switchAudioRef.current) {
        switchAudioRef.current = new Audio(NOTE_CONFIG.SOUNDS.tab_switch);
        switchAudioRef.current.volume = 0.5;
      }
      switchAudioRef.current.currentTime = 0;
      switchAudioRef.current.play().catch(() => { });
      setActiveTab(docId);
    }
  }

  const renderTabs = () => (
    Object.entries(NOTE_CONFIG.UI.tabs).map(([key, data], index) => (
      <img
        key={key}
        src={hoveredTab === key || activeTab === key ? data.hover : data.normal}
        alt={data.title}
        className={`paper-tab ${hoveredTab === key ? 'tab-hovered' : ''}`}
        style={{ top: `${index * 80}px` }}
        onMouseEnter={() => setHoveredTab(key)}
        onMouseLeave={() => setHoveredTab(null)}
        onClick={() => handleTabClick(key)}
      />
    ))
  );

  return (
    <div className="paper-tabs">{renderTabs()}</div>
  );
}