import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  
  return (
    <>
      {/* Logo */}
      <Link to="/">
  <div className="fixed top-10 left-15 z-100 w-24 h-24 flex items-center justify-center cursor-pointer">
    <span className="absolute w-24 h-24 rounded-full bg-white opacity-40 blur-2xl z-[-1]"></span>
    <img src={logo} alt="Logo" className="w-20 h-20 object-contain relative z-10" />
  </div>
</Link>


      {/* Hamburger Icon */}
     <button
  onClick={(e) => {
    e.stopPropagation();
    const closing = isOpen; // نتحقق إذا كنت تغلق القائمة
    setIsOpen(!isOpen);
    if (closing) {
      setActiveMenu(null);
      setActiveSubMenu(null); // ✅ يغلق أي قائمة فرعية
    }
  }}
  className="fixed top-10 right-15 z-60 w-16 h-16 flex flex-col justify-center items-center group"
>
  <span className={`block w-11 h-0.5 bg-white rounded transition-all duration-300 mb-1 
    ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
  <span className={`block w-11 h-0.5 bg-white rounded transition-all duration-300 mb-1 
    ${isOpen ? 'opacity-0' : ''}`} />
  <span className={`block w-11 h-0.5 bg-white rounded transition-all duration-300 
    ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
</button>


      {/* Background overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 transition-opacity duration-500"></div>
      )}

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-700 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => {
          setIsOpen(false);
          setActiveMenu(null);
          setActiveSubMenu(null); // ✅ هذا السطر يضمن إغلاق أي submenu داخلي
        }}
                
      >
        <div
          className={`flex justify-center items-start h-full pt-32 space-x-20 transition-all duration-700 ease-in-out
            ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
          `}
          onClick={e => e.stopPropagation()}
        >
          {/* Main Links */}
          <div className="flex flex-col space-y-8">


            
          <button onClick={() => setActiveMenu(activeMenu === 'Services' ? null : 'Services')}
              className="text-left text-white text-3xl font-light opacity-30 hover:opacity-100 hover:drop-shadow-lg transition-all duration-300 ease-in-out">
              Services
            </button>



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
              <Link to="/portfolio" onClick={() => setIsOpen(false)}
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

{activeMenu === 'Services' && (
  <div className="relative flex flex-col space-y-6 border-l border-gray-600 pl-12">

    {/* Main trigger */}
    <button
      onClick={() =>
        setActiveSubMenu(activeSubMenu === 'Interior' ? null : 'Interior') 
      }
      className="text-left text-white text-2xl font-light opacity-30 hover:opacity-100 hover:drop-shadow-lg transition-all duration-300 ease-in-out relative"
    >
      Interior Design
    </button>

    {/* Submenu floating to the right */}
    {activeSubMenu === 'Interior' && (
      <div className="absolute top-0 left-full ml-6 flex flex-col space-y-4 border-l border-gray-700 pl-6">
        <Link
          to="/portfolio/apartments"
          onClick={() => setIsOpen(false)}
          className="text-white text-lg font-light opacity-30 hover:opacity-100 transition-all"
        >
          Apartments
        </Link>
        <Link
          to="/portfolio/offices"
          onClick={() => setIsOpen(false)}
          className="text-white text-lg font-light opacity-30 hover:opacity-100 transition-all"
        >
          Offices
        </Link>
        <Link
          to="/portfolio/villas"
          onClick={() => setIsOpen(false)}
          className="text-white text-lg font-light opacity-30 hover:opacity-100 transition-all"
        >
          Villas
        </Link>
      </div>
    )}
  </div>
)}









        </div>
      </div>
    </>
  )
}
