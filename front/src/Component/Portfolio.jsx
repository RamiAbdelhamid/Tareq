// import { useState, useRef } from 'react';

// const projects = [
//   {
//     title: 'SEYMOUR WALK',
//     category: 'RESIDENTIAL',
//     image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&q=80'
//   },
//   {
//     title: 'ALEXANDER PLACE',
//     category: 'RESIDENTIAL',
//     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80'
//   },
//   {
//     title: 'NO. 40',
//     category: 'RESIDENTIAL',
//     image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&q=80'
//   },
//   {
//     title: 'WESTMINSTER LOFT',
//     category: 'RESIDENTIAL',
//     image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80'
//   },
//   {
//     title: 'BROOKLYN HEIGHTS',
//     category: 'RESIDENTIAL',
//     image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop&q=80'
//   }
// ];

// export default function ArchitecturalSlider() {
//   const [currentIndex, setCurrentIndex] = useState(1); // Start at index 1 to show multiple projects
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [currentX, setCurrentX] = useState(0);
//   const [dragOffset, setDragOffset] = useState(0);
//   const containerRef = useRef();

//   const slideWidth = 600; // Width of each slide
//   const visibleSlides = 4; // Number of slides to show at once

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStartX(e.clientX);
//     setCurrentX(e.clientX);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
    
//     setCurrentX(e.clientX);
//     const diff = e.clientX - startX;
//     setDragOffset(diff);
//   };

//   const handleMouseUp = () => {
//     if (!isDragging) return;
    
//     const diff = currentX - startX;
//     const threshold = 80;

//     if (Math.abs(diff) > threshold) {
//       if (diff < 0 && currentIndex < projects.length - 1) {
//         setCurrentIndex(currentIndex + 1);
//       } else if (diff > 0 && currentIndex > 0) {
//         setCurrentIndex(currentIndex - 1);
//       }
//     }
    
//     setIsDragging(false);
//     setDragOffset(0);
//   };

//   const handleTouchStart = (e) => {
//     setIsDragging(true);
//     setStartX(e.touches[0].clientX);
//     setCurrentX(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     if (!isDragging) return;
    
//     setCurrentX(e.touches[0].clientX);
//     const diff = e.touches[0].clientX - startX;
//     setDragOffset(diff);
//   };

//   const handleTouchEnd = () => {
//     handleMouseUp();
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="bg-[#1a1a1a] min-h-screen flex flex-col justify-center overflow-hidden">


//       {/* Main slider container */}
//       <div className="relative max-w-10xl mx-auto w-full h-96 flex items-center mt-20">
//         <div
//           className="flex cursor-grab active:cursor-grabbing select-none pl-0"
//           onMouseDown={handleMouseDown}
//           onMouseMove={handleMouseMove}
//           onMouseUp={handleMouseUp}
//           onMouseLeave={handleMouseUp}
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//           style={{
//             transform: `translateX(calc(50% - ${slideWidth / 2}px - ${currentIndex * slideWidth}px + ${dragOffset}px))`,
//             transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
//           }}
//         >
//           {projects.map((project, index) => {
//             const isActive = index === currentIndex;
            
//             return (
//               <div
//                 key={index}
//                 className="flex-shrink-0 px-4"
//                 style={{ width: `${slideWidth}px` }}
//               >
//                 <div className="relative">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="object-cover transition-all duration-500"
//                     style={{ width: '721px', height: '280px' }}                    draggable="false"
//                   />
                  
//                   <div className="mt-6">
//                     <h2 className="text-sm tracking-[0.3em] uppercase text-white font-normal">
//                       {project.title}
//                     </h2>
//                     <p className="text-xs mt-1 tracking-[0.2em] uppercase text-gray-400">
//                       {project.category}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Progress bar */}
//       <div className="w-80 h-px bg-gray-700 relative mx-auto mt-16">
//         <div
//           className="h-full bg-white transition-all duration-500 ease-out"
//           style={{
//             width: `${((currentIndex + 1) / projects.length) * 100}%`
//           }}
//         ></div>
//       </div>

//       {/* Dot navigation */}
//       <div className="flex space-x-2 mt-8 justify-center">
//         {projects.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
//               index === currentIndex
//                 ? 'bg-white'
//                 : 'bg-gray-600 hover:bg-gray-400'
//             }`}
//           />
//         ))}
//       </div>

