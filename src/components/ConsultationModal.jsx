
function ConsultationModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="consultation-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button className="modal-close" onClick={onClose}>
          <i className="bi bi-x-lg"></i>
        </button>

        <div className="modal-heading">
          {/* <span>BHUSETHU</span> */}
          <h2>Let's Talk About Your Property</h2>
          {/* <p>
            Tell us about your requirement and we'll help you
            understand the right next step.
          </p> */}
        </div>

        <form>

          <div className="modal-row">

            <div className="modal-field">
              <label>YOUR NAME</label>
              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>
            
          <div className="modal-field">
            <label>PHONE NUMBER</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>

          </div>


          <div className="modal-field">
              <label>EMAIL</label>
              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

          <div className="modal-field">
            <label>SERVICE NEEDED</label>

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

          <div className="modal-field">
            <label>MESSAGE</label>

            <textarea
              rows="4"
              placeholder="Tell us about your property or requirement..."
            ></textarea>
          </div>

          <button className="modal-submit" type="submit">
            SEND REQUEST
            {/* <i className="bi bi-arrow-up-right"></i> */}
          </button>

        </form>

      </div>
    </div>
  );
}

export default ConsultationModal;