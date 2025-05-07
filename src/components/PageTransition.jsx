"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import "../styles/PageTransition.css"

function PageTransition({ children }) {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState("fadeIn")
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("fadeOut")
      setShowLoader(true)

      // Small delay to ensure the loader is visible
      setTimeout(() => {
        setDisplayLocation(location)
        setTransitionStage("fadeIn")

        // Hide loader after content has loaded
        setTimeout(() => {
          setShowLoader(false)
        }, 800)
      }, 800)
    }
  }, [location, displayLocation])

  return (
    <div className={`page-transition ${transitionStage}`}>
      {showLoader && (
        <div className="page-loader">
          <div className="loader-content">
            <div className="loader-diamond-grid">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`loader-diamond diamond-${i}`}>
                  <div className="loader-diamond-inner"></div>
                </div>
              ))}
            </div>
            <div className="loader-text">Loading</div>
          </div>
        </div>
      )}
      {children}
    </div>
  )
}

export default PageTransition
