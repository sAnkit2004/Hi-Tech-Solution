import "../styles/Pages.css"
import image1 from "../assets/Image-1.jpg"
import image2 from "../assets/image-2.jpg"
import image3 from "../assets/image-3.jpg"

function LedDisplay() {
  return (
    <div className="page-container led-display-page">
      <div className="page-header">
        <h1>LED Display Solutions</h1>
      </div>

      <div className="page-content">
        <section className="content-section">
          <div className="section-image">
            <img src={image1} alt="LED Displays" />
          </div>
          <div className="section-text">
            <h2>High-Quality LED Solutions</h2>
            <p>
              Softech Group offers cutting-edge LED display solutions for various applications. Our high-resolution LED
              displays deliver vibrant colors, excellent contrast, and exceptional brightness, ensuring your content
              looks its best in any environment.
            </p>
            <p>
              Whether you need permanent installations or temporary setups for events, our LED solutions are designed to
              meet your specific requirements with reliability and visual impact.
            </p>
          </div>
        </section>

        <section className="content-section reverse">
          <div className="section-image">
            <img src={image3} alt="Indoor LED" />
          </div>
          <div className="section-text">
            <h2>Indoor LED Displays</h2>
            <p>Our indoor LED display solutions are perfect for:</p>
            <ul className="feature-list">
              <li>Corporate lobbies and reception areas</li>
              <li>Conference rooms and meeting spaces</li>
              <li>Retail environments and shopping malls</li>
              <li>Entertainment venues and theaters</li>
              <li>Command and control centers</li>
              <li>Broadcast studios and production facilities</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <div className="section-image">
            <img src={image2} alt="Outdoor LED" />
          </div>
          <div className="section-text">
            <h2>Outdoor LED Displays</h2>
            <p>Our weatherproof and durable outdoor LED displays are ideal for:</p>
            <ul className="feature-list">
              <li>Building facades and architectural integration</li>
              <li>Billboards and advertising displays</li>
              <li>Sports stadiums and arenas</li>
              <li>Outdoor events and festivals</li>
              <li>Transportation hubs and terminals</li>
              <li>Public information displays</li>
            </ul>
          </div>
        </section>

        <section className="specs-section">
          <h2>Technical Specifications</h2>
          <div className="specs-grid">
            <div className="spec-card">
              <h3>Indoor P2.5</h3>
              <ul>
                <li>Pixel Pitch: 2.5mm</li>
                <li>Brightness: 1000 nits</li>
                <li>Refresh Rate: 3840Hz</li>
                <li>IP Rating: IP31</li>
                <li>Viewing Angle: 160°</li>
              </ul>
            </div>
            <div className="spec-card">
              <h3>Indoor P3.9</h3>
              <ul>
                <li>Pixel Pitch: 3.9mm</li>
                <li>Brightness: 1200 nits</li>
                <li>Refresh Rate: 3840Hz</li>
                <li>IP Rating: IP31</li>
                <li>Viewing Angle: 140°</li>
              </ul>
            </div>
            <div className="spec-card">
              <h3>Outdoor P4.8</h3>
              <ul>
                <li>Pixel Pitch: 4.8mm</li>
                <li>Brightness: 5500 nits</li>
                <li>Refresh Rate: 1920Hz</li>
                <li>IP Rating: IP65</li>
                <li>Viewing Angle: 140°</li>
              </ul>
            </div>
            <div className="spec-card">
              <h3>Outdoor P6.7</h3>
              <ul>
                <li>Pixel Pitch: 6.7mm</li>
                <li>Brightness: 6000 nits</li>
                <li>Refresh Rate: 1920Hz</li>
                <li>IP Rating: IP65</li>
                <li>Viewing Angle: 140°</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LedDisplay
