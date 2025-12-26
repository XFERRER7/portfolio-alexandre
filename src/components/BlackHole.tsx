'use client';

import { useRef, useEffect } from 'react';

interface BlackHoleProps {
  onLoad?: () => void;
}

export default function BlackHole({ onLoad }: BlackHoleProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasCalledOnLoad = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoReady = () => {
      if (!hasCalledOnLoad.current && onLoad) {
        hasCalledOnLoad.current = true;
        onLoad();
      }
    };

    // Se o vídeo já estiver pronto (cache)
    if (video.readyState >= 3) {
      handleVideoReady();
    }

    video.addEventListener('loadeddata', handleVideoReady);
    video.addEventListener('canplay', handleVideoReady);

    return () => {
      video.removeEventListener('loadeddata', handleVideoReady);
      video.removeEventListener('canplay', handleVideoReady);
    };
  }, [onLoad]);

  return (
    <div className="blackhole-box">
      <video 
        ref={videoRef}
        loop 
        autoPlay 
        muted 
        playsInline 
        src="/assets/blackhole.mp4"
      />
    </div>
  );
}
