import React, { useEffect, useRef, useState } from 'react';
import { ALL_SKILLS_FOR_SPHERE } from '../data/skills';

interface SkillNode {
  text: string;
  x: number;
  y: number;
  z: number;
  px: number;
  py: number;
}

export const Skills3DSphere: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = 450);
    let height = (canvas.height = 450);
    const radius = 170;

    // Create 3D spherical point cloud layout using Fibonacci Sphere algorithm
    const nodes: SkillNode[] = ALL_SKILLS_FOR_SPHERE.map((text, i) => {
      const phi = Math.acos(-1 + (2 * i + 1) / ALL_SKILLS_FOR_SPHERE.length);
      const theta = Math.sqrt(ALL_SKILLS_FOR_SPHERE.length * Math.PI) * phi;
      return {
        text,
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        px: 0,
        py: 0,
      };
    });

    let angleX = 0.003;
    let angleY = 0.003;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const rotateX = (node: SkillNode, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const y = node.y * cos - node.z * sin;
      const z = node.z * cos + node.y * sin;
      node.y = y;
      node.z = z;
    };

    const rotateY = (node: SkillNode, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x = node.x * cos - node.z * sin;
      const z = node.z * cos + node.x * sin;
      node.x = x;
      node.z = z;
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - lastMouseX;
      const deltaY = e.clientY - lastMouseY;
      angleY = deltaX * 0.0005;
      angleX = -deltaY * 0.0005;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const currentCanvas = canvas;
    currentCanvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Center offset
      const cx = width / 2;
      const cy = height / 2;

      // Sort nodes by z-depth so front renders over back
      nodes.forEach((node) => {
        rotateX(node, angleX);
        rotateY(node, angleY);

        // Perspective scale projection
        const perspective = 300 / (300 + node.z);
        node.px = cx + node.x * perspective;
        node.py = cy + node.y * perspective;
      });

      nodes.sort((a, b) => b.z - a.z);

      nodes.forEach((node) => {
        const alpha = (node.z + radius) / (2 * radius);
        const scale = (node.z + radius) / (2 * radius) * 0.6 + 0.6;
        const fontSize = Math.max(11, Math.floor(16 * scale));

        ctx.font = `600 ${fontSize}px 'Space Grotesk', sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        if (hoveredSkill === node.text) {
          ctx.fillStyle = '#22d3ee';
          ctx.shadowColor = '#22d3ee';
          ctx.shadowBlur = 15;
        } else {
          ctx.fillStyle = `rgba(${165 + alpha * 90}, ${180 + alpha * 75}, 255, ${Math.max(0.25, alpha)})`;
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
        }

        ctx.fillText(node.text, node.px, node.py);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      currentCanvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [hoveredSkill]);

  return (
    <div className="relative flex flex-col items-center justify-center py-6">
      <div 
        ref={containerRef}
        className="relative w-[340px] h-[340px] sm:w-[450px] sm:h-[450px] flex items-center justify-center glass-panel rounded-full border border-cyan-500/20 shadow-[0_0_50px_rgba(56,189,248,0.1)] cursor-grab active:cursor-grabbing"
      >
        <canvas ref={canvasRef} className="max-w-full max-h-full" />
        
        {/* Subtle Center Glow */}
        <div className="absolute inset-0 m-auto w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />
      </div>

      <p className="mt-4 text-xs font-mono text-slate-400 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        Click & Drag 3D Sphere to Rotate Skill Nodes
      </p>
    </div>
  );
};
