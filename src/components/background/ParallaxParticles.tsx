import { useEffect, useRef, useCallback } from 'react';
import { useTheme } from '@/hooks/useTheme';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  layer: number; // 1 = near, 2 = mid, 3 = far
  color: string;
  opacity: number;
  driftVx: number; // Drift velocity X (pixels per second)
  driftVy: number; // Drift velocity Y (pixels per second)
}

// Configuration
const PARTICLE_COUNT = 55;
const CONNECTION_DISTANCE = 150;
const CONNECTION_OPACITY = 0.1;
const WRAP_MARGIN = 50; // Pixels offscreen before wrap

// Drift speed configuration (pixels per second)
const DRIFT_SPEED_MIN = 3;
const DRIFT_SPEED_MAX = 8;
const DRIFT_SPEED_BY_LAYER = {
  1: 1.0,  // near - normal speed
  2: 0.75, // mid - slower
  3: 0.5,  // far - slowest (depth illusion)
};

// Parallax multipliers per layer
const PARALLAX_STRENGTH = {
  1: 30, // near - moves most
  2: 15, // mid
  3: 5,  // far - moves least
};

// Color palettes
const DARK_COLORS = ['#7aa2f7', '#bb9af7', '#7dcfff'];
const LIGHT_COLORS = ['#34548a', '#5a4a78', '#166775'];

// Line colors
const DARK_LINE_COLOR = 'rgba(122, 162, 247, 0.1)';
const LIGHT_LINE_COLOR = 'rgba(52, 84, 138, 0.12)';

function createParticles(
  width: number,
  height: number,
  colors: string[]
): Particle[] {
  const particles: Particle[] = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    // Distribute layers: 40% far, 35% mid, 25% near
    const rand = Math.random();
    let layer: number;
    if (rand < 0.4) {
      layer = 3; // far
    } else if (rand < 0.75) {
      layer = 2; // mid
    } else {
      layer = 1; // near
    }

    // Size based on layer (larger = closer)
    const sizeByLayer = {
      1: 2.5 + Math.random() * 1.5, // 2.5-4
      2: 1.5 + Math.random() * 1,   // 1.5-2.5
      3: 0.8 + Math.random() * 0.7, // 0.8-1.5
    };

    // Opacity based on layer
    const opacityByLayer = {
      1: 0.5 + Math.random() * 0.2, // 0.5-0.7
      2: 0.35 + Math.random() * 0.15, // 0.35-0.5
      3: 0.2 + Math.random() * 0.15, // 0.2-0.35
    };

    const x = Math.random() * width;
    const y = Math.random() * height;

    // Random drift direction and speed
    const driftAngle = Math.random() * Math.PI * 2;
    const baseSpeed = DRIFT_SPEED_MIN + Math.random() * (DRIFT_SPEED_MAX - DRIFT_SPEED_MIN);
    const layerMultiplier = DRIFT_SPEED_BY_LAYER[layer as keyof typeof DRIFT_SPEED_BY_LAYER];
    const speed = baseSpeed * layerMultiplier;

    particles.push({
      x,
      y,
      baseX: x,
      baseY: y,
      size: sizeByLayer[layer as keyof typeof sizeByLayer],
      layer,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: opacityByLayer[layer as keyof typeof opacityByLayer],
      driftVx: Math.cos(driftAngle) * speed,
      driftVy: Math.sin(driftAngle) * speed,
    });
  }

  return particles;
}

export function ParallaxParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);
  const isMobileRef = useRef(false);
  const { resolvedTheme } = useTheme();

  // Get current colors based on theme
  const getColors = useCallback(() => {
    return resolvedTheme === 'dark' ? DARK_COLORS : LIGHT_COLORS;
  }, [resolvedTheme]);

  const getLineColor = useCallback(() => {
    return resolvedTheme === 'dark' ? DARK_LINE_COLOR : LIGHT_LINE_COLOR;
  }, [resolvedTheme]);

  // Update particle colors when theme changes
  useEffect(() => {
    const colors = getColors();
    particlesRef.current.forEach((p) => {
      p.color = colors[Math.floor(Math.random() * colors.length)];
    });
  }, [resolvedTheme, getColors]);

  // Main effect for canvas setup and animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check if mobile
    isMobileRef.current = window.matchMedia('(max-width: 768px)').matches;

    // Set canvas size
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      // Recreate particles on resize
      particlesRef.current = createParticles(
        window.innerWidth,
        window.innerHeight,
        getColors()
      );

      // Update mobile check
      isMobileRef.current = window.matchMedia('(max-width: 768px)').matches;
    };

    resize();
    window.addEventListener('resize', resize);

    // Mouse tracking (desktop only)
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobileRef.current) return;

      // Normalize mouse position to -1 to 1
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let lastTime = performance.now();
    
    const animate = (currentTime: number) => {
      // Calculate delta time in seconds
      const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.1); // Cap at 100ms
      lastTime = currentTime;

      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const isMobile = isMobileRef.current;
      const lineColor = getLineColor();

      // Update particle positions
      for (const p of particles) {
        // Apply drift (both mobile and desktop)
        p.baseX += p.driftVx * deltaTime;
        p.baseY += p.driftVy * deltaTime;

        // Wrap around screen edges
        if (p.baseX < -WRAP_MARGIN) p.baseX = width + WRAP_MARGIN;
        if (p.baseX > width + WRAP_MARGIN) p.baseX = -WRAP_MARGIN;
        if (p.baseY < -WRAP_MARGIN) p.baseY = height + WRAP_MARGIN;
        if (p.baseY > height + WRAP_MARGIN) p.baseY = -WRAP_MARGIN;

        // Apply parallax offset (desktop only)
        if (!isMobile) {
          const strength = PARALLAX_STRENGTH[p.layer as keyof typeof PARALLAX_STRENGTH];
          p.x = p.baseX + mouse.x * strength;
          p.y = p.baseY + mouse.y * strength;
        } else {
          p.x = p.baseX;
          p.y = p.baseY;
        }
      }

      // Draw connection lines
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            // Fade line based on distance
            const opacity = CONNECTION_OPACITY * (1 - dist / CONNECTION_DISTANCE);
            ctx.globalAlpha = opacity;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [getColors, getLineColor]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
