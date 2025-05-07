import "../styles/Pages.css"

function AvIntegration() {
  return (
    <div className="page-container av-integration-page">
      <div className="page-header">
        <h1>AV Integration</h1>
      </div>

      <div className="page-content">
        <section className="content-section">
          <div className="section-image">
            <img src="https://via.placeholder.com/600x400/3a3a9f/ffffff?text=AV+Integration" alt="AV Integration" />
          </div>
          <div className="section-text">
            <h2>Comprehensive AV Integration</h2>
            <p>
              Softech Group specializes in seamless audio-visual integration solutions that bring together multiple
              technologies into cohesive, easy-to-use systems. Our integration services help transform spaces into
              highly functional environments that enhance communication, collaboration, and presentation capabilities.
            </p>
            <p>
              With careful planning, precise execution, and attention to detail, we ensure that your AV systems work
              flawlessly together while meeting your specific needs and requirements.
            </p>
          </div>
        </section>

        <section className="content-section reverse">
          <div className="section-image">
            <img
              src="https://via.placeholder.com/600x400/4a1a7f/ffffff?text=Corporate+Solutions"
              alt="Corporate Solutions"
            />
          </div>
          <div className="section-text">
            <h2>Corporate AV Solutions</h2>
            <p>Our corporate AV integration services include:</p>
            <ul className="feature-list">
              <li>Conference room systems</li>
              <li>Boardroom solutions</li>
              <li>Training and learning spaces</li>
              <li>Huddle rooms and collaboration areas</li>
              <li>Digital signage and information displays</li>
              <li>Unified communications systems</li>
              <li>Control system programming and integration</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <div className="section-image">
            <img src="https://via.placeholder.com/600x400/6a2a9f/ffffff?text=Commercial+AV" alt="Commercial AV" />
          </div>
          <div className="section-text">
            <h2>Commercial & Public Spaces</h2>
            <p>We provide AV integration for various commercial and public environments:</p>
            <ul className="feature-list">
              <li>Retail and hospitality spaces</li>
              <li>Museums and exhibition halls</li>
              <li>Educational institutions</li>
              <li>Healthcare facilities</li>
              <li>Government buildings</li>
              <li>Houses of worship</li>
              <li>Entertainment venues</li>
            </ul>
          </div>
        </section>

        <section className="process-section">
          <h2>Our Integration Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation & Needs Analysis</h3>
              <p>
                We begin by understanding your requirements, objectives, and constraints to develop a clear picture of
                your needs.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>System Design</h3>
              <p>
                Our engineers design a comprehensive AV system that meets your functional requirements while staying
                within budget.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Installation & Integration</h3>
              <p>
                Our skilled technicians handle the physical installation and integration of all AV components and
                systems.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Programming & Configuration</h3>
              <p>
                We program control systems, configure equipment, and ensure all components work together seamlessly.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Testing & Commissioning</h3>
              <p>Rigorous testing ensures all systems function as intended before final handover.</p>
            </div>
            <div className="process-step">
              <div className="step-number">6</div>
              <h3>Training & Support</h3>
              <p>We provide comprehensive training for your staff and ongoing support to ensure long-term success.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AvIntegration
