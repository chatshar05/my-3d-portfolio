import { Canvas } from '@react-three/fiber';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative w-full bg-black text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* Fixed 3D Background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black via-slate-900 to-black">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Background3D />
        </Canvas>
      </div>

      {/* Scrollable DOM Foreground */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
