"use client"

import { useState } from "react"
import emailjs from "emailjs-com" // Import EmailJS
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

    // Send form data via EmailJS
    emailjs
      .send(
        "service_ccc7uvi", // Replace with your EmailJS service ID
        "template_sqqmfla", // Replace with your EmailJS template ID
        formData,
        "1TJtBWYBsrCmdmzN0" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text)
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
        },
        (error) => {
          console.error("FAILED...", error)
        }
      )
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
                  <p>S-466 School Block Laxmi Nagar</p>
                  <p>New Delhi</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon phone-icon"></div>
                <div className="info-content">
                  <h3>Phone</h3>
                  <p>+91 9555006889</p>
                  
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon email-icon"></div>
                <div className="info-content">
                  <h3>Email</h3>
                  <p>hitechaudiovisual23@gmail.com</p>
                  
                </div>
              </div>

           

              <div className="social-links">
                <a href="https://www.facebook.com/hitechaudiovisuals" className="social-link facebook-icon"></a>
                
                <a href="https://www.instagram.com/hitechaudiovisuals?utm_source=qr&igsh=emFuaXhsdGd4M214" className="social-link instagram-icon"></a>
                <a href="https://in.linkedin.com/company/hitechaudiovisual" className="social-link linkedin-icon"></a>
              </div>
            </div>
          </div>
        </section>

        <section className="map-section">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8393748479!2d77.06889999999999!3d28.527280000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b3c3b3c3b3%3A0x3b3c3b3c3b3c3b3c!2sNew%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
