"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function GlassOrb({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial backside samples={16} thickness={0.8} chromaticAberration={0.025} anisotropy={0.3} distortion={0.5} distortionScale={0.5} temporalDistortion={0.2} iridescence={1} iridescenceIOR={1.5} iridescenceThicknessRange={[0, 1400]} transmission={0.95} roughness={0.05} color="#a8c8ff" attenuationColor="#0066cc" attenuationDistance={0.5} />
      </mesh>
    </Float>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(100 * 3);
    for (let i = 0; i < 100; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });
  return (
    <points ref={particlesRef}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
      <pointsMaterial size={0.02} color="#0066cc" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function ThreeCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]} className="!absolute">
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[2, 2, 2]} intensity={0.5} color="#0066cc" distance={10} />
        <GlassOrb position={[1.5, 0.5, 0]} scale={0.8} />
        <GlassOrb position={[-1.2, -0.8, -1]} scale={0.5} />
        <GlassOrb position={[0.5, -1, 0.5]} scale={0.35} />
        <GlassOrb position={[-0.8, 1, -0.5]} scale={0.45} />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
