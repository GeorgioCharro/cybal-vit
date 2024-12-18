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
              We help businesses protect critical assets and harness AI innovation
              by integrating advanced cybersecurity and AI strategies, enabling
              resilience, adaptability, and growth in a fast-paced digital world.
            </h5>
          </div>

          {/* Enumerated Content */}
          <div>
            <h4 className="d-flex align-items-center mb-2 fw-bold numbered-title">
              <span className="me-2 number">1.</span> Advanced Cybersecurity Solutions
            </h4>
            <p className="small">
              Stay ahead of threats with our next-generation defense strategies.
              We deliver proactive solutions that safeguard your infrastructure,
              data, and operations against an ever-evolving threat landscape.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="d-flex align-items-center mb-2 fw-bold numbered-title">
              <span className="me-2 number">2.</span> AI-Driven Business Transformation
            </h4>
            <p className="small">
              Unlock the full potential of your organization with AI-powered tools
              that drive innovation, optimize efficiency, and deliver actionable
              insights to fuel growth.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="d-flex align-items-center mb-2 fw-bold numbered-title">
              <span className="me-2 number">3.</span> Customized Consulting and Expert Support
            </h4>
            <p className="small">
              Our team offers personalized guidance, specialized services, and
              hands-on expertise to address your unique business challenges. From
              strategy to implementation, we are your trusted partner in success.
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
