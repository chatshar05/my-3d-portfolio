import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Physics, useSphere } from '@react-three/cannon';
import { Environment, Text, Billboard } from '@react-three/drei';
import { motion } from 'framer-motion';

const skills = [
  'React.js', 'Node.js', 'Express', 'MongoDB',
  'C++', 'Java', 'JavaScript', 'TypeScript',
  'HTML5', 'CSS3', 'Tailwind', 'Three.js',
  'Git', 'REST APIs', 'Socket.IO', 'GenAI',
  'Prompt Eng', 'DSA', 'Full Stack'
];

function Bubble({ word }: { word: string }) {
  // Bubbles vary slightly in size
  const radius = 1.2 + Math.random() * 0.4;
  
  const [ref, api] = useSphere(() => ({
    mass: 1,
    args: [radius],
    position: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 5],
    linearDamping: 0.6,
    angularDamping: 0.6,
  }));

  const pos = useRef([0, 0, 0]);
  useEffect(() => {
    const unsub = api.position.subscribe((v) => (pos.current = v));
    return () => unsub();
  }, [api]);

  useFrame(() => {
    // Attract towards the center
    api.applyForce(
      [-pos.current[0] * 2, -pos.current[1] * 2, -pos.current[2] * 2], 
      [0, 0, 0]
    );
  });

  return (
    // @ts-ignore
    <group ref={ref}>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshPhysicalMaterial 
          color="#e2e8f0"
          roughness={0.3}
          metalness={0.1}
          clearcoat={0.5}
          clearcoatRoughness={0.2}
        />
      </mesh>
      <Billboard>
        <Text 
          position={[0, 0, radius + 0.1]} // Move text slightly outside towards the camera
          fontSize={radius * 0.3} 
          color="#1e293b" // Very dark slate (looks like soft black)
          anchorX="center" 
          anchorY="middle"
          outlineWidth={0.01}
          outlineColor="#ffffff"
        >
          {word}
        </Text>
      </Billboard>
    </group>
  );
}

function Pointer() {
  const [ref, api] = useSphere(() => ({ type: 'Kinematic', args: [2.5], position: [0, 0, 0] }));
  
  useFrame((state) => {
    const x = (state.mouse.x * state.viewport.width) / 2;
    const y = (state.mouse.y * state.viewport.height) / 2;
    api.position.set(x, y, 0);
  });
  
  return (
    // @ts-ignore
    <mesh ref={ref}>
      <sphereGeometry args={[2.5, 16, 16]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.0} />
    </mesh>
  );
}

export default function Skills() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-24 z-10 max-w-7xl mx-auto cursor-crosshair">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full text-center z-20 mb-8"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-2xl">
          Technical <span className="text-indigo-400">Toolkit</span>
        </h2>
        <p className="text-slate-300 text-lg tracking-widest uppercase font-semibold">
          Interact with the physics environment
        </p>
      </motion.div>
      
      <div className="w-full h-[70vh] md:h-[85vh] relative z-10 bg-indigo-950/20 backdrop-blur-sm rounded-[3rem] border border-indigo-500/20 shadow-2xl overflow-hidden">
        <Canvas camera={{ position: [0, 0, 20], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1} castShadow />
          <Physics gravity={[0, 0, 0]} iterations={5}>
            <Pointer />
            {skills.map((skill) => (
              <Bubble key={skill} word={skill} />
            ))}
          </Physics>
          <Environment preset="city" />
        </Canvas>
      </div>
    </section>
  );
}
