"use client"

import { useState, useEffect, useRef } from "react"
import "../styles/StatsCounter.css"

function StatsCounter() {
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    projects: 0,
    awards: 0,
  })

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const targetValues = {
    years: 24,
    clients: 500,
    projects: 1200,
    awards: 35,
  }

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const observerCallback = (entries) => {
      const [entry] = entries
      setIsVisible(entry.isIntersecting)
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // ms
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)

    let frame = 0

    const counter = setInterval(() => {
      frame++

      const progress = frame / totalFrames
      const easeOutQuad = 1 - (1 - progress) * (1 - progress)

      setCounters({
        years: Math.floor(easeOutQuad * targetValues.years),
        clients: Math.floor(easeOutQuad * targetValues.clients),
        projects: Math.floor(easeOutQuad * targetValues.projects),
        awards: Math.floor(easeOutQuad * targetValues.awards),
      })

      if (frame === totalFrames) clearInterval(counter)
    }, frameDuration)

    return () => clearInterval(counter)
  }, [isVisible])

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="stats-overlay"></div>
      <div className="container">
        <h2 className="stats-title">Our Achievements</h2>
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-icon years-icon"></div>
            <div className="stat-number">{counters.years}+</div>
            <div className="stat-label">Years of Excellence</div>
          </div>

          <div className="stat-item">
            <div className="stat-icon clients-icon"></div>
            <div className="stat-number">{counters.clients}+</div>
            <div className="stat-label">Satisfied Clients</div>
          </div>

          <div className="stat-item">
            <div className="stat-icon projects-icon"></div>
            <div className="stat-number">{counters.projects}+</div>
            <div className="stat-label">Projects Completed</div>
          </div>

          <div className="stat-item">
            <div className="stat-icon awards-icon"></div>
            <div className="stat-number">{counters.awards}+</div>
            <div className="stat-label">Awards Won</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsCounter
