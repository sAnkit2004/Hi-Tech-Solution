import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: hitechaudiovisual23@gmail.com</p>
          <p>Phone: +91 95550 06889</p>
          <p>Address: S-466    School Block Laxmi Nagar, New Delhi</p>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>AV Shows & Events</li>
            <li>LED Display</li>
            <li>AV Integration</li>
            <li>Home Theatre</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/hitechaudiovisuals" className="social-icon facebook"></a>
           
            <a href="https://www.instagram.com/hitechaudiovisuals?utm_source=qr&igsh=emFuaXhsdGd4M214" className="social-icon instagram"></a>
            <a href="https://in.linkedin.com/company/hitechaudiovisual" className="social-icon linkedin"></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-left">&copy; 2024 HI-TECH. All Rights Reserved.</p>
        <p className="footer-right">
          Designed by: <a href="https://www.compilego.com" target="_blank" rel="noopener noreferrer">CompileGo Technologies</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
