import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@softechgroup.com</p>
          <p>Phone: +91 1234567890</p>
          <p>Address: Softech Group, India</p>
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
            <a href="#" className="social-icon facebook"></a>
            <a href="#" className="social-icon twitter"></a>
            <a href="#" className="social-icon instagram"></a>
            <a href="#" className="social-icon linkedin"></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 CGI-TECH. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
