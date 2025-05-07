import "../styles/AboutUs.css"

function AboutUs() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Us</h2>
          <p>
            Softech is a Nationally Recognized premier professional Organisation grown into A Reliable Name in the field
            of Audio-Visuals, Led Displays, Multimedia and Hi-tech Equipment Resource.
          </p>
          <p>
            With more than 24 years of Rich experience in the Audio-Visual industry, Softech has carved a Niche for
            itself in handling Big Shows, Turnkey Solutions and Customized projects.
          </p>
          <p>
            Our scalable Audio Visual offerings provides World Class AV Communication & seamlessly integrated Technology
            solution optimally Customized for diverse range of clientele Through our association with globally renowned
            brands.
          </p>

          <h3 className="verticals-title">Our key verticals –</h3>
          <ul className="verticals-list">
            <li>AV SHOWS, AV HIRING & EVENTS</li>
            <li>AV System integration, Acoustics TURNKEY SOLUTIONS.</li>
            <li>LED/LFD DISPLAYS, Video walls For Installation & Events</li>
          </ul>
        </div>
        <div className="about-image">
          <div className="image-container">
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
