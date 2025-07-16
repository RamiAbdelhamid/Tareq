import React, { useRef, useState } from 'react';

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen w-full bg-black">
      {/* Full Screen Hero Section */}
      <div
        className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        </div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-white/30 rotate-12 animate-pulse delay-700"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
          <div className="mb-12 space-y-6">
        
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl leading-relaxed">
              Let's create something extraordinary together
            </p>
          </div>
          
          <button
            onClick={handleScrollToForm}
            className="group relative px-12 py-4 bg-transparent border-2 border-white text-white font-light text-lg tracking-widest transition-all duration-500 hover:bg-white hover:text-black overflow-hidden"
          >
            <span className="relative z-10">GET IN TOUCH</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div ref={formRef} className="min-h-screen bg-black flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-4xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left side - Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-thin text-white mb-6 tracking-wide">
                  Get in Touch
                </h2>
                <div className="w-20 h-px bg-gradient-to-r from-white to-transparent mb-8"></div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Ready to bring your vision to life? We'd love to hear about your project and explore how we can work together.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="group">
                  <h3 className="text-white font-light text-sm tracking-widest mb-2 uppercase">Studio</h3>
                  <p className="text-gray-300 text-lg">123 Design Avenue<br/>Modern City, MC 12345</p>
                </div>
                
                <div className="group">
                  <h3 className="text-white font-light text-sm tracking-widest mb-2 uppercase">Connect</h3>
                  <p className="text-gray-300 text-lg">hello@studio.com<br/>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            {/* Right side - Form */}
            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 border border-white/10">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/60 py-4 px-0 focus:outline-none focus:border-white transition-colors text-lg"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/60 py-4 px-0 focus:outline-none focus:border-white transition-colors text-lg"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      placeholder="Tell us about your project"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/60 py-4 px-0 focus:outline-none focus:border-white transition-colors text-lg resize-none"
                    />
                  </div>
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="group relative w-full py-4 bg-transparent border border-white/30 text-white font-light text-lg tracking-widest transition-all duration-300 hover:bg-white hover:text-black overflow-hidden"
                >
                  <span className="relative z-10">SEND MESSAGE</span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}