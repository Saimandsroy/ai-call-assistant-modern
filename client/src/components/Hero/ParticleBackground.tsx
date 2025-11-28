import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  const initParticles = useCallback((width: number, height: number) => {
    const particleCount = Math.min(150, Math.floor((width * height) / 8000));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    particlesRef.current = particles;
  }, []);

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);

    const particles = particlesRef.current;
    const mouse = mouseRef.current;
    const time = Date.now() * 0.001;

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > height) particle.vy *= -1;

      particle.x = Math.max(0, Math.min(width, particle.x));
      particle.y = Math.max(0, Math.min(height, particle.y));
    });

    const connectionDistance = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          const opacity = (1 - distance / connectionDistance) * 0.15;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 107, 53, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    particles.forEach((particle) => {
      const pulse = Math.sin(time * 2 + particle.pulsePhase) * 0.3 + 0.7;
      const currentOpacity = particle.opacity * pulse;

      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const mouseDist = Math.sqrt(dx * dx + dy * dy);
      const mouseInfluence = Math.max(0, 1 - mouseDist / 200);
      const glowRadius = particle.radius * (1 + mouseInfluence * 2);

      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, glowRadius * 3
      );
      gradient.addColorStop(0, `rgba(255, 107, 53, ${currentOpacity})`);
      gradient.addColorStop(0.5, `rgba(255, 107, 53, ${currentOpacity * 0.3})`);
      gradient.addColorStop(1, "rgba(255, 107, 53, 0)");

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, glowRadius * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 107, 53, ${currentOpacity})`;
      ctx.fill();
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      initParticles(rect.width, rect.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      drawParticles(ctx, rect.width, rect.height);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initParticles, drawParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}
