"use client";

import { Float, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const AnimatedSphere = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime();
            meshRef.current.rotation.x = t * 0.1;
            meshRef.current.rotation.y = t * 0.15;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere args={[1, 100, 100]} scale={2.4} ref={meshRef}>
                <MeshDistortMaterial
                    color="#00d4ff"
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                    roughness={0.2}
                    metalness={0.9}
                    wireframe
                />
            </Sphere>
        </Float>
    );
};

export const Bg: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight
                    position={[10, 10, 10]}
                    intensity={1}
                    color="#39ff14"
                />
                <pointLight
                    position={[-10, -10, -10]}
                    intensity={0.5}
                    color="#00d4ff"
                />
                <AnimatedSphere />
                <Stars
                    radius={100}
                    depth={50}
                    count={5000}
                    factor={4}
                    saturation={0}
                    fade
                    speed={1}
                />
            </Canvas>
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-dark/50 to-dark pointer-events-none"></div>
        </div>
    );
};
