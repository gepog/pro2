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
        <iframe 
          src="https://player.vimeo.com/video/1096572882?h=cda6c0360d&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1" 
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
          className="w-full h-full object-cover"
          style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
          title="Main_page_video"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8, 25, 50, 0.8), rgba(8, 25, 50, 0.4), transparent)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8, 25, 50, 0.6), transparent, transparent)' }} />
      </div>

      <div className="relative z-10 px-4 md:px-8 max-w-2xl">
        {/* Hero content can be added here if needed */}
      </div>
    </div>
  );
};