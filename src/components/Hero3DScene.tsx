import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Text } from '@react-three/drei';
import * as THREE from 'three';

// 3D Floating Code Cube Component inside Three.js Canvas
const FloatingDeveloperCube = ({ mouseX, mouseY }: { mouseX: number; mouseY: number }) => {
  const meshRef = useRef<THREE.Group>(null);
  const cubeRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      // Gentle continuous rotation + subtle mouse tracking
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouseY * 0.3, 0.05);
      meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, mouseX * 0.3, 0.05);
    }
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.6;
      ringRef.current.rotation.y -= delta * 0.8;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Outer Orbiting Cyber Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.2, 0.03, 16, 100]} />
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.6} />
      </mesh>

      {/* Main Glass Cyber Laptop / Holographic Cube */}
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.2}>
        <mesh ref={cubeRef} scale={[1.8, 1.4, 0.8]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial
            color="#0f172a"
            transmission={0.9}
            opacity={1}
            transparent
            roughness={0.15}
            ior={1.5}
            thickness={0.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
            wireframe={false}
          />
        </mesh>

        {/* Glowing Wireframe Edges */}
        <lineSegments scale={[1.82, 1.42, 0.82]}>
          <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
          <lineBasicMaterial color="#a855f7" linewidth={2} />
        </lineSegments>

        {/* Floating Glowing Core Orb */}
        <mesh scale={0.5}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial
            color="#22d3ee"
            emissive="#0284c7"
            emissiveIntensity={0.8}
            distort={0.4}
            speed={3}
          />
        </mesh>

        {/* 3D Floating Code Text Elements */}
        {/* 3D Floating Code Text Elements */}
        <Text
          position={[0, 0.3, 0.42]}
          fontSize={0.13}
          color="#38bdf8"
          anchorX="center"
          anchorY="middle"
        >
          {`const developer = {`}
        </Text>
        <Text
          position={[0, 0.1, 0.42]}
          fontSize={0.13}
          color="#a855f7"
          anchorX="center"
          anchorY="middle"
        >
          {`  name: "Thiyagesh",`}
        </Text>
        <Text
          position={[0, -0.1, 0.42]}
          fontSize={0.13}
          color="#34d399"
          anchorX="center"
          anchorY="middle"
        >
          {`  role: "Web Developer",`}
        </Text>
        <Text
          position={[0, -0.3, 0.42]}
          fontSize={0.11}
          color="#fbbf24"
          anchorX="center"
          anchorY="middle"
        >
          {`  stack: ["React", "JS", "MERN"]`}
        </Text>
        <Text
          position={[0, -0.48, 0.42]}
          fontSize={0.12}
          color="#38bdf8"
          anchorX="center"
          anchorY="middle"
        >
          {`};`}
        </Text>
      </Float>
    </group>
  );
};

// CSS 3D Fallback Card (renders if WebGL context is unavailable or fails)
const CSS3DFallback: React.FC<{ mouseX: number; mouseY: number }> = ({ mouseX, mouseY }) => {
  return (
    <div 
      className="relative w-full max-w-md h-80 rounded-2xl glass-panel p-6 flex flex-col justify-between border border-cyan-500/30 shadow-[0_0_50px_rgba(56,189,248,0.2)] transition-transform duration-200"
      style={{
        transform: `perspective(1000px) rotateY(${mouseX * 15}deg) rotateX(${-mouseY * 15}deg)`
      }}
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
        </div>
        <span className="text-xs font-mono text-cyan-400">thiyagesh/workspace</span>
      </div>

      <div className="font-mono text-sm space-y-2 py-4">
        <div className="text-purple-400">
          <span className="text-cyan-400">const</span> developer = &#123;
        </div>
        <div className="pl-6 text-slate-300">
          name: <span className="text-emerald-400">"Thiyagesh"</span>,
        </div>
        <div className="pl-6 text-slate-300">
          role: <span className="text-emerald-400">"Web Developer"</span>,
        </div>
        <div className="pl-6 text-slate-300">
          education: <span className="text-amber-300">"B.Tech AI & Data Science"</span>,
        </div>
        <div className="pl-6 text-slate-300">
          stack: [<span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"JavaScript"</span>, <span className="text-cyan-300">"Firebase"</span>, <span className="text-cyan-300">"Node"</span>],
        </div>
        <div className="text-purple-400">&#125;;</div>
      </div>

      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
        <span className="text-emerald-400 flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          SYSTEM_ONLINE
        </span>
        <span className="font-mono text-cyan-400/80">BUILD_SUCCESSFUL</span>
      </div>
    </div>
  );
};

export const Hero3DScene: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [webGLError, setWebGLError] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth) * 2 - 1,
        y: -(e.clientY / innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[520px] flex items-center justify-center">
      {!webGLError ? (
        <Canvas
          camera={{ position: [0, 0, 4.8], fov: 45 }}
          onError={() => setWebGLError(true)}
          className="w-full h-full"
        >
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#38bdf8" />
          <pointLight position={[-10, -10, -10]} intensity={1.2} color="#a855f7" />
          <React.Suspense fallback={null}>
            <FloatingDeveloperCube mouseX={mousePos.x} mouseY={mousePos.y} />
          </React.Suspense>
          <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.8} minPolarAngle={Math.PI / 2.2} />
        </Canvas>
      ) : (
        <CSS3DFallback mouseX={mousePos.x} mouseY={mousePos.y} />
      )}
    </div>
  );
};
