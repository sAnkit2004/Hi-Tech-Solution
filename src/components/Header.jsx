"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "../styles/Header.css"
import logo from "../assets/logo.png" // Update with your logo path

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <div className="logo"><img src={logo} alt="" /></div>
          </Link>
        </div>

        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link to="/about" onClick={closeMobileMenu}>
                ABOUT US
              </Link>
            </li>
            <li className={location.pathname === "/av-shows-events" ? "active" : ""}>
              <Link to="/av-shows-events" onClick={closeMobileMenu}>
                AV SHOW & EVENTS
              </Link>
            </li>
            <li className={location.pathname === "/led-display" ? "active" : ""}>
              <Link to="/led-display" onClick={closeMobileMenu}>
                LED DISPLAY
              </Link>
            </li>
            <li className={location.pathname === "/av-integration" ? "active" : ""}>
              <Link to="/av-integration" onClick={closeMobileMenu}>
                AV INTEGRATION
              </Link>
            </li>
            <li className={location.pathname === "/home-theatre" ? "active" : ""}>
              <Link to="/home-theatre" onClick={closeMobileMenu}>
                HOME THEATRE
              </Link>
            </li>
            {/* <li className={location.pathname === "/clients" ? "active" : ""}>
              <Link to="/clients" onClick={closeMobileMenu}>
                CLIENTS
              </Link>
            </li> */}
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact" onClick={closeMobileMenu}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
