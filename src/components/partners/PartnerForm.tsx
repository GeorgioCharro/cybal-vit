
const PartnerForm = () => {
  return (
    <section className="partner_form section-padding" style={{color: "#fff" }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2>Interested In Becoming A Partner?</h2>
          <div style={{ height: "4px", width: "80px", backgroundColor: "#34595C", margin: "0 auto" }}></div>
        </div>
        <form>
          <div className="row">
            {/* Row 1 */}
            <div className="col-md-4 mb-3">
              <label>Your Full Name*</label>
              <input type="text" className="form-control" placeholder="Enter your full name" required />
            </div>
            <div className="col-md-4 mb-3">
              <label>Contact Number*</label>
              <input type="tel" className="form-control" placeholder="Enter your contact number" required />
            </div>
            <div className="col-md-4 mb-3">
              <label>Your Work Email*</label>
              <input type="email" className="form-control" placeholder="Enter your work email" required />
            </div>

            {/* Row 2 */}
            <div className="col-md-6 mb-3">
              <label>Company Name*</label>
              <input type="text" className="form-control" placeholder="Enter your company name" required />
            </div>
            <div className="col-md-6 mb-3">
              <label>Country*</label>
              <input type="text" className="form-control" placeholder="Enter your country" required />
            </div>

            {/* Row 3 */}
            <div className="col-md-12 mb-3">
              <label>What is your existing revenue?*</label>
              <input type="text" className="form-control" placeholder="Enter your revenue" required />
            </div>

            {/* Row 4 */}
            <div className="col-md-12 mb-3">
              <label>Do you have MSSP capability?*</label>
              <input type="text" className="form-control" placeholder="Enter your response" required />
            </div>

            {/* Additional Fields */}
            <div className="col-md-12 mb-3">
              <label>How many years of security experience do you have?*</label>
              <input type="text" className="form-control" placeholder="Enter your years of experience" required />
            </div>
            <div className="col-md-12 mb-3">
              <label>How many customers do you have?*</label>
              <input type="text" className="form-control" placeholder="Enter the number of customers" required />
            </div>
            <div className="col-md-12 mb-3">
              <label>How many sales staff do you have?*</label>
              <input type="text" className="form-control" placeholder="Enter the number of sales staff" required />
            </div>
            <div className="col-md-12 mb-3">
              <label>How many technical staff do you have?*</label>
              <input type="text" className="form-control" placeholder="Enter the number of technical staff" required />
            </div>

            {/* Message Field */}
            <div className="col-md-12 mb-3">
              <label>Your Message*</label>
              <textarea
                rows={6}
                className="form-control"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-md-12 text-center">
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#34595C", border: "none" }}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PartnerForm;
