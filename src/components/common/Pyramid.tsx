const Pyramid = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Text Content */}
        <div className="col-12 col-md-6 order-0 order-md-0 mt-4 mt-md-0 text-white">
          <div className="section-title mb-4">
            <h2
              className="fw-bold text-center text-md-start"
              style={{ fontSize: "1.5rem" }}
            >
              At CyberMorph Technologies, our mission is clear and transformative:
            </h2>
            <h5 className="text-center text-md-start">
              We empower businesses by strengthening their cybersecurity posture, fostering innovation, and driving success through collaboration with customers, partners, and vendors.
            </h5>
          </div>

          {/* Customers */}
          <div>
            <h4 className="d-flex align-items-center mb-2 fw-bold numbered-title">
              <span className="me-2 number">1.</span> Customers
            </h4>
            <p className="small">
              Representing the foundation of our pyramid, our customers are the cornerstone of CyberMorph's success. We deliver personalized solutions to safeguard their digital environments.
            </p>
          </div>

          {/* Partners */}
          <div className="mt-4">
            <h4 className="d-flex align-items-center mb-2 fw-bold numbered-title">
              <span className="me-2 number">2.</span> Partners
            </h4>
            <p className="small">
              Positioned in the middle of the pyramid, our partners strengthen our ecosystem, enabling collaboration and innovation to provide cutting-edge cybersecurity solutions.
            </p>
          </div>

          {/* Vendors */}
          <div className="mt-4">
            <h4 className="d-flex align-items-center mb-2 fw-bold numbered-title">
              <span className="me-2 number">3.</span> Vendors
            </h4>
            <p className="small">
              At the top of the pyramid, our vendors play a critical role by delivering advanced technologies that solve our customers' biggest challenges. From cybersecurity solutions to AI-driven tools, we ensure businesses are equipped to secure, scale, and thrive in an increasingly complex digital world.
            </p>
          </div>
        </div>

        {/* Pyramid Image */}
        <div className="col-12 col-md-6 order-1 order-md-1 d-flex justify-content-center mt-4 mt-md-0">
          <img
            src="assets/img/pyramid.png"
            alt="Pyramid"
            className="img-fluid"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>
      </div>

      {/* Inline Styles */}
      <style>{`
        /* Numbered Titles */
        .numbered-title {
          display: flex;
          align-items: center;
        }

        .number {
          font-size: 1.5rem; /* Number Size */
          font-weight: bold;
          color: #00e5ff; /* Cyan color matching the checkmark */
        }

        @media (max-width: 576px) {
          .number {
            font-size: 1.2rem; /* Reduce size for small screens */
          }
          .numbered-title {
            font-size: 1rem; /* Make titles smaller on small screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Pyramid;