//       {/* Project counter */}
//       <div className="absolute bottom-8 right-8 text-gray-500 text-xs tracking-wider">
//         <span className="text-white">{String(currentIndex + 1).padStart(2, '0')}</span>
//         <span className="mx-1">/</span>
//         <span>{String(projects.length).padStart(2, '0')}</span>
//       </div>
//     </div>
//   );
// }

import { useState, useRef, useEffect } from 'react';

const projects = [
  {
    title: 'SEYMOUR WALK',
    category: 'RESIDENTIAL',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&q=80',
    description: 'Modern residential design with contemporary finishes and open-plan living spaces.'
  },
  {
    title: 'ALEXANDER PLACE',
    category: 'RESIDENTIAL',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80',
    description: 'Elegant townhouse featuring traditional architecture with modern amenities.'
  },
  {
    title: 'NO. 40',
    category: 'RESIDENTIAL',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&q=80',
    description: 'Luxury apartment complex with innovative spatial design and premium materials.'
  },
  {
    title: 'WESTMINSTER LOFT',
    category: 'RESIDENTIAL',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80',
    description: 'Industrial loft conversion featuring exposed brick and high ceilings.'
  },
  {
    title: 'BROOKLYN HEIGHTS',
    category: 'RESIDENTIAL',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop&q=80',
    description: 'Waterfront penthouse with panoramic views and sophisticated interiors.'
  }
];

