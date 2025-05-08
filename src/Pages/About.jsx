import "../styles/Pages.css"

function About() {
  return (
    <div className="page-container about-page">
      <div className="page-header">
        <h1>About Us</h1>
      </div>

      <div className="page-content">
        <section className="content-section">
          <div className="section-image">
            <img
              src="https://www.shutterstock.com/image-photo/closeup-advanced-audiovisual-control-equipment-600nw-2486932465.jpg"
              alt="About Softech Group"
            />
          </div>
          <div className="section-text">
            <h2>Who We Are</h2>
            <p>
              HI-TECH is a Nationally Recognized premier professional Organisation grown into A Reliable Name in the
              field of Audio-Visuals, Led Displays, Multimedia and Hi-tech Equipment Resource.
            </p>
            <p>
              With more than 24 years of Rich experience in the Audio-Visual industry, Softech has carved a Niche for
              itself in handling Big Shows, Turnkey Solutions and Customized projects.
            </p>
            <p>
              Our scalable Audio Visual offerings provides World Class AV Communication & seamlessly integrated
              Technology solution optimally Customized for diverse range of clientele Through our association with
              globally renowned brands.
            </p>
          </div>
        </section>

        <section className="content-section reverse">
          <div className="section-image">
            <img src="https://varioproductions.com/wp-content/uploads/2018/08/vario_videoworld.jpg" alt="Our Mission" />
          </div>
          <div className="section-text">
            <h2>Our Mission</h2>
            <p>
              To be the leading provider of innovative audio-visual solutions that exceed client expectations through
              cutting-edge technology, exceptional service, and a customer-first approach.
            </p>
            <p>
              We aim to transform spaces with technology that enhances communication, entertainment, and information
              sharing while maintaining the highest standards of quality and reliability.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-image">
            <img src="https://zaicoes-uae.com/wp-content/uploads/2023/11/AUDIO1.jpeg" alt="Our Team" />
          </div>
          <div className="section-text">
            <h2>Our Team</h2>
            <p>
              Our team consists of experienced professionals with deep expertise in audio-visual technology, system
              integration, and event management. With a passion for innovation and customer satisfaction, our team works
              tirelessly to deliver projects that meet and exceed expectations.
            </p>
            <p>
              From technicians to project managers, designers to installers, every member of our team is committed to
              excellence and stays up-to-date with the latest industry trends and technologies.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
