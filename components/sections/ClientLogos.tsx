"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "@/app/styles/styles";

// Individual Logo Card with Canvas Smoke Effect
interface LogoProps {
  name: string;
  industry: string;
  glowColor: string;
}

function LogoCard({ name, industry, glowColor }: LogoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const requestRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, isMoving: false });

  // Smoke Particle class
  class SmokeParticle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    maxSize: number;
    opacity: number;
    maxLife: number;
    life: number;
    color: string;

    constructor(x: number, y: number, color: string) {
      this.x = x;
      this.y = y;
      // Drift upward and slowly sideways
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = -Math.random() * 1.2 - 0.4;
      this.size = Math.random() * 8 + 6;
      this.maxSize = Math.random() * 35 + 25;
      this.opacity = Math.random() * 0.15 + 0.1;
      this.maxLife = Math.random() * 50 + 40;
      this.life = this.maxLife;
      this.color = color;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      // Expand particle size
      this.size += (this.maxSize - this.size) * 0.04;
      // Fade out based on remaining life
      this.life--;
      this.opacity = (this.life / this.maxLife) * (Math.random() * 0.15 + 0.1);
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
      grad.addColorStop(0, this.color.replace("ALPHA", String(this.opacity)));
      grad.addColorStop(0.5, this.color.replace("ALPHA", String(this.opacity * 0.4)));
      grad.addColorStop(1, this.color.replace("ALPHA", "0"));
      ctx.fillStyle = grad;
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let particles: SmokeParticle[] = [];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // If hovered, spawn new smoke particles
      if (isHovered) {
        // Spawn color: either themed glow or standard smoke gray
        const isDark = document.documentElement.classList.contains("dark");
        const smokeBaseColor = isDark 
          ? "rgba(220, 220, 220, ALPHA)" 
          : "rgba(90, 90, 90, ALPHA)";
        
        // Spawn from mouse position if mouse is moving, or from bottom of card
        if (mouseRef.current.isMoving) {
          particles.push(new SmokeParticle(mouseRef.current.x, mouseRef.current.y, smokeBaseColor));
          mouseRef.current.isMoving = false;
        } else if (Math.random() < 0.25) {
          // Default: spawn from bottom edge of logo card
          const randomX = Math.random() * canvas.width;
          const spawnY = canvas.height - 5;
          particles.push(new SmokeParticle(randomX, spawnY, smokeBaseColor));
        }

        // Occasionally spawn colored brand theme smoke
        if (Math.random() < 0.08) {
          const randomX = Math.random() * canvas.width;
          particles.push(new SmokeParticle(randomX, canvas.height - 5, glowColor));
        }
      }

      // Update and draw existing particles
      particles = particles.filter((p) => {
        p.update();
        p.draw(ctx);
        return p.life > 0;
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isHovered, glowColor]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isMoving: true,
    };
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseRef.current.isMoving = false;
      }}
      onMouseMove={handleMouseMove}
      className="relative h-28 md:h-32 rounded-2xl md:rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-200/50 dark:border-zinc-800/50 flex flex-col items-center justify-center p-4 overflow-hidden transition-all duration-500 hover:border-zinc-300 dark:hover:border-zinc-700/80 group cursor-pointer"
    >
      {/* Absolute canvas for smoke rendering */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10 opacity-70"
      />

      {/* Brand logo container */}
      <div 
        className="relative z-20 transition-all duration-700 ease-out flex flex-col items-center select-none"
        style={{
          filter: isHovered ? "blur(0.8px) opacity(0.85) scale(0.96)" : "blur(0px) opacity(1) scale(1)",
        }}
      >
        <span className="font-michroma text-sm sm:text-base md:text-lg tracking-widest text-zinc-800 dark:text-zinc-100 group-hover:text-primary transition-colors duration-500 font-semibold uppercase">
          {name}
        </span>
        <span className="text-[9px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mt-1">
          {industry}
        </span>
      </div>

      {/* Background ambient glow matching logo theme on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] dark:group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${glowColor.replace("ALPHA", "1")} 0%, transparent 70%)`
        }}
      />
    </div>
  );
}

export default function ClientLogos() {
  const clients = [
    { name: "ZYLORA FASHION", industry: "E-Commerce / USA", glowColor: "rgba(245, 78, 14, ALPHA)" },
    { name: "KHAAS ATTIRE", industry: "Retail / Pakistan", glowColor: "rgba(251, 146, 60, ALPHA)" },
    { name: "APEX LOGISTICS", industry: "Corporate / Gulf", glowColor: "rgba(16, 185, 129, ALPHA)" },
    { name: "LUMIÈRE STUDIO", industry: "Production / UK", glowColor: "rgba(59, 130, 246, ALPHA)" },
    { name: "VORTEX AUTOMATION", industry: "SaaS / Canada", glowColor: "rgba(168, 85, 247, ALPHA)" },
    { name: "NEXUS OUTCOME", industry: "Growth / Global", glowColor: "rgba(236, 72, 153, ALPHA)" },
  ];

  return (
    <section className="py-16 md:py-20 bg-zinc-50/50 dark:bg-zinc-950/10 border-b border-zinc-150 dark:border-zinc-900 relative w-full overflow-hidden">
      {/* Ambient background decorations */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none opacity-10 dark:opacity-[0.03] bg-primary blur-[120px]" />
      
      <div className={styles.container}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <div className="space-y-3">
            <Eyebrow>OUR CLIENT NETWORK</Eyebrow>
            <h2 className={`${styles.heading_3} uppercase !text-xl md:!text-3xl`}>
              BRANDS WE PARTNER WITH
            </h2>
          </div>
          <div>
            <p className={`${styles.paragraph_sm} text-zinc-500 dark:text-zinc-400 max-w-sm`}>
              Hover over any logo to reveal the interactive smoke effect. We align our visual code with their revenue objectives.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {clients.map((c, i) => (
            <LogoCard
              key={i}
              name={c.name}
              industry={c.industry}
              glowColor={c.glowColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
