import { useEffect, useRef } from 'react';

const CURSOR_RADIUS = 600;

export default function CursorEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  // Function to get the primary color with an alpha value
  function getPrimaryColor(alpha = 0.1) {
    return `rgba(34, 211, 238, ${alpha})`;
  }

  // Updates size of the canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);
    // Centers the cursor on initial load
    mouse.current.x = window.innerWidth / 2;
    mouse.current.y = window.innerHeight / 2;
    return () => window.removeEventListener('resize', setSize);
  }, []);

  // Draws the cursor effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const colorCenter = getPrimaryColor(0.1);
      const colorMid = getPrimaryColor(0.05);

      const gradient = ctx.createRadialGradient(
        mouse.current.x,
        mouse.current.y,
        0,
        mouse.current.x,
        mouse.current.y,
        CURSOR_RADIUS
      );
      gradient.addColorStop(0, colorCenter);
      gradient.addColorStop(0.5, colorMid);
      gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(
        mouse.current.x - CURSOR_RADIUS,
        mouse.current.y - CURSOR_RADIUS,
        CURSOR_RADIUS * 2,
        CURSOR_RADIUS * 2
      );
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Updates mouse position
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: '100vw', height: '100vh' }}
      aria-hidden="true"
    />
  );
}
