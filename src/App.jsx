import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Research from './pages/Research'
import GetInvolved from './pages/GetInvolved'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import Events from './pages/Events'
import Accomplishments from './pages/Accomplishments'
import OurTeam from './pages/OurTeam'
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
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/research" element={<Research />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:slug" element={<NewsDetail />} />
              <Route path="/accomplishments" element={<Accomplishments />} />
              <Route path="/events" element={<Events />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ParallaxProvider>
  )
}

export default App
