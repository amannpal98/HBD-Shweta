import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import MessageSection from './components/MessageSection';
import TimelineSection from './components/TimelineSection';
import Footer from './components/Footer';
import AudioController from './components/AudioController';
import LoadingScreen from './components/LoadingScreen';
import Scene from './components/Scene';
import CursorEffect from './components/CursorEffect';

function App() {
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
    setMuted(!muted);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative overflow-x-hidden">
      <CursorEffect />
      <AudioController muted={muted} />
      
      <div className="canvas-container">
        <Canvas shadows>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="fixed bottom-4 right-4 z-50">
        <button 
          onClick={toggleMute}
          className="bg-peach-medium p-3 rounded-full shadow-lg hover:bg-peach-dark transition-all duration-300"
        >
          {muted ? 
            <VolumeX className="text-white" size={20} /> : 
            <Volume2 className="text-white" size={20} />
          }
        </button>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <MessageSection />
          <GallerySection />
          <TimelineSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;