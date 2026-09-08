

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <div>
            <span>CONTACT BHUSETHU</span>
            <h2>Let's Talk About Your Property</h2>
          </div>

          <p>
            Tell us what you need help with and we'll guide you
            towards the right next step.
          </p>
        </div>

        <div className="contact-content">

          <form className="contact-form">

            <div className="form-row">

              <div className="form-group">
                <label>YOUR NAME</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

            </div>

            <div className="form-group">
              <label>PHONE NUMBER</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label>WHAT DO YOU NEED HELP WITH?</label>

              <select defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option>Property Buying Assistance</option>
                <option>Property Due Diligence</option>
                <option>Property Issue Resolution</option>
                <option>Property Selling Assistance</option>
                <option>Real Estate Development</option>
                <option>Property Marketing</option>
              </select>
            </div>

            <div className="form-group">
              <label>MESSAGE</label>

              <textarea
                rows="4"
                placeholder="Tell us briefly about your property or requirement..."
              ></textarea>
            </div>

            <button type="submit" className="contact-button">
              SEND REQUEST
            </button>

          </form>

          <div className="contact-info">

            <div className="contact-image">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80"
                alt="Bhusethu office"
              />
            </div>

            <div className="contact-details">

              <div>
                <span>PHONE</span>
                <a href="tel:+917893024466">
                  +91 7893024466
                </a>
              </div>

              <div>
                <span>EMAIL</span>
                <a href="mailto:support@bhusethu.com">
                  support@bhusethu.com
                </a>
              </div>

              <div>
                <span>OFFICE</span>
                <p>
                  Madhapur
                  <br />
                  Hyderabad, Telangana
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;