import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    if (
      typeof window === 'undefined' ||
      window.matchMedia('(pointer: coarse)').matches || 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    setIsVisible(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let animationId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 5}px, ${mouseY - 5}px, 0) scale(${isHovered ? 1.5 : 1})`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, input, textarea, [data-hover]')) {
        isHovered = true;
        if (ringRef.current) {
          ringRef.current.classList.add('scale-150', 'border-cyan-400', 'bg-cyan-400/10');
          ringRef.current.classList.remove('border-purple-400/60');
        }
      } else {
        isHovered = false;
        if (ringRef.current) {
          ringRef.current.classList.remove('scale-150', 'border-cyan-400', 'bg-cyan-400/10');
          ringRef.current.classList.add('border-purple-400/60');
        }
      }
    };

    const animate = () => {
      // Smooth lerp for outer ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-cyan-400 rounded-full pointer-events-none mix-blend-difference shadow-[0_0_10px_#22d3ee] will-change-transform transition-transform duration-75"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />

      {/* Outer Glowing Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-purple-400/60 rounded-full pointer-events-none mix-blend-screen will-change-transform transition-[border-color,background-color] duration-150"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </div>
  );
};
