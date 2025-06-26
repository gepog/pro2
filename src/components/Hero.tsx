import React from 'react';
import { Play, Plus, Info, X } from 'lucide-react';
import { Movie } from '../types';

interface HeroProps {
  movie: Movie;
  onPlay: (movie: Movie) => void;
  onAddToList: (movie: Movie) => void;
  onMoreInfo: (movie: Movie) => void;
  myList: string[];
}

export const Hero: React.FC<HeroProps> = ({ movie, onPlay, onAddToList, onMoreInfo, myList }) => {
  const isInMyList = myList.includes(movie.id);

  return (
    <div className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8, 25, 50, 0.8), rgba(8, 25, 50, 0.4), transparent)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8, 25, 50, 0.6), transparent, transparent)' }} />
      </div>

      <div className="relative z-10 px-4 md:px-8 max-w-2xl">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          {movie.title}
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
          {movie.description}
        </p>

        <div className="flex items-center space-x-4 mb-8">
          <span className="text-white/80 text-sm">{movie.year}</span>
          <span className="text-white/80 text-sm">{movie.rating}</span>
          <span className="text-white/80 text-sm">{movie.duration}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => onPlay(movie)}
            className="flex items-center justify-center space-x-3 bg-white text-black px-8 py-4 rounded-md hover:bg-white/90 transition-colors font-semibold text-lg"
          >
            <Play size={24} fill="currentColor" />
            <span>Play</span>
          </button>

          <button
            onClick={() => onAddToList(movie)}
            className="flex items-center justify-center space-x-3 text-white px-8 py-4 rounded-md font-semibold text-lg backdrop-blur-sm transition-all duration-200"
            style={{ 
              backgroundColor: isInMyList 
                ? 'rgba(239, 68, 68, 0.8)' 
                : 'rgba(221, 184, 112, 0.8)'
            }}
            onMouseEnter={(e) => {
              if (isInMyList) {
                e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 1)';
              } else {
                e.currentTarget.style.backgroundColor = 'rgba(221, 184, 112, 1)';
              }
            }}
            onMouseLeave={(e) => {
              if (isInMyList) {
                e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.8)';
              } else {
                e.currentTarget.style.backgroundColor = 'rgba(221, 184, 112, 0.8)';
              }
            }}
          >
            {isInMyList ? (
              <X size={24} />
            ) : (
              <Plus size={24} />
            )}
            <span>{isInMyList ? 'Remove from My List' : 'My List'}</span>
          </button>

          <button
            onClick={() => onMoreInfo(movie)}
            className="flex items-center justify-center space-x-3 bg-gray-700/80 text-white px-8 py-4 rounded-md hover:bg-gray-700 transition-colors font-semibold text-lg backdrop-blur-sm"
          >
            <Info size={24} />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};