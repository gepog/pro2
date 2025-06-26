import React from 'react';
import { Movie } from '../types';

interface HeroProps {
  movie: Movie;
  onPlay: (movie: Movie) => void;
  onAddToList: (movie: Movie) => void;
  onMoreInfo: (movie: Movie) => void;
  myList: string[];
}

export const Hero: React.FC<HeroProps> = ({ movie, onPlay, onAddToList, onMoreInfo, myList }) => {
  return (
    <div className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <div style={{padding:'56.25% 0 0 0', position:'relative', height: '100%'}}>
          {/* Note: Vimeo player URLs don't work with video tags. You need either:
              1. A direct video file URL (like .mp4, .webm, etc.)
              2. Keep using iframe for Vimeo embeds
              
              If you have a direct video file, replace the src below */}
          <video 
            autoPlay
            loop
            muted
            playsInline
            style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', objectFit:'cover'}}
            title="Main_page_video"
          >
            {/* You would need a direct video file URL here, like: */}
            {/* <source src="your-video-file.mp4" type="video/mp4" /> */}
            <source src="/path/to/your/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8, 25, 50, 0.8), rgba(8, 25, 50, 0.4), transparent)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8, 25, 50, 0.6), transparent, transparent)' }} />
      </div>

      <div className="relative z-10 px-4 md:px-8 max-w-2xl">
        {/* Hero content can be added here if needed */}
      </div>
    </div>
  );
};