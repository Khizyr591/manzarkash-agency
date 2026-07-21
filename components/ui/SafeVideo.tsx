"use client";

import { useEffect, useRef } from "react";

interface SafeVideoProps {
  src: string;
  className?: string;
  poster?: string;
  controls?: boolean;
}

export default function SafeVideo({ src, className, poster, controls = false }: SafeVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.muted = true;
      video.defaultMuted = true;

      const playVideo = () => {
        video.play().catch(() => {
          // Ignore autoplay restriction failures
        });
      };

      playVideo();

      video.addEventListener("loadedmetadata", playVideo);
      return () => {
        video.removeEventListener("loadedmetadata", playVideo);
      };
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src.replace(/ /g, "%20")}
      className={className}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      controls={controls}
    />
  );
}
