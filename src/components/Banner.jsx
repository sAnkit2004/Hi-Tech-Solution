"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import "../styles/Banner.css"

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const totalSlides = 4
  const bannerRef = useRef(null)
  const particlesRef = useRef(null)
  const particles = []
  const particleCount = 50

  // Initialize particles
  useEffect(() => {
    if (!particlesRef.current) return

    const canvas = particlesRef.current
    const ctx = canvas.getContext("2d")
    const canvasWidth = canvas.width
    const canvasHeight = canvas.height

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        radius: Math.random() * 3 + 1,
        color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
          Math.random() * 100 + 155,
        )}, 255, ${Math.random() * 0.5 + 0.3})`,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
      })
    }

    // Animation function
    function animateParticles() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Move particles
        p.x += p.speedX
        p.y += p.speedY

        // Boundary check
        if (p.x < 0 || p.x > canvasWidth) p.speedX *= -1
        if (p.y < 0 || p.y > canvasHeight) p.speedY *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()

        // Connect particles that are close
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 - distance / 500})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animateParticles)
    }

    // Start animation
    animateParticles()

    // Resize handler
    const handleResize = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isHovering])

  const handleDotClick = (index) => {
    setCurrentSlide(index)
  }

  const handleMouseMove = (e) => {
    if (!bannerRef.current) return
    const { left, top, width, height } = bannerRef.current.getBoundingClientRect()
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height
    setMousePosition({ x, y })
  }

  const services = [
    { name: "AV SHOWS, AV HIRING & EVENTS", path: "/av-shows-events" },
    { name: "LED DISPLAY", path: "/led-display" },
    { name: "AV INTEGRATION", path: "/av-integration" },
    { name: "HOME THEATRE", path: "/home-theatre" },
  ]

  return (
    <div
      className="banner-section"
      ref={bannerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <canvas ref={particlesRef} className="particles-canvas"></canvas>

      <div className="banner-container">
        <div className="banner-content">
          <div className="animated-heading">
            <h1 className="glitch" data-text="HI-TECH">
              HI-TECH
            </h1>
            <div className="subtitle">
              <span className="typing-text">Premier Audio Visual Solutions</span>
            </div>
            <p className="banner-description">
              Delivering exceptional audio-visual experiences with cutting-edge technology for over 24 years
            </p>
            <div className="banner-cta">
              <Link to="/contact" className="cta-button">
                <span>Get Started</span>
                <svg
                  className="cta-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link to="/about" className="cta-link">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="diamond-grid">
          {/* Diamond grid images with parallax effect */}
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className={`diamond diamond-${index}`}
              style={{
                transform: `rotate(45deg) translate(${mousePosition.x * 20 - 10}px, ${mousePosition.y * 20 - 10}px)`,
              }}
            >
              <div className="diamond-content"></div>
            </div>
          ))}
        </div>

        <div className="banner-sidebar">
          <div className="sidebar-title">
            <h2>HI-TECH</h2>
          </div>
          <div className="sidebar-menu">
            <ul>
              {services.map((service, index) => (
                <li key={index} className={currentSlide === index ? "active" : ""}>
                  <Link to={service.path}>
                    {service.name}
                    <span className="hover-indicator"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="banner-dots">
          {[...Array(totalSlides)].map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="scroll-text">Scroll Down</div>
      </div> */}
    </div>
  )
}

export default Banner
