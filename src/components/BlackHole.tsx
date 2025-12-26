'use client';

interface BlackHoleProps {
  onLoad?: () => void;
}

export default function BlackHole({ onLoad }: BlackHoleProps) {
  const handleVideoLoad = () => {
    if (onLoad) {
      onLoad();
    }
  };

  return (
    <div className="blackhole-box">
      <video 
        loop 
        autoPlay 
        muted 
        playsInline 
        src="/assets/blackhole.mp4"
        onLoadedData={handleVideoLoad}
        onCanPlayThrough={handleVideoLoad}
      />
    </div>
  );
}
