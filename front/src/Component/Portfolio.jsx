import React, { useState, useRef, useEffect } from 'react';
import img1 from '../assets/garden/1.jpeg';
import img2 from '../assets/garden/2.jpeg';
import img3 from '../assets/garden/3.jpeg';
import img4 from '../assets/garden/4.jpeg';
import img5 from '../assets/garden/5.jpeg';

const gardenImages = [img1, img2, img3, img4, img5];

export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'GARDEN RESIDENCE',
      type: 'RESIDENTIAL',
      year: '2024',
      location: 'California, USA',
      description: 'A harmonious blend of modern architecture and natural landscape design, creating seamless indoor-outdoor living.',
      images: gardenImages,
      cover: gardenImages[0],
      area: '2,500 sq ft',
      status: 'COMPLETED'
    },
    {
      id: 2,
      title: 'URBAN LOFT',
      type: 'RESIDENTIAL',
      year: '2023',
      location: 'New York, USA',
      description: 'Industrial meets contemporary in this transformed warehouse space.',
      images: gardenImages,
      cover: gardenImages[1],
      area: '1,800 sq ft',
      status: 'COMPLETED'
    },
    {
      id: 3,
      title: 'CORPORATE TOWER',
      type: 'COMMERCIAL',
      year: '2024',
      location: 'London, UK',
      description: 'Sustainable office design with emphasis on natural light and employee wellness.',
      images: gardenImages,
      cover: gardenImages[2],
      area: '15,000 sq ft',
      status: 'IN PROGRESS'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (projectIdx, imgIdx = 0) => {
    setSelectedProject(projectIdx);
    setModalIndex(imgIdx);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  const nextImg = () => setModalIndex((i) => (i + 1) % projects[selectedProject].images.length);
  const prevImg = () => setModalIndex((i) => (i - 1 + projects[selectedProject].images.length) % projects[selectedProject].images.length);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-2xl font-light tracking-widest">LOADING...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="px-6 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-thin text-white tracking-widest mb-6">
          PORTFOLIO
        </h1>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
        <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
          Showcasing innovative design solutions that redefine spaces and experiences
        </p>
      </div>

      {/* Projects Grid */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => openModal(idx)}
              >
                <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 h-[500px]">
                  {/* Project Image */}
                  <div className="relative h-[300px] overflow-hidden">
                    <img
                      src={project.cover}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-light tracking-wide ${
                        project.status === 'COMPLETED' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
                        'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6 h-[200px] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/60 text-sm font-light tracking-wide">{project.type}</span>
                        <span className="text-white/60 text-sm font-light">{project.year}</span>
                      </div>
                      <h3 className="text-white text-xl font-light tracking-wide mb-3 group-hover:text-white/80 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between text-white/50 text-xs">
                      <span>{project.location}</span>
                      <span>{project.area}</span>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-sm font-light tracking-widest">VIEW PROJECT</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Gallery */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-6xl mx-4 bg-black/80 backdrop-blur-md border border-white/20 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <div>
                <h3 className="text-white text-2xl font-light tracking-wide">
                  {projects[selectedProject].title}
                </h3>
                <p className="text-white/60 text-sm mt-1">
                  {projects[selectedProject].type} • {projects[selectedProject].year}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="text-white/60 hover:text-white text-2xl transition-colors"
              >
                ×
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-2/3 relative">
                <img
                  src={projects[selectedProject].images[modalIndex]}
                  alt={`${projects[selectedProject].title} ${modalIndex + 1}`}
                  className="w-full h-[60vh] lg:h-[70vh] object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImg}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/70 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-xl font-light"
                >
                  ←
                </button>
                <button
                  onClick={nextImg}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/70 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-xl font-light"
                >
                  →
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 text-white/80 text-sm">
                  {modalIndex + 1} / {projects[selectedProject].images.length}
                </div>
              </div>
              
              {/* Project Details */}
              <div className="lg:w-1/3 p-6 bg-black/60">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white text-sm font-light tracking-wide mb-2 uppercase">Description</h4>
                    <p className="text-white/80 leading-relaxed">
                      {projects[selectedProject].description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-white/60 text-sm">Location:</span>
                      <span className="text-white ml-2">{projects[selectedProject].location}</span>
                    </div>
                    <div>
                      <span className="text-white/60 text-sm">Area:</span>
                      <span className="text-white ml-2">{projects[selectedProject].area}</span>
                    </div>
                    <div>
                      <span className="text-white/60 text-sm">Status:</span>
                      <span className="text-white ml-2">{projects[selectedProject].status}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}