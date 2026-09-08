
function Footer({ onConsult }) {
  return (
    <footer className="footer">

      <div className="footer-experts">

        <div className="footer-title">
          <span>CONTACT BHUSETHU</span>
          <h2>Contact Our Property Experts</h2>
        </div>

        <div className="footer-contact-grid">

          <div className="footer-detail">
            <div className="footer-icon">
              <i className="bi bi-telephone"></i>
            </div>

            <div>
              <span>CALL US 24/7 FOR PROPERTY INQUIRIES</span>
              <a href="tel:+917893024466">
                +91 7893024466
              </a>
            </div>
          </div>

          <div className="footer-detail">
            <div className="footer-icon">
              <i className="bi bi-envelope"></i>
            </div>

            <div>
              <span>EMAIL FOR TITLE VERIFICATION</span>
              <a href="mailto:support@bhusethu.com">
                support@bhusethu.com
              </a>
            </div>
          </div>

          <div className="footer-detail footer-location">
            <div className="footer-icon">
              <i className="bi bi-geo-alt"></i>
            </div>

            <div>
              <span>OUR HEAD OFFICE LOCATION</span>
              <p>
                VSAAS Technologies, CoWork Trendz,
                Madhapur, Hyderabad, TS
              </p>
            </div>
          </div>

        </div>

      </div>

      <div className="footer-lower">

        <div className="consultation-box">

          <h3>
            Consultation Hours
            <br />
            In IST
          </h3>

          <div className="footer-line"></div>

          <div className="hours">
            <span>Week Days (Mon - Fri)</span>
            <strong>10:00 AM - 6:00 PM</strong>
          </div>

          <div className="hours">
            <span>Saturday (Appointment Only)</span>
            <strong>10:00 AM - 6:00 PM</strong>
          </div>

          <div className="hours">
            <span>Sunday</span>
            <strong>Closed</strong>
          </div>

          <button className="footer-button" onClick={onConsult}>
            Book Consultation
          </button>

        </div>

        <div className="quick-links">

          <h3>Quick Property Links</h3>

          <div className="footer-line"></div>

          <div className="links-grid">

            <div>
              <a href="#services">
                <i className="bi bi-arrow-right"></i>
                Land Dispute Resolution
              </a>

              <a href="#services">
                <i className="bi bi-arrow-right"></i>
                Due Diligence Services
              </a>

              <a href="#contact">
                <i className="bi bi-arrow-right"></i>
                Contact Our Legal Team
              </a>

              <a href="#services">
                <i className="bi bi-arrow-right"></i>
                Property Development
              </a>
            </div>

            <div>
              <a href="#about">
                <i className="bi bi-arrow-right"></i>
                About Bhusethu
              </a>

              <a href="#projects">
                <i className="bi bi-arrow-right"></i>
                Project Portfolio
              </a>

              <a href="#services">
                <i className="bi bi-arrow-right"></i>
                All Services
              </a>

              <a href="#news">
                <i className="bi bi-arrow-right"></i>
                Property Insights
              </a>
            </div>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <span>
          VSAAS Technologies - Copyright 2026. All rights reserved.
        </span>
      </div>

    </footer>
  );
}

export default Footer;