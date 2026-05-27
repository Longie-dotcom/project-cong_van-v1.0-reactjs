import { useCallback, useEffect, useRef, useState } from "react";
import EconomyIcon from "./../../assets/image/icon/economy-icon1.png";
import ResourceIcon from "./../../assets/image/icon/resource-icon1.png";
import SecurityIcon from "./../../assets/image/icon/security-icon1.png";
import TrustIcon from "./../../assets/image/icon/trust-icon1.png";
import EqualityIcon from "./../../assets/image/icon/equality-icon1.png";

// 🟢 Using your distinct particle asset imports here
import EconomyParticle from "./../../assets/image/icon/economy-particle.png";
import ResourceParticle from "./../../assets/image/icon/resource-particle.png";
import SecurityParticle from "./../../assets/image/icon/security-particle.png";
import TrustParticle from "./../../assets/image/icon/trust-particle.png";
import EqualityParticle from "./../../assets/image/icon/equality-particle.png";

import "./StatTab.css";

// Helper to safely load image elements for our canvas rendering engine
const createParticleImage = (src) => {
  const img = new Image();
  img.src = src;
  return img;
};

export default function StatTab({ stats }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const prevStatsRef = useRef(stats);

  // State to track which icons should be shaking/bouncing horizontally
  const [animatingKeys, setAnimatingKeys] = useState({});

  // Mapping specifically to your Particle asset imports
  const particleImageMap = useRef({
    Resource: createParticleImage(ResourceParticle),
    Security: createParticleImage(SecurityParticle),
    Trust: createParticleImage(TrustParticle),
    Economy: createParticleImage(EconomyParticle),
    Equality: createParticleImage(EqualityParticle),
  });

  const iconMap = {
    Resource: ResourceIcon,
    Security: SecurityIcon,
    Trust: TrustIcon,
    Economy: EconomyIcon,
    Equality: EqualityIcon,
  };

  const spawnParticles = useCallback((key, x, y, type) => {
    const imgAsset = particleImageMap.current[key];
    const newParticles = [];

    if (type === "add") {
      const count = 12;
      const spawnRadius = 80;

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
        const startX = x + Math.cos(angle) * spawnRadius;
        const startY = y + Math.sin(angle) * spawnRadius;

        const totalFrames = 30;
        const vx = (x - startX) / totalFrames;
        const vy = (y - startY) / totalFrames;

        newParticles.push({
          x: startX,
          y: startY,
          vx: vx,
          vy: vy,
          size: 14, // Fixed crisp size
          isAlive: true,
          targetX: x,
          targetY: y,
          img: imgAsset,
          type,
        });
      }
    } else {
      const count = 25;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 3;
        newParticles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1,
          size: 50, // Fixed crisp size
          frameAge: 0,
          maxFrames: Math.floor(Math.random() * 30) + 40, // Keeps particles alive for 40-70 frames
          isAlive: true,
          img: imgAsset,
          type,
        });
      }
    }

    particlesRef.current = [...particlesRef.current, ...newParticles];
  }, []);

  // Main canvas animation loop framework
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Filter out dead particles across execution cycles
      particlesRef.current = particlesRef.current.filter((p) => p.isAlive);

      particlesRef.current.forEach((p) => {
        if (p.type === "add") {
          // 🌟 COLLECTING MOVEMENT: Move towards target center
          p.x += p.vx;
          p.y += p.vy;

          // Calculate distance remaining to target center point
          const dx = p.targetX - p.x;
          const dy = p.targetY - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Delete instantly when it reaches the center bounds (no fade away)
          if (distance < 12) {
            p.isAlive = false;
          }
        } else {
          // 💥 EXPLOSION MOVEMENT: Rapid spreading outbound with gravity & drag
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.15; // Gravity weight simulation
          p.vx *= 0.98; // Vector friction resistance

          // Count up the frames this particle has been alive
          p.frameAge += 1;
          // Cleanly delete the particle after it reaches its max life frames (~40-70 frames)
          if (p.frameAge >= p.maxFrames) {
            p.isAlive = false;
          }
        }

        ctx.save();
        // 🛑 FIX: Forced 100% full solid opacity throughout the particle lifespan
        ctx.globalAlpha = 1.0;

        // Retain pixelated crisp textures on scaling render transformations
        ctx.imageSmoothingEnabled = false;

        // 🛑 FIX: Draws with fixed constant sizing structure (p.size never changes or scales down)
        ctx.drawImage(
          p.img,
          p.x - p.size / 2,
          p.y - p.size / 2,
          p.size,
          p.size,
        );
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(updateParticles);
    };

    animationFrameId = requestAnimationFrame(updateParticles);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Sync canvas size with dynamic container layout frames
  useEffect(() => {
    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (canvas && container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight + 200; // Extra headroom spacing allowance
        canvas.style.top = "-200px";
      }
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, []);

  // Track state changes to trigger targeted particles
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    Object.keys(stats).forEach((key) => {
      const prevVal = prevStatsRef.current[key] ?? stats[key];
      const newVal = stats[key];

      if (newVal !== prevVal) {
        // Trigger the horizontal swing animation state flag
        setAnimatingKeys((prev) => ({ ...prev, [key]: true }));

        // Remove the animation flag after the 600ms CSS animation completes
        setTimeout(() => {
          setAnimatingKeys((prev) => ({ ...prev, [key]: false }));
        }, 600);

        const element = container.querySelector(`[data-stat-key="${key}"]`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();

          const targetX = rect.left - containerRect.left + rect.width / 2;
          const targetY = rect.top - containerRect.top + rect.height / 2 + 200;

          const isAdded = newVal > prevVal;
          spawnParticles(key, targetX, targetY, isAdded ? "add" : "explode");
        }
      }
    });

    prevStatsRef.current = stats;
  }, [stats, spawnParticles]);

  return (
    <div ref={containerRef} className="stat-tab-row-container">
      <canvas ref={canvasRef} className="stat-particle-canvas" />

      {Object.entries(stats).map(([key, value]) => (
        <div
          key={key}
          data-stat-key={key}
          className={`stat-tab-icon-item ${animatingKeys[key] ? "horizontal-bounce-active" : ""}`}
        >
          <img
            src={iconMap[key]}
            alt={`${key} icon`}
            className="stat-tab-pixel-icon"
          />
          <span className="stat-tab-value-text">{value}</span>
        </div>
      ))}
    </div>
  );
}
