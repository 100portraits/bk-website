import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/bk-logo.jpg'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      // On home page, check if scrolled past hero section
      if (isHomePage) {
        const offset = window.scrollY
        setIsScrolled(offset > window.innerHeight * 0.8)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  const navClasses = `shadow-lg fixed top-0 left-0 w-full z-50 py-4 px-10 bg-primary transition-all duration-300  text-white`

  return (
    <nav className={navClasses}>
      <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-lg hover:opacity-80 ml-4 flex items-center transition-opacity duration-300">
          <img src={logo} alt="Bike Kitchen Logo" className="w-16 h-16 mr-2 -my-2" />
            Home
          </Link>
        <div className="flex space-x-4">
          <Link to="/about-us" className="text-lg hover:opacity-80 transition-opacity duration-300">
            About Us
          </Link>
          <Link to="/program" className="text-lg hover:opacity-80 transition-opacity duration-300">
            Program
          </Link>
          <Link to="/get-involved" className="text-lg hover:opacity-80 transition-opacity duration-300">
            Get Involved
          </Link>
          <Link to="/news" className="text-lg hover:opacity-80 transition-opacity duration-300">
            News & Media
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
