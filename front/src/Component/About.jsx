import React, { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      name: 'SARAH MARTINEZ',
      role: 'PRINCIPAL ARCHITECT',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      bio: 'With over 15 years of experience in sustainable architecture, Sarah leads our design philosophy with a focus on environmental consciousness and innovative spatial solutions.'
    },
    {
      name: 'JAMES CHEN',
      role: 'DESIGN DIRECTOR',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      bio: 'James brings a unique perspective to contemporary design, specializing in the integration of technology and human-centered spaces that enhance daily experiences.'
    },
    {
      name: 'ELENA ROSSI',
      role: 'SENIOR DESIGNER',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      bio: 'Elena\'s expertise in interior architecture and material innovation helps create spaces that are both functional and emotionally resonant with their inhabitants.'
    }
  ];

  const stats = [
    { number: '50+', label: 'PROJECTS COMPLETED' },
    { number: '12', label: 'YEARS OF EXPERIENCE' },
    { number: '25+', label: 'AWARDS RECEIVED' },
    { number: '8', label: 'COUNTRIES SERVED' }
  ];

  const values = [
    {
      title: 'SUSTAINABILITY',
      description: 'We believe in creating spaces that harmonize with the environment, using sustainable materials and energy-efficient designs that minimize our ecological footprint.'
    },
    {
      title: 'INNOVATION',
      description: 'Our approach combines cutting-edge technology with timeless design principles to create spaces that are both contemporary and enduring.'
    },
    {
      title: 'COLLABORATION',
      description: 'We work closely with clients, contractors, and communities to ensure every project reflects the unique vision and needs of its stakeholders.'
    },
    {
      title: 'EXCELLENCE',
      description: 'Every detail matters. We pursue perfection in craftsmanship, functionality, and aesthetic appeal to deliver exceptional architectural experiences.'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        {/* Animated geometric elements */}
        <div className="absolute top-20 left-20 w-40 h-40 border border-white/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 border border-white/30 rotate-12 animate-pulse delay-1000"></div>
        
        <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-thin text-white tracking-widest mb-8 leading-tight">
            ABOUT US
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
            Crafting spaces that inspire, innovate, and endure through thoughtful design and sustainable practices
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-thin text-white mb-8 tracking-wide">
                OUR PHILOSOPHY
              </h2>
              <div className="w-20 h-px bg-gradient-to-r from-white to-transparent mb-8"></div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We believe that great architecture transcends mere functionality. It has the power to transform lives, communities, and the way we interact with our environment.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our designs are rooted in the principle that every space should tell a story, evoke emotion, and enhance the human experience while respecting the natural world.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl text-white/20 mb-4">✦</div>
                  <p className="text-white/60 text-lg font-light italic">
                    "Design is not just what it looks like and feels like. Design is how it works."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-thin text-white mb-4 group-hover:text-white/80 transition-colors">
                  {stat.number}
                </div>
                <div className="text-white/60 text-sm tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-thin text-white mb-8 tracking-wide">
              OUR VALUES
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <h3 className="text-2xl font-light text-white mb-6 tracking-wide group-hover:text-white/80 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-32 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-thin text-white mb-8 tracking-wide">
              OUR TEAM
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
            <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
              Meet the passionate individuals who bring vision to life through innovative design and meticulous craftsmanship
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-6 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-light text-white mb-2 tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-white/60 text-sm tracking-widest mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-thin text-white mb-8 tracking-wide">
            READY TO CREATE?
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-white/60 text-lg font-light mb-12 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life. Every great project begins with a conversation.
          </p>
          <button className="group relative px-12 py-4 bg-transparent border-2 border-white text-white font-light text-lg tracking-widest transition-all duration-500 hover:bg-white hover:text-black overflow-hidden">
            <span className="relative z-10">START A PROJECT</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>
    </div>
  );
}