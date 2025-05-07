import "../styles/Pages.css"

function HomeTheatre() {
  return (
    <div className="page-container home-theatre-page">
      <div className="page-header">
        <h1>Home Theatre Solutions</h1>
      </div>

      <div className="page-content">
        <section className="content-section">
          <div className="section-image">
            <img src="https://via.placeholder.com/600x400/3a3a9f/ffffff?text=Home+Theatre" alt="Home Theatre" />
          </div>
          <div className="section-text">
            <h2>Custom Home Entertainment</h2>
            <p>
              Softech Group designs and installs premium home theatre systems that transform your living space into an
              immersive entertainment environment. Our custom solutions combine cutting-edge audio and video technology
              with elegant design to create the ultimate home viewing experience.
            </p>
            <p>
              From dedicated theatre rooms to multi-purpose entertainment spaces, we tailor each solution to match your
              preferences, space requirements, and budget while delivering exceptional performance.
            </p>
          </div>
        </section>

        <section className="content-section reverse">
          <div className="section-image">
            <img src="https://via.placeholder.com/600x400/4a1a7f/ffffff?text=Audio+Systems" alt="Audio Systems" />
          </div>
          <div className="section-text">
            <h2>Premium Audio Solutions</h2>
            <p>Our home theatre audio systems deliver immersive, cinema-quality sound:</p>
            <ul className="feature-list">
              <li>Dolby Atmos and DTS:X surround sound systems</li>
              <li>Custom speaker placement and calibration</li>
              <li>High-performance AV receivers and amplifiers</li>
              <li>In-wall and in-ceiling speaker solutions</li>
              <li>Acoustic treatments and room optimization</li>
              <li>Multi-room audio distribution</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <div className="section-image">
            <img src="https://via.placeholder.com/600x400/6a2a9f/ffffff?text=Video+Systems" alt="Video Systems" />
          </div>
          <div className="section-text">
            <h2>Stunning Visual Experiences</h2>
            <p>Our video solutions bring cinema-quality images to your home:</p>
            <ul className="feature-list">
              <li>4K and 8K Ultra HD displays</li>
              <li>Premium projectors and projection screens</li>
              <li>HDR and wide color gamut support</li>
              <li>Motorized screens and projector lifts</li>
              <li>Video distribution and matrix switching</li>
              <li>Professional calibration services</li>
            </ul>
          </div>
        </section>

        <section className="content-section reverse">
          <div className="section-image">
            <img src="https://via.placeholder.com/600x400/8a3abf/ffffff?text=Smart+Control" alt="Smart Control" />
          </div>
          <div className="section-text">
            <h2>Intuitive Control Systems</h2>
            <p>Control your entire home theatre with ease using our integrated control solutions:</p>
            <ul className="feature-list">
              <li>One-touch control of audio, video, and lighting</li>
              <li>Smart home integration capabilities</li>
              <li>Custom-programmed remote controls</li>
              <li>Smartphone and tablet control apps</li>
              <li>Voice control capabilities</li>
              <li>Automated scenes for different viewing experiences</li>
            </ul>
          </div>
        </section>

        <section className="gallery-section">
          <h2>Recent Projects</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300x200/3a3a9f/ffffff?text=Theatre+Room" alt="Theatre Room" />
              <p>Dedicated Cinema Room</p>
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300x200/4a1a7f/ffffff?text=Media+Room" alt="Media Room" />
              <p>Multi-purpose Media Room</p>
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300x200/6a2a9f/ffffff?text=Living+Room" alt="Living Room" />
              <p>Living Room Integration</p>
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300x200/8a3abf/ffffff?text=Outdoor+Cinema" alt="Outdoor Cinema" />
              <p>Outdoor Entertainment Space</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomeTheatre
