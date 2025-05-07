"use client"

import { useEffect, useRef, useState } from "react"
import Banner from "../components/Banner"
import AboutUs from "../components/AboutUs"
import StatsCounter from "../components/StatsCounter"
import Testimonials from "../components/Testimonials"
import "../styles/Home.css"

function Home() {
  const [isVisible, setIsVisible] = useState({
    services: false,
    stats: false,
    testimonials: false,
  })

  const servicesRef = useRef(null)
  const statsRef = useRef(null)
  const testimonialsRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === servicesRef.current) {
            setIsVisible((prev) => ({ ...prev, services: true }))
          } else if (entry.target === statsRef.current) {
            setIsVisible((prev) => ({ ...prev, stats: true }))
          } else if (entry.target === testimonialsRef.current) {
            setIsVisible((prev) => ({ ...prev, testimonials: true }))
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    if (servicesRef.current) observer.observe(servicesRef.current)
    if (statsRef.current) observer.observe(statsRef.current)
    if (testimonialsRef.current) observer.observe(testimonialsRef.current)

    return () => {
      if (servicesRef.current) observer.unobserve(servicesRef.current)
      if (statsRef.current) observer.unobserve(statsRef.current)
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current)
    }
  }, [])

  return (
    <div className="home-page">
      <Banner />
      <AboutUs />

      <div ref={statsRef} className={`stats-wrapper ${isVisible.stats ? "animate" : ""}`}>
        <StatsCounter />
      </div>

      <section ref={servicesRef} className={`highlights-section ${isVisible.services ? "animate" : ""}`}>
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon av-icon"></div>
              <h3>AV Shows & Events</h3>
              <p>Professional audio-visual solutions for all types of events and shows.</p>
              <a href="/av-shows-events" className="service-link">
                Learn More
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon led-icon"></div>
              <h3>LED Display</h3>
              <p>High-quality LED displays for both indoor and outdoor applications.</p>
              <a href="/led-display" className="service-link">
                Learn More
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon integration-icon"></div>
              <h3>AV Integration</h3>
              <p>Seamless integration of audio-visual technology for various environments.</p>
              <a href="/av-integration" className="service-link">
                Learn More
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon theatre-icon"></div>
              <h3>Home Theatre</h3>
              <p>Custom home theatre solutions for an immersive entertainment experience.</p>
              <a href="/home-theatre" className="service-link">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <div ref={testimonialsRef} className={`testimonials-wrapper ${isVisible.testimonials ? "animate" : ""}`}>
        <Testimonials />
      </div>
    </div>
  )
}

export default Home
