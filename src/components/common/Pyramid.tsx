import { motion } from "framer-motion";

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

        {/* Pyramid Image with Rotating Text */}
        <div className="col-12 col-md-6 order-1 order-md-1 d-flex justify-content-center position-relative mt-4 mt-md-0">
          {/* Rotating Text */}
          <motion.div
            className="rotating-circle"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          >
            <span className="rotating-text text-white">CYBERMORPH</span>
          </motion.div>
          <img
            src="assets/img/pyramid.png"
            alt="Pyramid"
            className="img-fluid pyramid-image"
          />
        </div>
      </div>

      {/* Inline Styles */}
      <style>{`
        /* Default Rotating Circle */
        .rotating-circle {
          position: absolute;
          width: 300px; /* Default size */
          height: 300px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          top: calc(50% - 150px);
          left: calc(50% - 150px);
        }

        .rotating-text {
          position: absolute;
          top: -20px; /* Position text above the circle */
          left: 50%;
          transform: translateX(-50%);
          color: #00e5ff;
          font-weight: bolder;
          font-size: 1.2rem; /* Default font size */
          white-space: nowrap;
        }

        /* Large Screens */
        @media (min-width: 1200px) {
          .rotating-circle {
            width: 500px; /* Larger size */
            height: 500px;
            top: calc(50% - 250px);
            left: calc(50% - 250px);
          }

          .rotating-text {
            font-size: 1.5rem; /* Larger font size */
          }
        }

        /* Medium Screens */
        @media (max-width: 992px) {
          .rotating-circle {
            width: 300px;
            height: 300px;
            top: calc(50% - 150px);
            left: calc(50% - 150px);
          }

          .rotating-text {
            font-size: 1.2rem;
          }
        }

        /* Small Screens */
        @media (max-width: 768px) {
          .rotating-circle {
            width: 350px;
            height: 350px;
            top: calc(50% - 160px);
            left: calc(50% - 150px);
          }

          .rotating-text {
            font-size: 1.5rem; /* Smaller font size */
          }
        }

        /* Extra Small Screens */
        @media (max-width: 576px) {
          .rotating-circle {
            width: 300px;
            height: 300px;
            top: calc(50% - 150px);
            left: calc(50% - 150px);
          }

          .rotating-text {
            font-size: 0.9rem; /* Further reduced text size */
          }
        }
      `}</style>
    </div>
  );
};

export default Pyramid;
