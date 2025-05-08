"use client"

import { useState, useEffect } from "react"
import "../styles/Testimonials.css"

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  const testimonials = [
    {
      id: 1,
      text: "HI-TECH Group provided an exceptional audio-visual setup for our corporate conference. Their attention to detail and technical expertise ensured our event was a great success. We were particularly impressed with their responsiveness and ability to solve problems on the fly.",
      author: "Rahul Sharma",
      position: "Event Manager, Tech Innovations Ltd",
      image: "https://via.placeholder.com/80x80/3a3a9f/ffffff?text=R",
    },
    {
      id: 2,
      text: "The home theatre system installed by HI-TECH Group has completely transformed our entertainment experience. The audio quality is incredible and the picture clarity is stunning. Their team was professional throughout the process, from design to installation.",
      author: "Priya Patel",
      position: "Homeowner, Mumbai",
      image: "https://via.placeholder.com/80x80/4a1a7f/ffffff?text=P",
    },
    {
      id: 3,
      text: "We've been working with HI-TECH Group for our retail display needs for over 5 years. Their LED solutions have helped us create engaging experiences for our customers, and their ongoing support has been exceptional. I highly recommend their services.",
      author: "Vikram Malhotra",
      position: "Marketing Director, Fashion Forward",
      image: "https://via.placeholder.com/80x80/6a2a9f/ffffff?text=V",
    },
    {
      id: 4,
      text: "HI-TECH Group's AV integration for our conference rooms has significantly improved our meeting experience. The system is intuitive to use and the quality is outstanding. Their team provided excellent training and support throughout the process.",
      author: "Ananya Desai",
      position: "CTO, Global Solutions Inc.",
      image: "https://via.placeholder.com/80x80/8a3abf/ffffff?text=A",
    },
  ]

  useEffect(() => {
    if (!isAutoplay) return

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoplay, testimonials.length])

  const handleDotClick = (index) => {
    setActiveIndex(index)
    setIsAutoplay(false)

    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoplay(true), 10000)
  }

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 10000)
  }

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 10000)
  }

  return (
    <section className="testimonials-home-section">
      <div className="container">
        <h2 className="testimonials-title">What Our Clients Say</h2>

        <div className="testimonials-slider">
          <button className="slider-arrow prev-arrow" onClick={handlePrevClick}>
            <span className="arrow-icon">&#10094;</span>
          </button>

          <div className="testimonials-wrapper">
            <div className="testimonials-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-slide">
                  <div className="testimonial-content">
                    <div className="quote-icon">"</div>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-author">
                      <div className="author-image">
                        <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.author} />
                      </div>
                      <div className="author-info">
                        <h4>{testimonial.author}</h4>
                        <p>{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-arrow next-arrow" onClick={handleNextClick}>
            <span className="arrow-icon">&#10095;</span>
          </button>
        </div>

        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
