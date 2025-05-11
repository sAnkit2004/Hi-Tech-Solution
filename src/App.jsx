"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"
import AvShowsEvents from "./pages/AvShowsEvents"
import LedDisplay from "./Pages/LedDisplay"
import AvIntegration from "./Pages/AvIntegration"
import HomeTheatre from "./Pages/HomeTheatre"

import Contact from "./Pages/Contact"
import PageTransition from "./components/PageTransition"


function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
   
    if (pathname !== "/") {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading time
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {isLoading ? (
        <div className="initial-loader">
          <div className="loader-diamond-container">
            {[...Array(9)].map((_, i) => (
              <div key={i} className={`initial-loader-diamond diamond-${i}`}>
                <div className="initial-loader-diamond-inner"></div>
              </div>
            ))}
          </div>
          <h2 className="initial-loader-text">HI-TECH</h2>
        </div>
      ) : (
        <>
          <Header />
          <ScrollToTop />
          <PageTransition>
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/av-shows-events" element={<AvShowsEvents />} />
                <Route path="/led-display" element={<LedDisplay />} />
                <Route path="/av-integration" element={<AvIntegration />} />
                <Route path="/home-theatre" element={<HomeTheatre />} />
             
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </PageTransition>
          <Footer />
        </>
      )}
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <AppContent />
      </div>
    </Router>
  )
}

export default App
