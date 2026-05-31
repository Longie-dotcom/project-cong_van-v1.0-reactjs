import { useEffect, useRef, useCallback } from "react";
import './PixelParticles.css';

export default function PixelParticles(canvasRef) {
  const particlesRef = useRef([]);
  const imageCache = useRef({}); 

  const getOrLoadImage = (src) => {
    if (!src) return null;
    if (!imageCache.current[src]) {
      const img = new Image();
      img.src = src;
      imageCache.current[src] = img;
    }
    return imageCache.current[src];
  };

  useEffect(() => {
    let animationFrameId;
    const updateParticles = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        animationFrameId = requestAnimationFrame(updateParticles);
        return;
      }
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current = particlesRef.current.filter((p) => p.isAlive);
      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.18;
        p.vx *= 0.95;
        p.frameAge += 1;
        if (p.frameAge >= p.maxFrames) p.isAlive = false;

        if (p.img && p.img.complete) { // Chỉ vẽ khi ảnh đã load xong
            ctx.drawImage(p.img, p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
        }
      });
      animationFrameId = requestAnimationFrame(updateParticles);
    };
    animationFrameId = requestAnimationFrame(updateParticles);
    return () => cancelAnimationFrame(animationFrameId);
  }, [canvasRef]);

  const spawnParticles = useCallback((x, y, options = {}) => {
    // Ưu tiên dùng options.imgSrc, nếu không có thì bỏ qua
    const imgAsset = getOrLoadImage(options.imgSrc);
    if (!imgAsset) return;

    const count = options.count || 8;
    const newParticles = [];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 2;
      newParticles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: options.size || 24,
        frameAge: 0,
        maxFrames: 30,
        isAlive: true,
        img: imgAsset,
      });
    }
    particlesRef.current.push(...newParticles);
  }, []);

  return { spawnParticles };
}