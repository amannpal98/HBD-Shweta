import React, { useEffect, useRef } from 'react';
import { Howl } from 'howler';

interface AudioControllerProps {
  muted: boolean;
}

const AudioController: React.FC<AudioControllerProps> = ({ muted }) => {
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    // Birthday music URL - replace with an actual royalty-free birthday music
    const musicUrl = '/music.mp3';
    
    soundRef.current = new Howl({
      src: [musicUrl],
      loop: true,
      volume: 0.5,
      autoplay: false,
    });

    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, []);

  useEffect(() => {
    if (soundRef.current) {
      if (muted) {
        soundRef.current.pause();
      } else {
        soundRef.current.play();
      }
    }
  }, [muted]);

  return null; // This component doesn't render anything
};

export default AudioController;