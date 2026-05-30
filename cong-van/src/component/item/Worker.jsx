import { useState, useEffect, useRef } from 'react';

import WorkerDownFrame1 from './../../assets/upgrading/human/human1.png';
import WorkerDownFrame2 from './../../assets/upgrading/human/human2.png';
import WorkerDownFrame3 from './../../assets/upgrading/human/human3.png';
import WorkerDownFrame4 from './../../assets/upgrading/human/human4.png';

import WorkerRightFrame1 from './../../assets/upgrading/human/human5.png';
import WorkerRightFrame2 from './../../assets/upgrading/human/human6.png';
import WorkerRightFrame3 from './../../assets/upgrading/human/human7.png';
import WorkerRightFrame4 from './../../assets/upgrading/human/human8.png';

import WorkerLeftFrame1 from './../../assets/upgrading/human/human9.png';
import WorkerLeftFrame2 from './../../assets/upgrading/human/human10.png';
import WorkerLeftFrame3 from './../../assets/upgrading/human/human11.png';
import WorkerLeftFrame4 from './../../assets/upgrading/human/human12.png';

import WorkerUpFrame1 from './../../assets/upgrading/human/human13.png';
import WorkerUpFrame2 from './../../assets/upgrading/human/human14.png';
import WorkerUpFrame3 from './../../assets/upgrading/human/human15.png';
import WorkerUpFrame4 from './../../assets/upgrading/human/human16.png';

export default function Worker({ 
  direction = 'down', 
  x = 0,              
  y = 0,              
  canvasRef,          
  fps = 8,
  spawnParticlesGlobal, // 🌟 Nhận hàm dùng chung từ cha
  coalParticleImgSrc    // 🌟 Nhận path ảnh hạt riêng
}) {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const hasSpawnedParticleRef = useRef(false);

  const directionFramesMap = {
    down: [WorkerDownFrame1, WorkerDownFrame2, WorkerDownFrame3, WorkerDownFrame4],
    right: [WorkerRightFrame1, WorkerRightFrame2, WorkerRightFrame3, WorkerRightFrame4],
    left: [WorkerLeftFrame1, WorkerLeftFrame2, WorkerLeftFrame3, WorkerLeftFrame4],
    up: [WorkerUpFrame1, WorkerUpFrame2, WorkerUpFrame3, WorkerUpFrame4],
  };

  const frames = directionFramesMap[direction] || directionFramesMap['down'];

  // Game Loop xử lý chuyển động Sprite Anim
  useEffect(() => {
    let animationFrameId;
    let lastTime = performance.now();
    const frameInterval = 1000 / fps;

    const updateAnimation = (currentTime) => {
      const deltaTime = currentTime - lastTime;

      if (deltaTime >= frameInterval) {
        setCurrentFrameIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % frames.length;
          if (nextIndex !== 2) {
            hasSpawnedParticleRef.current = false;
          }
          return nextIndex;
        });
        lastTime = currentTime - (deltaTime % frameInterval);
      }
      animationFrameId = requestAnimationFrame(updateAnimation);
    };

    animationFrameId = requestAnimationFrame(updateAnimation);
    return () => cancelAnimationFrame(animationFrameId);
  }, [fps, frames.length]);

  // Lắng nghe đập cuốc ở Frame 3 (Index = 2)
  useEffect(() => {
    const canvas = canvasRef?.current;
    
    if (currentFrameIndex === 2 && !hasSpawnedParticleRef.current && canvas && typeof spawnParticlesGlobal === 'function') {
      hasSpawnedParticleRef.current = true; 

      const canvasRect = canvas.getBoundingClientRect();

      const targetX = x;
      const targetY = y + 15; // Chân điểm cuốc chạm vào đá

      const scaleX = canvas.width / canvasRect.width;
      const scaleY = canvas.height / canvasRect.height;
      const antiStretchScale = Math.sqrt(scaleX * scaleY);

      // 🌟 Gọi hàm Global được chia sẻ chung từ Mine board, kèm option đổi asset hình ảnh hạt sang cục than (Coal)
      spawnParticlesGlobal(targetX * scaleX, targetY * scaleY, {
        count: 6, 
        size: 25 * antiStretchScale,
        imgSrc: coalParticleImgSrc // Ghi đè hình ảnh hạt mỏ đá riêng cho Worker
      });
    }
  }, [currentFrameIndex, canvasRef, x, y, spawnParticlesGlobal, coalParticleImgSrc]); 

  return (
    <div
        className="pixel-worker-sprite"
        style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -50%)', 
        pointerEvents: 'none',             
        zIndex: 3,
        // 🌟 Thiết lập flex hoặc display tương đối để dễ căn giữa cái bóng dưới chân
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
        }}
    >
        {/* 1. Thẻ tạo bóng tròn/bầu dục dưới chân */}
        <div 
        className="worker-shadow"
        style={{
            position: 'absolute',
            bottom: '32px',           // Cầm chỉnh khoảng cách bóng sát dưới chân Worker (bù trừ tùy thích)
            width: '30px',           // Độ rộng của bóng (điều chỉnh cho vừa vặn với độ rộng chân 96px)
            height: '14px',          // Độ dẹt của bóng để tạo hình bầu dục (bằng width luôn nếu muốn tròn xoe)
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Màu đen trong suốt đúng chất game
            borderRadius: '50%',     // Bo tròn tuyệt đối tạo hình bầu dục/tròn
            zIndex: -1,              // Nằm bẹp dí phía sau/dưới chân của Worker
        }}
        />

        {/* 2. Ảnh Worker hiển thị phía trên cái bóng */}
        <img 
        src={frames[currentFrameIndex]} 
        alt={`Worker frame ${currentFrameIndex + 1}`} 
        style={{
            display: 'block',
            imageRendering: 'pixelated', 
            width: '96px',               
            height: '128px',
            position: 'relative',    // Đảm bảo đứng trên lớp bóng
            zIndex: 1
        }}
        />
    </div>
    );
}