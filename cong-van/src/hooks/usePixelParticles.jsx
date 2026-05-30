import { useEffect, useRef, useCallback } from "react";

export default function usePixelParticles(canvasRef, defaultImgSrc) {
  const particlesRef = useRef([]);
  const particleImgRef = useRef(null);

  // Khởi tạo ảnh hạt từ lúc mount hook
  useEffect(() => {
    if (defaultImgSrc) {
      const img = new Image();
      img.src = defaultImgSrc;
      particleImgRef.current = img;
    }
  }, [defaultImgSrc]);

  // Vòng lặp render hạt trên Canvas
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
        p.vy += 0.18; // Trọng lực rơi xuống
        p.vx *= 0.95; // Lực cản không khí

        p.frameAge += 1;
        if (p.frameAge >= p.maxFrames) {
          p.isAlive = false;
        }

        ctx.save();
        ctx.imageSmoothingEnabled = false; // Giữ pixel-art sắc nét
        ctx.drawImage(p.img, p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(updateParticles);
    };

    animationFrameId = requestAnimationFrame(updateParticles);
    return () => cancelAnimationFrame(animationFrameId);
  }, [canvasRef]);

  // Hàm trigger bùng nổ hạt (Hàm này sẽ export ra ngoài để dùng)
  const spawnParticles = useCallback((x, y, options = {}) => {
    // Cho phép truyền custom hình ảnh hạt lúc bắn nếu muốn (nếu không truyền sẽ dùng defaultImgSrc)
    let imgAsset = particleImgRef.current;
    if (options.imgSrc) {
      imgAsset = new Image();
      imgAsset.src = options.imgSrc;
    }

    if (!imgAsset) return;

    const count = options.count || 20;
    const baseSize = options.size || 24;
    const newParticles = [];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 2;

      newParticles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2, // Đẩy ngược lên trên nhẹ
        size: baseSize,
        frameAge: 0,
        maxFrames: Math.floor(Math.random() * 20) + 25,
        isAlive: true,
        img: imgAsset,
      });
    }

    particlesRef.current = [...particlesRef.current, ...newParticles];
  }, []);

  return { spawnParticles };
}