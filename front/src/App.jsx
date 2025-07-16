import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './Component/Home.jsx'
import HamburgerMenu from './Component/Navbar.jsx'
import AnimatedText from './Component/AnimatedText.jsx'
import Portfolio from './Component/Portfolio.jsx'
import Contact from './Component/Contact.jsx'
import About from './Component/About.jsx'
import logo from './assets/logo.png';

function App() {
  const location = useLocation()
  const [opacityClass, setOpacityClass] = useState('opacity-0')
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    setShowIntro(true)
    setOpacityClass('opacity-0')
    // trigger fade-in
    const timer1 = setTimeout(() => {
      setOpacityClass('opacity-100')
    }, 100)

    // trigger fade-out
    const timer2 = setTimeout(() => {
      setOpacityClass('opacity-0')
    }, 3000)

    // hide intro finally
    const timer3 = setTimeout(() => {
      setShowIntro(false)
    }, 5000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [location.pathname]) // rerun on route change

  return (
    <>
  {showIntro ? (
  <div className={`h-screen flex flex-col justify-center items-center bg-white text-black transition-opacity duration-[5000ms] ease-in-out ${opacityClass}`}>
    <div className="flex flex-col items-center">
      <div className="mb-6 w-24 h-24 flex items-center justify-center relative">
        <span className="absolute w-32 h-32 rounded-full bg-white opacity-40 blur-2xl z-[-1]"></span>
        <img src={logo} alt="Logo" className="w-24 h-24 object-contain relative z-10" />
      </div>
      <h1 className="text-6xl font-bold">
        <AnimatedText text="Tareq Shadeed Design" />
      </h1>
      <p className="text-xl mt-4">
        <AnimatedText text="Architecture & Design Studio" delayStep={0.03} />
      </p>
    </div>
  </div>
) : (
  <>
    <HamburgerMenu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </>
)}

    </>
  )
}

export default App;
