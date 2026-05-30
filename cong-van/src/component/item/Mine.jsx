import { useState, useEffect, useRef } from 'react';
import usePixelParticles from '../../hooks/usePixelParticles';
import MineImage from './../../assets/image/mine.png';
import PaperParticleImg from './../../assets/upgrading/icon/icon25.png'; 
import CoalParticle from './../../assets/image/icon/coal-particle.png';
import ErrorSound from './../../assets/sound/error_006.ogg'; // Import âm thanh lỗi

import Worker from './Worker';
import Bong from './../../assets/sound/bong_001.ogg';
import './Mine.css';

export default function Mine({ playerState = {}, onMineClick, miners = [], isEventActive }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  const [isBouncing, setIsBouncing] = useState(false);
  const [floatingCoals, setFloatingCoals] = useState([]);
  const [errorPopups, setErrorPopups] = useState([]); // State cho popup lỗi

  const { spawnParticles } = usePixelParticles(canvasRef, PaperParticleImg);

  // Hiển thị popup lỗi
  const showErrorPopup = (x, y, text) => {
    new Audio(ErrorSound).play().catch(() => {});
    const popupId = Date.now() + Math.random();
    setErrorPopups((prev) => [...prev, { id: popupId, x, y, text }]);
    setTimeout(() => {
      setErrorPopups((prev) => prev.filter(p => p.id !== popupId));
    }, 800);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  const handleCanvasClick = (e) => {
    const container = containerRef.current;
      if (!container) return;

      // Tính toán tọa độ chuột so với góc trên bên trái của container
      const rect = container.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      if (isEventActive) {
        showErrorPopup(clickX, clickY, "Đang có sự kiện!");
        return;
      }

    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsBouncing(true);

    const mineAudio = new Audio(Bong);
    mineAudio.volume = 0.5; 
    mineAudio.play().catch(() => {});

    const cssX = e.nativeEvent.offsetX;
    const cssY = e.nativeEvent.offsetY;

    const canvasX = cssX * (canvas.width / rect.width);
    const canvasY = cssY * (canvas.height / rect.height);

    spawnParticles(canvasX, canvasY, { count: 20, size: 50 });

    const coalId = `${Date.now()}-${Math.random()}`;
    setFloatingCoals((prev) => [...prev, { id: coalId, x: cssX, y: cssY }]);

    setTimeout(() => {
      setFloatingCoals((prev) => prev.filter((coal) => coal.id !== coalId));
    }, 500);

    if (onMineClick) onMineClick();
    setTimeout(() => setIsBouncing(false), 200);
  };

  return (
    <div ref={containerRef} className="mine-board-container" onClick={handleCanvasClick}>
      <img 
        src={MineImage} 
        alt="Mine Background" 
        className={`mine-bg-static-img ${isBouncing ? 'juice-mine-bounce' : ''}`} 
      />

      <canvas ref={canvasRef} className="mine-pixel-canvas" />

      {/* Render Workers */}
      {miners.map((miner) => (
        <Worker
          key={miner.id}
          direction={miner.direction}
          x={miner.x}
          y={miner.y}
          canvasRef={canvasRef}
          fps={7}
          spawnParticlesGlobal={spawnParticles} 
          coalParticleImgSrc={CoalParticle}
        />
      ))}

      {/* Render Floating Coals */}
      {floatingCoals.map((coal) => (
        <img
          key={coal.id}
          src={PaperParticleImg}
          alt="Floating Coal"
          className="floating-coal-juice"
          style={{ left: `${coal.x}px`, top: `${coal.y}px` }}
        />
      ))}

      {/* Render Error Popups */}
      {errorPopups.map((popup) => (
        <div 
          key={popup.id} 
          className="mine-error-floating-popup" 
          style={{ left: `${popup.x}px`, top: `${popup.y}px` }}
        >
          {popup.text}
        </div>
      ))}
    </div>
  );
}