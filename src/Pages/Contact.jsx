"use client"

import { useState } from "react"
import "../styles/Pages.css"
import "../styles/Contact.css"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would submit the form data to a server here
    console.log("Form submitted:", formData)
    setFormSubmitted(true)

    // Reset form after submission
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 5000)
  }

  return (
    <div className="page-container contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
      </div>

      <div className="page-content">
        <section className="contact-section">
          <div className="contact-form-container">
            <h2>Get In Touch</h2>
            <p>Fill out the form below and our team will get back to you as soon as possible.</p>

            {formSubmitted ? (
              <div className="success-message">
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service of Interest</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                    <option value="">Select a Service</option>
                    <option value="av-shows">AV Shows & Events</option>
                    <option value="led-display">LED Display</option>
                    <option value="av-integration">AV Integration</option>
                    <option value="home-theatre">Home Theatre</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="contact-info-container">
            <div className="contact-info">
              <h2>Contact Information</h2>

              <div className="info-item">
                <div className="info-icon address-icon"></div>
                <div className="info-content">
                  <h3>Address</h3>
                  <p>123 AV Street, Tech Park</p>
                  <p>New Delhi, India, 110001</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon phone-icon"></div>
                <div className="info-content">
                  <h3>Phone</h3>
                  <p>+91 1234567890</p>
                  <p>+91 9876543210</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon email-icon"></div>
                <div className="info-content">
                  <h3>Email</h3>
                  <p>info@softechgroup.com</p>
                  <p>support@softechgroup.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon hours-icon"></div>
                <div className="info-content">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM to 6:00 PM</p>
                  <p>Saturday: 10:00 AM to 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link facebook-icon"></a>
                <a href="#" className="social-link twitter-icon"></a>
                <a href="#" className="social-link instagram-icon"></a>
                <a href="#" className="social-link linkedin-icon"></a>
              </div>
            </div>
          </div>
        </section>

        <section className="map-section">
          <h2>Find Us</h2>
          <div className="map-container">
            {/* In a real application, you would embed a Google Map or similar here */}
            <div className="map-placeholder">
              <img
                src="https://via.placeholder.com/1200x400/3a3a9f/ffffff?text=Google+Map+Location"
                alt="Map Location"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
