import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/bk-logo.jpg'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

  const navClasses = `shadow-lg fixed top-0 left-0 w-full z-50 py-4 px-4 bg-primary transition-all duration-300 text-white`

  const menuItems = [
    { to: '/about-us', text: 'About Us' },
    { to: '/get-involved', text: 'Get Involved' },
    { to: '/research', text: 'Research' },
    { 
      to: 'https://doneren.auf.nl/bike-kitchen', 
      text: 'Donate', 
      external: true 
    },
  ]

  return (
    <nav className={navClasses}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg hover:opacity-80 flex items-center transition-opacity duration-300">
          <img src={logo} alt="Bike Kitchen Logo" className="w-16 h-16 mr-2 -my-2" />
          <span className="hidden sm:inline">Home</span>
        </Link>

        {/* Hamburger Menu Button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4 items-center">
          {menuItems.map((item) => (
            item.dropdown ? (
              <div key={item.text} className="relative group">
                <button className="text-lg hover:opacity-80 transition-opacity duration-300 flex items-center">
                  {item.text}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.to}
                      to={subItem.to}
                      className="block px-4 py-2 text-primary hover:bg-gray-100"
                    >
                      {subItem.text}
                    </Link>
                  ))}
                </div>
              </div>
            ) : item.text === 'Donate' ? (
              <a
                key={item.to}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg px-4 py-2 bg-white text-primary rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold"
              >
                {item.text}
              </a>
            ) : item.external ? (
              <a
                key={item.to}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:opacity-80 transition-opacity duration-300"
              >
                {item.text}
              </a>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="text-lg hover:opacity-80 transition-opacity duration-300"
              >
                {item.text}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Slide-out Menu */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-primary transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}>
          <div className="pt-20 px-6 space-y-4">
            <Link to="/" className="block text-2xl hover:opacity-80 mb-8">
              Home
            </Link>
            {menuItems.map((item) => (
              item.text === 'Donate' ? (
                <a
                  key={item.to}
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg px-4 py-2 bg-white text-primary rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold w-fit"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.text}
                </a>
              ) : item.external ? (
                <a
                  key={item.to}
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg hover:opacity-80"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.text}
                </a>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block text-lg hover:opacity-80"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.text}
                </Link>
              )
            ))}
          </div>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  )
}

export default Navbar
