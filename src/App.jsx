import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Program from './pages/Program'
import GetInvolved from './pages/GetInvolved'
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/program" element={<Program />} />
              <Route path="/get-involved" element={<GetInvolved />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ParallaxProvider>
  )
}

export default App
