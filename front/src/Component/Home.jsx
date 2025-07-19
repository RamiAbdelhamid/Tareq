import React, { useEffect, useState } from 'react';
import hero from '../assets/hero.png';

export default function Home() {
  const [reveal, setReveal] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [zoomHero, setZoomHero] = useState(false);

  useEffect(() => {
    setTimeout(() => setReveal(true), 100);
    setTimeout(() => setShowTitle(true), 1200);
    setTimeout(() => setShowSubtitle(true), 1800);
    setTimeout(() => setZoomHero(true), 200); // يبدأ الزوم بعد 200ms
  }, []);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-center relative overflow-hidden">
      
      {/* Hero Background مع Zoom بطيء (10s) */}
      <div
        className={`absolute inset-0 z-0 transition-transform duration-[20000ms] ease-out
          ${zoomHero ? 'scale-120' : 'scale-100'}`}
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Reveal Overlay */}
      <div
        className={`absolute inset-0 z-10 bg-white origin-center transition-transform duration-[2000ms] ease-in-out
          ${reveal ? 'scale-y-0' : 'scale-y-100'}`}
        style={{ transformOrigin: 'center' }}
      />

      {/* Text & Button */}
      <div className="relative z-20 flex  flex-col items-start justify-center h-full w-full + pl-8 md:pl-20 mt-20 md:mt-70">
        
        
      <p
    className={`text-sm mb-5 tracking-widest text-white mb-2 transition-all duration-700 text-left
      ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
    style={{
      fontFamily: "'Graphik', 'Futura', 'Futura Light', Arial, sans-serif",
      fontWeight: 300,
      letterSpacing: '0.1em'
    }}
  >
    INTERIOR + ARCHITECTURE
  </p>

        <h1
          className={`text-6xl font-normal text-white drop-shadow-lg mb-4 transition-all duration-700 text-left
            ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ fontFamily: "Futura, 'Futura Light', Arial, sans-serif", fontWeight: 50 }}
        >
          TAREQ SHADEED DESIGN
        </h1>
        <p
          className={`text-2xl mb-10 text-white drop-shadow transition-all duration-700 text-left
            ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ fontFamily: "Futura, 'Futura Light', Arial, sans-serif", fontWeight: 400 }}
        >
          Architecture & Design Studio
        </p>

        <button
          className={`group relative px-12 py-4 bg-transparent text-white font-light text-lg tracking-widest transition-all duration-500 hover:bg-white hover:text-black overflow-hidden
            ${showSubtitle ? 'animated-once-border' : ''}`}
        >
          <span className="relative z-10">READ MORE</span>
          <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </button>
      </div>
    </div>
  );
}
