const Pyramid = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Pyramid Image */}
        <div className="col-12 col-md-6 order-1 order-md-0 d-flex justify-content-center">
          <img
            src="assets/img/pyramid.png"
            alt="Pyramid"
            className="img-fluid pyramid-image"
          />
        </div>

        {/* Text Content */}
        <div className="col-12 col-md-6 order-0 order-md-1">
          <div className="section-title">
            <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#fff" }}>
              At Cybermorph, our mission is to empower businesses with robust
              cybersecurity solutions, ensuring trust, safety, and resilience
              in an ever-evolving digital landscape.
            </h2>
          </div>
          <div className="mt-4">
            <h4 className="d-flex align-items-center" style={{ fontSize: "18px", fontWeight: "bold" }}>
              <img
                src="assets/img/check.png"
                alt=""
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              Customers
            </h4>
            <p style={{ color: "#aaa", fontSize: "14px" }}>
              Representing the foundation of our pyramid, our customers are the
              cornerstone of Cybermorph's success. We deliver personalized
              solutions to safeguard their digital environments.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="d-flex align-items-center" style={{ fontSize: "18px", fontWeight: "bold" }}>
              <img
                src="assets/img/check.png"
                alt=""
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              Partners
            </h4>
            <p style={{ color: "#aaa", fontSize: "14px" }}>
              Positioned in the middle of the pyramid, our partners strengthen
              our ecosystem, enabling collaboration and innovation to provide
              cutting-edge cybersecurity solutions.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="d-flex align-items-center" style={{ fontSize: "18px", fontWeight: "bold" }}>
              <img
                src="assets/img/check.png"
                alt=""
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              Regions
            </h4>
            <p style={{ color: "#aaa", fontSize: "14px" }}>
              At the top of the pyramid, regions represent our global reach and
              impact, showcasing Cybermorph's ability to deliver security
              solutions worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* CSS for Responsiveness */}
      <style>{`
        .pyramid-image {
          max-width: 400px; /* Default for large screens */
          height: auto;
        }

        @media (max-width: 768px) {
          .pyramid-image {
            max-width: 200px; /* Smaller size for small screens */
          }
        }

        @media (max-width: 576px) {
          .pyramid-image {
            max-width: 150px; /* Extra small screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Pyramid;