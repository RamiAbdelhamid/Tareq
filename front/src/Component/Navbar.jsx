import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)

  return (
    <>
      {/* Logo */}
      <Link to="/">
        <div className="fixed top-5 left-5 z-100 w-16 h-16 flex items-center justify-center cursor-pointer">
          <span className="absolute w-24 h-24 rounded-full bg-white opacity-40 blur-2xl z-[-1]"></span>
          <img src={logo} alt="Logo" className="w-16 h-16 object-contain relative z-10" />
        </div>
      </Link>

      {/* Hamburger Icon */}
      <button
        onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); if (isOpen) setActiveMenu(null); }}
        className="fixed top-7 right-7 z-60 w-10 h-10 flex flex-col justify-center items-center group"
      >
        <span className={`block w-8 h-0.5 bg-white rounded transition-all duration-300 mb-1 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-8 h-0.5 bg-white rounded transition-all duration-300 mb-1 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-8 h-0.5 bg-white rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Background overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 transition-opacity duration-500"></div>
      )}

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-700 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => { setIsOpen(false); setActiveMenu(null); }}
        
      >
        <div
          className={`flex justify-center items-start h-full pt-32 space-x-20 transition-all duration-700 ease-in-out
            ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
          `}
          onClick={e => e.stopPropagation()}
        >
          {/* Main Links */}
          <div className="flex flex-col space-y-8">
            <Link to="/services" onClick={() => setIsOpen(false)}
              className="text-white text-3xl font-light opacity-30 hover:opacity-100 hover:drop-shadow-lg transition-all duration-300 ease-in-out">
              Services
            </Link>
            <button onClick={() => setActiveMenu(activeMenu === 'portfolio' ? null : 'portfolio')}
              className="text-left text-white text-3xl font-light opacity-30 hover:opacity-100 hover:drop-shadow-lg transition-all duration-300 ease-in-out">
              Portfolio
            </button>
            <Link to="/about" onClick={() => setIsOpen(false)}
              className="text-white text-3xl font-light opacity-30 hover:opacity-100 hover:drop-shadow-lg transition-all duration-300 ease-in-out">
              About
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}
              className="text-white text-3xl font-light opacity-30 hover:opacity-100 hover:drop-shadow-lg transition-all duration-300 ease-in-out">
              Contact
            </Link>
          </div>

          {/* Submenu */}
          {activeMenu === 'portfolio' && (
            <div className="flex flex-col space-y-6 border-l border-gray-600 pl-12">
              <Link to="/portfolio/residential" onClick={() => setIsOpen(false)}
                className="text-white text-2xl font-light opacity-30 hover:opacity-100 hover:drop-shadow-lg transition-all duration-300 ease-in-out">
                Residential
              </Link>
              <Link to="/portfolio/commercial" onClick={() => setIsOpen(false)}
                className="text-white text-2xl font-light opacity-30 hover:opacity-100 hover:drop-shadow-lg transition-all duration-300 ease-in-out">
                Commercial
              </Link>
              <Link to="/portfolio/heritage" onClick={() => setIsOpen(false)}
                className="text-white text-2xl font-light opacity-30 hover:opacity-100 hover:drop-shadow-lg transition-all duration-300 ease-in-out">
                Conservation & Heritage
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
