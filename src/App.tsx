
import Hero from './components/Hero';
import About from './components/About';
import GithubStats from './components/GithubStats';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Canvas3D from './components/Canvas3D';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-[#030305] text-white min-h-screen selection:bg-cyan-500/30 font-sans relative overflow-x-hidden">
      {/* 3D Background Engine */}
      <Canvas3D />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transform-origin-0 z-50"
        style={{ scaleX }}
      />
      
      {/* Background grain/noise effect */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <Hero />
      <About />
      <GithubStats />
      <Experience />
      <Projects />
      <Certificates />
      
      <footer className="py-8 text-center text-gray-500 border-t border-white/5 mt-20 relative z-10">
        <p>© {new Date().getFullYear()} Rahul Kumar. Built with React & Three.js</p>
      </footer>
    </div>
  );
}

export default App;
