const Pyramid = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Pyramid Image */}
        <div className="col-12 col-md-6 order-1 order-md-0 d-flex justify-content-center mt-4 mt-md-0">
          <img
            src="assets/img/pyramid.png"
            alt="Pyramid"
            className="img-fluid"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>

        {/* Text Content */}
        <div className="col-12 col-md-6 order-0 order-md-1 mt-4 mt-md-0 text-white">
          <div className="section-title mb-4">
            <h2 className="fw-bold" style={{ fontSize: "1.5rem" }}>
              At Cybermorph, our mission is to empower businesses with robust
              cybersecurity solutions, ensuring trust, safety, and resilience
              in an ever-evolving digital landscape.
            </h2>
          </div>
          <div>
            <h4 className="d-flex align-items-center mb-2 fw-bold">
              <img
                src="assets/img/check.png"
                alt="Check"
                className="me-2"
                style={{ width: "20px", height: "20px" }}
              />
              Customers
            </h4>
            <p className="small">
              Representing the foundation of our pyramid, our customers are the
              cornerstone of Cybermorph's success. We deliver personalized
              solutions to safeguard their digital environments.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="d-flex align-items-center mb-2 fw-bold">
              <img
                src="assets/img/check.png"
                alt="Check"
                className="me-2"
                style={{ width: "20px", height: "20px" }}
              />
              Partners
            </h4>
            <p className="small">
              Positioned in the middle of the pyramid, our partners strengthen
              our ecosystem, enabling collaboration and innovation to provide
              cutting-edge cybersecurity solutions.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="d-flex align-items-center mb-2 fw-bold">
              <img
                src="assets/img/check.png"
                alt="Check"
                className="me-2"
                style={{ width: "20px", height: "20px" }}
              />
              Vendors
            </h4>
            <p className="small">
              At the top of the pyramid, our vendors play a critical role by delivering 
              advanced technologies that solve our customers' biggest challenges. From 
              cybersecurity solutions to AI-driven tools, we ensure businesses are equipped 
              to secure, scale, and thrive in an increasingly complex digital world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pyramid;
