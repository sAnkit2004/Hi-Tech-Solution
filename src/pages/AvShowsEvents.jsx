import "../styles/Pages.css"

function AvShowsEvents() {
  return (
    <div className="page-container av-shows-page">
      <div className="page-header">
        <h1>AV Shows & Events</h1>
      </div>

      <div className="page-content">
        <section className="content-section">
          <div className="section-image">
            <img src="https://cdn.prod.website-files.com/609bce19319cf656dfc6a384/675fd012648e0d55b6ffac1c_675fcfeb268874fcd0029dbd_venue%2520setup.png" alt="AV Shows" />
          </div>
          <div className="section-text">
            <h2>Professional Event Solutions</h2>
            <p>
              Softech Group specializes in providing comprehensive audio-visual solutions for events of all sizes. From
              corporate conferences to grand weddings, trade shows to concerts, we handle it all with precision and
              creativity.
            </p>
            <p>
              Our experienced team ensures that every event is executed flawlessly, with state-of-the-art equipment and
              technical expertise that brings your vision to life.
            </p>
          </div>
        </section>

        <section className="content-section reverse">
          <div className="section-image">
            <img src="https://c8.alamy.com/comp/2C8D6GY/audio-visual-backstage-equipment-and-operator-2C8D6GY.jpg" alt="Event Equipment" />
          </div>
          <div className="section-text">
            <h2>Equipment Rental</h2>
            <p>We offer a wide range of high-quality audio-visual equipment for rent, including:</p>
            <ul className="feature-list">
              <li>Professional sound systems</li>
              <li>LED walls and displays</li>
              <li>Projection systems</li>
              <li>Lighting equipment</li>
              <li>Stage setup and trussing</li>
              <li>Recording and streaming equipment</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <div className="section-image">
            <img src="https://www.onservices.com/images/av-production/coca-cola-background2.jpg" alt="Event Management" />
          </div>
          <div className="section-text">
            <h2>Full Event Management</h2>
            <p>Beyond just equipment, we offer complete event management services, including:</p>
            <ul className="feature-list">
              <li>Event planning and consultation</li>
              <li>Technical direction</li>
              <li>On-site support and management</li>
              <li>Content creation and management</li>
              <li>Custom stage and set design</li>
              <li>Post-event reporting and analysis</li>
            </ul>
          </div>
        </section>

        <section className="event-gallery">
          <h2>Our Recent Events</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.stockcake.com/public/5/d/4/5d46c095-db58-42db-b245-df2ea3fd3891_large/corporate-meeting-engagement-stockcake.jpg" alt="Corporate Event" />
              <p>Corporate Conference</p>
            </div>
            <div className="gallery-item">
              <img src="https://i.pinimg.com/736x/96/28/99/962899d3382440ec6fb5b08719e13aec.jpg" alt="Concert" />
              <p>Live Concert Setup</p>
            </div>
            <div className="gallery-item">
              <img src="https://www.weddingsutra.com/images/Vendor_Images/Photographer/lightbucket-productions/light-01.jpg" alt="Wedding" />
              <p>Wedding Production</p>
            </div>
            <div className="gallery-item">
              <img src="https://www.corporateeventorganisers.in/assets/images/services/CYJ-Product%20Launch.png" alt="Product Launch" />
              <p>Product Launch Event</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AvShowsEvents