export default function ArchitecturalSlider() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [reveal, setReveal] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [zoomHero, setZoomHero] = useState(false);
  const containerRef = useRef();
  const detailsRef = useRef(null);
  const dragEnded = useRef(false);
  const slideWidth = 600;

  // Full-screen viewer animation effects
  useEffect(() => {
    if (selectedProject) {
      setTimeout(() => setReveal(true), 100);
      setTimeout(() => setShowTitle(true), 1200);
      setTimeout(() => setShowSubtitle(true), 1800);
      setTimeout(() => setZoomHero(true), 200);
    } else {
      setReveal(false);
      setShowTitle(false);
      setShowSubtitle(false);
      setZoomHero(false);
    }
  }, [selectedProject]);

  const handleMouseDown = (e) => {
    setIsDragging(false); // Reset first
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (startX === 0) return;
    
    const diff = Math.abs(e.clientX - startX);
    if (diff > 5 && !isDragging) {
      setIsDragging(true);
    }
    
    if (isDragging) {
      setCurrentX(e.clientX);
      setDragOffset(e.clientX - startX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      const diff = currentX - startX;
      const threshold = 80;
  
      if (Math.abs(diff) > threshold) {
        if (diff < 0 && currentIndex < projects.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else if (diff > 0 && currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      }
      
      dragEnded.current = true;
      setTimeout(() => {
        dragEnded.current = false;
      }, 100);
    }
    
    setIsDragging(false);
    setDragOffset(0);
    setStartX(0);
    setCurrentX(0);
  };

  const handleTouchStart = (e) => {
    setIsDragging(false);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startX === 0) return;
    
    const diff = Math.abs(e.touches[0].clientX - startX);
    if (diff > 5 && !isDragging) {
      setIsDragging(true);
    }
    
    if (isDragging) {
      setCurrentX(e.touches[0].clientX);
      setDragOffset(e.touches[0].clientX - startX);
    }
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleImageClick = (project, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // إذا كان هناك سحب مؤخراً، لا تفتح الصورة
    if (isDragging || dragEnded.current) {
      return;
    }
    
    setSelectedProject(project);
    
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: 'auto' });
    }, 100);
  };

  const closeFullScreen = () => {
    setSelectedProject(null);
  };

  // Handle escape key to close full-screen viewer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        closeFullScreen();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <>
      <div className="bg-[#1a1a1a] min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Main slider container */}
        <div className="relative max-w-10xl mx-auto w-full h-96 flex items-center mt-20">
          <div
            className="flex cursor-grab active:cursor-grabbing select-none pl-0"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              transform: `translateX(calc(50% - ${slideWidth / 2}px - ${currentIndex * slideWidth}px + ${dragOffset}px))`,
              transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            {projects.map((project, index) => {
              const isActive = index === currentIndex;
              
              return (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${slideWidth}px` }}
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover transition-all duration-500 cursor-pointer hover:brightness-110"
                      style={{ width: '721px', height: '280px' }}
                      draggable="false"
                      onClick={(e) => handleImageClick(project, e)}
                      onMouseDown={(e) => e.preventDefault()}
                    />
                    
                    <div className="mt-6">
                      <h2 className="text-sm tracking-[0.3em] uppercase text-white font-normal">
                        {project.title}
                      </h2>
                      <p className="text-xs mt-1 tracking-[0.2em] uppercase text-gray-400">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-80 h-px bg-gray-700 relative mx-auto mt-16">
          <div
            className="h-full bg-white transition-all duration-500 ease-out"
            style={{
              width: `${((currentIndex + 1) / projects.length) * 100}%`
            }}
          ></div>
        </div>

        {/* Dot navigation */}
        <div className="flex space-x-2 mt-8 justify-center">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white'
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Project counter */}
        <div className="absolute bottom-8 right-8 text-gray-500 text-xs tracking-wider">
          <span className="text-white">{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="mx-1">/</span>
          <span>{String(projects.length).padStart(2, '0')}</span>
        </div>
      </div>



      

      {/* Full-screen image viewer */}
      {selectedProject && (
        <div ref={detailsRef} className="fixed inset-0  h-screen w-full flex flex-col justify-center items-center bg-center relative overflow-hidden">
          
          {/* Hero Background with slow zoom */}
          <div
            className={`absolute inset-0 z-0 transition-transform duration-[20000ms] ease-out
              ${zoomHero ? 'scale-110' : 'scale-100'}`}
            style={{
              backgroundImage: `url(${selectedProject.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Reveal Overlay */}
          <div
            className={`absolute inset-0 z-10 bg-white origin-center transition-transform duration-[2000ms] ease-in-out
              ${reveal ? 'scale-y-0' : 'scale-y-100'}`}
            style={{ transformOrigin: 'center' }}
          />

          {/* Close button */}
          {/* <button
            onClick={closeFullScreen}
            className="absolute top-8 right-8 z-30 w-12 h-12 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 rounded-full"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button> */}

          {/* Text & Button */}
          <div className="relative z-20 flex flex-col items-start justify-center h-full w-full pl-8 md:pl-20 mt-20 md:mt-70">
            
            <p
              className={`text-sm mb-5 tracking-widest text-white mb-2 transition-all duration-700 text-left
                ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
              style={{
                fontFamily: "'Graphik', 'Futura', 'Futura Light', Arial, sans-serif",
                fontWeight: 300,
                letterSpacing: '0.1em'
              }}
            >
              {selectedProject.category}
            </p>

            <h1
              className={`text-6xl font-normal text-white drop-shadow-lg mb-4 transition-all duration-700 text-left
                ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ fontFamily: "Futura, 'Futura Light', Arial, sans-serif", fontWeight: 50 }}
            >
              {selectedProject.title}
            </h1>
            
            <p
              className={`text-xl mb-10 text-white drop-shadow transition-all duration-700 text-left max-w-2xl
                ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ fontFamily: "Futura, 'Futura Light', Arial, sans-serif", fontWeight: 400 }}
            >
              {selectedProject.description}
            </p>

            <div className={`flex gap-4 ${showSubtitle ? 'animated-once-border' : ''}`}>
              <button
                className="group relative px-12 py-4 bg-transparent text-white font-light text-lg tracking-widest transition-all duration-500 hover:bg-white hover:text-black overflow-hidden border border-white/30"
              >
                <span className="relative z-10">VIEW PROJECT</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
              
              <button
                onClick={closeFullScreen}
                className="group relative px-12 py-4 bg-white/10 text-white font-light text-lg tracking-widest transition-all duration-500 hover:bg-white hover:text-black overflow-hidden backdrop-blur-sm"
              >
                <span className="relative z-10">BACK TO GALLERY</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .animated-once-border {
          animation: drawBorder 1s ease-out forwards;
        }

        @keyframes drawBorder {
          0% {
            border: 2px solid transparent;
          }
          100% {
            border: 2px solid rgba(255, 255, 255, 0.3);
          }
        }
      `}</style>
    </>
  );
}

