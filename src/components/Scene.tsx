import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useThree } from '@react-three/fiber';
import { useGLTF, useTexture, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

const Balloon = ({ position, color }: { position: [number, number, number], color: string }) => {
  const balloonRef = useRef<THREE.Group>();
  const initialY = position[1];

  useFrame((state) => {
    if (!balloonRef.current) return;
    // Floating animation
    balloonRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime) * 0.2;
    // Gentle swaying
    balloonRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <group ref={balloonRef} position={position}>
      {/* Balloon body */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhongMaterial color={color} />
      </mesh>
      {/* String */}
      <mesh position={[0, -0.7, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
    </group>
  );
};

const Balloons = () => {
  const colors = ['#FF69B4', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C'];
  
  return (
    <group>
      {colors.map((color, i) => {
        const angle = (i / colors.length) * Math.PI * 2;
        const radius = 4;
        return (
          <Balloon
            key={i}
            position={[
              Math.cos(angle) * radius,
              3 + Math.random(),
              Math.sin(angle) * radius
            ]}
            color={color}
          />
        );
      })}
    </group>
  );
};

const Cake = () => {
  const cakeRef = useRef<THREE.Group>();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (!cakeRef.current) return;
    
    // Base rotation
    cakeRef.current.rotation.y += 0.005;
    
    // Hover animation
    if (hovered) {
      cakeRef.current.position.y = -1 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
      cakeRef.current.scale.setScalar(1.1 + Math.sin(state.clock.elapsedTime * 4) * 0.05);
    } else {
      cakeRef.current.position.y += (-1 - cakeRef.current.position.y) * 0.1;
      cakeRef.current.scale.setScalar(1 + (1 - cakeRef.current.scale.x) * 0.1);
    }
  });

  return (
    <group
      ref={cakeRef}
      position={[0, -1, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Cake base */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[2, 2, 1, 32]} />
        <meshPhongMaterial color="#FFB6C1" />
      </mesh>
      
      {/* Cake top layer */}
      <mesh position={[0, 0.75, 0]}>
        <cylinderGeometry args={[1.5, 1.5, 0.5, 32]} />
        <meshPhongMaterial color="#FFC0CB" />
      </mesh>
      
      {/* Frosting details */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i / 16) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * 1.8,
              0.5,
              Math.sin(angle) * 1.8
            ]}
          >
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshPhongMaterial color="#FFF0F5" />
          </mesh>
        );
      })}
    </group>
  );
};

const Candles = () => {
  const candlesRef = useRef<THREE.Group>();
  
  useFrame((state) => {
    if (!candlesRef.current) return;
    candlesRef.current.children.forEach((candle, i) => {
      // Flame animation
      const flame = candle.children[1];
      flame.position.y = 1.2 + Math.sin(state.clock.elapsedTime * 10 + i) * 0.05;
      flame.intensity = 1 + Math.sin(state.clock.elapsedTime * 8 + i) * 0.3;
    });
  });

  return (
    <group ref={candlesRef}>
      {Array.from({ length: 5 }).map((_, i) => {
        const angle = ((i / 5) * Math.PI * 2) + Math.PI / 6;
        const radius = 1;
        return (
          <group
            key={i}
            position={[
              Math.cos(angle) * radius,
              0,
              Math.sin(angle) * radius
            ]}
          >
            {/* Candle body */}
            <mesh position={[0, 0.8, 0]}>
              <cylinderGeometry args={[0.05, 0.05, 0.4, 12]} />
              <meshPhongMaterial color="#FFFFFF" />
            </mesh>
            {/* Flame */}
            <pointLight
              position={[0, 1.2, 0]}
              color="#FFA500"
              intensity={1}
              distance={2}
            />
          </group>
        );
      })}
    </group>
  );
};

const BeatingHeart = () => {
  const heartRef = useRef<THREE.Group>();
  
  useFrame((state) => {
    if (!heartRef.current) return;
    const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    heartRef.current.scale.set(scale, scale, scale);
  });

  return (
    <group ref={heartRef} position={[0, 2, 0]}>
      {/* Heart shape created with merged spheres */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhongMaterial color="#FF69B4" />
      </mesh>
      <mesh position={[0.5, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhongMaterial color="#FF69B4" />
      </mesh>
      <mesh position={[0.25, -0.5, 0]}>
        <coneGeometry args={[0.7, 1, 32]} />
        <meshPhongMaterial color="#FF69B4" />
      </mesh>
    </group>
  );
};

const Particles = ({ count = 100 }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const { viewport, mouse } = useThree();

  const particles = Array.from({ length: count }, () => ({
    position: [
      Math.random() * 10 - 5,
      Math.random() * 10 - 5,
      Math.random() * 10 - 5
    ],
    scale: Math.random() * 0.2 + 0.1,
    speed: Math.random() * 0.05 + 0.01
  }));

  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    
    particles.forEach(({ position, scale, speed }, i) => {
      const matrix = new THREE.Matrix4();
      
      const x = position[0] + Math.sin(time * speed + i) * 0.2;
      const y = position[1] + Math.cos(time * speed + i) * 0.2;
      const z = position[2] + Math.sin(time * speed + i * 0.5) * 0.2;
      
      matrix.setPosition(x, y, z);
      matrix.scale(new THREE.Vector3(scale, scale, scale));
      
      mesh.current.setMatrixAt(i, matrix);
    });
    
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshBasicMaterial color="#FFBD80" transparent opacity={0.6} />
    </instancedMesh>
  );
};

const FloatingPlanes = ({ count = 20 }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  const planes = Array.from({ length: count }, () => ({
    position: [
      Math.random() * 20 - 10,
      Math.random() * 20 - 10,
      Math.random() * 10 - 20
    ],
    rotation: [
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    ],
    scale: Math.random() * 2 + 0.5,
    speed: Math.random() * 0.02 + 0.01
  }));

  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    
    planes.forEach(({ position, rotation, scale, speed }, i) => {
      const matrix = new THREE.Matrix4();
      
      const x = position[0];
      const y = position[1] + Math.sin(time * speed + i) * 0.3;
      const z = position[2];
      
      matrix.setPosition(x, y, z);
      
      const rotationMatrix = new THREE.Matrix4().makeRotationFromEuler(
        new THREE.Euler(
          rotation[0] + time * speed * 0.2,
          rotation[1] + time * speed * 0.1,
          rotation[2]
        )
      );
      
      matrix.multiply(rotationMatrix);
      matrix.scale(new THREE.Vector3(scale, scale, scale));
      
      mesh.current.setMatrixAt(i, matrix);
    });
    
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial color="#FFD700" transparent opacity={0.2} side={THREE.DoubleSide} />
    </instancedMesh>
  );
};

const Scene: React.FC = () => {
  const { camera } = useThree();
  const cameraRef = useRef<THREE.PerspectiveCamera>();

  useFrame(({ mouse, viewport }) => {
    if (cameraRef.current) {
      cameraRef.current.position.x += (mouse.x * viewport.width / 10 - cameraRef.current.position.x) * 0.02;
      cameraRef.current.position.y += (mouse.y * viewport.height / 10 - cameraRef.current.position.y) * 0.02;
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 0, 10]} fov={50} />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      
      <Cake />
      <Candles />
      <BeatingHeart />
      <Balloons />
      <Particles count={150} />
      <FloatingPlanes count={20} />
      
      <Environment preset="sunset" />
      
      <mesh position={[0, 0, -10]}>
        <planeGeometry args={[40, 40]} />
        <meshBasicMaterial color="#FFF0E5" />
      </mesh>
    </>
  );
};

export default Scene;