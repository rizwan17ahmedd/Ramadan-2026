
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-8 md:mb-12 flex flex-col items-center safe-top pt-4">
      <div className="mb-4 relative group">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-yellow-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
        
        {/* Crescent Moon and Star Icon */}
        <svg 
          className="w-16 h-16 md:w-20 md:h-20 text-yellow-200 relative drop-shadow-[0_0_8px_rgba(253,224,71,0.6)]" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" 
            fill="currentColor" 
            className="animate-pulse"
          />
          <path 
            d="M19 5L19.35 5.85L20.2 6.2L19.35 6.55L19 7.4L18.65 6.55L17.8 6.2L18.65 5.85L19 5Z" 
            fill="white" 
            className="animate-bounce" 
            style={{ animationDuration: '4s' }}
          />
          <path 
            d="M15 2L15.4 3L16.4 3.4L15.4 3.8L15 4.8L14.6 3.8L13.6 3.4L14.6 3L15 2Z" 
            fill="white" 
            className="animate-bounce" 
            style={{ animationDuration: '3s', animationDelay: '1s' }}
          />
        </svg>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-amiri font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-100 via-yellow-100 to-emerald-100 px-2 drop-shadow-sm">
        Ramadan Mubarak
      </h1>
      
      <div className="flex items-center gap-3 mt-3">
        <span className="h-px w-6 bg-emerald-500/40"></span>
        <p className="text-emerald-300 text-sm md:text-base font-light tracking-[0.3em] uppercase">
          1447 AH • 2026 CE
        </p>
        <span className="h-px w-6 bg-emerald-500/40"></span>
      </div>
    </header>
  );
};

export default Header;
