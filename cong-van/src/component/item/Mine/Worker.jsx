import { useState, useEffect, useRef } from 'react';
import { WORKER_CONFIG } from '../../../data/assets/worker';
import './Worker.css';

export default function Worker({
  direction = 'down',
  x = 0,
  y = 0,
  canvasRef,
  fps = 8,
  spawnParticlesGlobal,
  coalParticleImgSrc
}) {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const hasSpawnedParticleRef = useRef(false);
  const frames = WORKER_CONFIG[direction.toUpperCase()] || WORKER_CONFIG.DOWN;

  useEffect(() => {
    let animationFrameId;
    let lastTime = performance.now();
    const frameInterval = 1000 / fps;

    const updateAnimation = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      if (deltaTime >= frameInterval) {
        setCurrentFrameIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % frames.length;
          if (nextIndex !== 2) hasSpawnedParticleRef.current = false;
          return nextIndex;
        });
        lastTime = currentTime - (deltaTime % frameInterval);
      }
      animationFrameId = requestAnimationFrame(updateAnimation);
    };

    animationFrameId = requestAnimationFrame(updateAnimation);
    return () => cancelAnimationFrame(animationFrameId);
  }, [fps, frames.length]);

  useEffect(() => {
    const canvas = canvasRef?.current;
    if (currentFrameIndex === 2 && !hasSpawnedParticleRef.current && canvas && typeof spawnParticlesGlobal === 'function') {
      hasSpawnedParticleRef.current = true;
      const canvasRect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / canvasRect.width;
      const scaleY = canvas.height / canvasRect.height;
      const antiStretchScale = Math.sqrt(scaleX * scaleY);

      spawnParticlesGlobal(x * scaleX, (y + 15) * scaleY, {
        count: 6,
        size: 25 * antiStretchScale,
        imgSrc: coalParticleImgSrc
      });
    }
  }, [currentFrameIndex, canvasRef, x, y, spawnParticlesGlobal, coalParticleImgSrc]);

  return (
    <div
      className="pixel-worker-sprite"
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <div className="worker-shadow" />
      <img
        src={frames[currentFrameIndex]}
        alt={`Worker frame ${currentFrameIndex + 1}`}
        className="worker-image"
      />
    </div>
  );
}