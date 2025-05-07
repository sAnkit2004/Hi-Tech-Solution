import "../styles/Pages.css"

function Clients() {
  return (
    <div className="page-container clients-page">
      <div className="page-header">
        <h1>Our Clients</h1>
      </div>

      <div className="page-content">
        <section className="testimonials-section">
          <h2>Client Testimonials</h2>

          <div className="testimonial-cards">
            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">
                Softech Group provided an exceptional audio-visual setup for our corporate conference. Their attention
                to detail and technical expertise ensured our event was a great success. We were particularly impressed
                with their responsiveness and ability to solve problems on the fly.
              </p>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="https://via.placeholder.com/80x80/3a3a9f/ffffff?text=A" alt="Client" />
                </div>
                <div className="author-info">
                  <h4>Rahul Sharma</h4>
                  <p>Event Manager, Tech Innovations Ltd</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">
                The home theatre system installed by Softech Group has completely transformed our entertainment
                experience. The audio quality is incredible and the picture clarity is stunning. Their team was
                professional throughout the process, from design to installation.
              </p>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="https://via.placeholder.com/80x80/4a1a7f/ffffff?text=S" alt="Client" />
                </div>
                <div className="author-info">
                  <h4>Priya Patel</h4>
                  <p>Homeowner, Mumbai</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">
                We've been working with Softech Group for our retail display needs for over 5 years. Their LED solutions
                have helped us create engaging experiences for our customers, and their ongoing support has been
                exceptional. I highly recommend their services.
              </p>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="https://via.placeholder.com/80x80/6a2a9f/ffffff?text=M" alt="Client" />
                </div>
                <div className="author-info">
                  <h4>Vikram Malhotra</h4>
                  <p>Marketing Director, Fashion Forward</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="client-logos-section">
          <h2>Trusted By</h2>
          <div className="logo-grid">
            <div className="logo-item">
              <img src="https://via.placeholder.com/200x100/3a3a9f/ffffff?text=Client+Logo" alt="Client Logo" />
            </div>
            <div className="logo-item">
              <img src="https://via.placeholder.com/200x100/4a1a7f/ffffff?text=Client+Logo" alt="Client Logo" />
            </div>
            <div className="logo-item">
              <img src="https://via.placeholder.com/200x100/6a2a9f/ffffff?text=Client+Logo" alt="Client Logo" />
            </div>
            <div className="logo-item">
              <img src="https://via.placeholder.com/200x100/8a3abf/ffffff?text=Client+Logo" alt="Client Logo" />
            </div>
            <div className="logo-item">
              <img src="https://via.placeholder.com/200x100/2a2a7f/ffffff?text=Client+Logo" alt="Client Logo" />
            </div>
            <div className="logo-item">
              <img src="https://via.placeholder.com/200x100/3a3a9f/ffffff?text=Client+Logo" alt="Client Logo" />
            </div>
            <div className="logo-item">
              <img src="https://via.placeholder.com/200x100/4a1a7f/ffffff?text=Client+Logo" alt="Client Logo" />
            </div>
            <div className="logo-item">
              <img src="https://via.placeholder.com/200x100/6a2a9f/ffffff?text=Client+Logo" alt="Client Logo" />
            </div>
            <div className="logo-item">
              <img src="https://via.placeholder.com/200x100/8a3abf/ffffff?text=Client+Logo" alt="Client Logo" />
            </div>
            <div className="logo-item">
              <img src="https://via.placeholder.com/200x100/2a2a7f/ffffff?text=Client+Logo" alt="Client Logo" />
            </div>
            <div className="logo-item">
              <img src="https://via.placeholder.com/200x100/3a3a9f/ffffff?text=Client+Logo" alt="Client Logo" />
            </div>
            <div className="logo-item">
              <img src="https://via.placeholder.com/200x100/4a1a7f/ffffff?text=Client+Logo" alt="Client Logo" />
            </div>
          </div>
        </section>

        <section className="industries-section">
          <h2>Industries We Serve</h2>
          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-icon corporate-icon"></div>
              <h3>Corporate</h3>
              <p>Enhancing workplaces with cutting-edge AV solutions for better communication and collaboration.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon education-icon"></div>
              <h3>Education</h3>
              <p>Creating interactive learning environments with technology that engages and inspires.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon retail-icon"></div>
              <h3>Retail</h3>
              <p>Elevating customer experiences with dynamic displays and immersive audio solutions.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon hospitality-icon"></div>
              <h3>Hospitality</h3>
              <p>Transforming guest experiences with integrated AV systems for hotels, resorts, and venues.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon entertainment-icon"></div>
              <h3>Entertainment</h3>
              <p>Powering theaters, clubs, and entertainment venues with professional-grade AV solutions.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon government-icon"></div>
              <h3>Government</h3>
              <p>Supporting public institutions with reliable communication and presentation systems.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Clients
