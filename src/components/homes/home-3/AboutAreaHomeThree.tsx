import { motion } from "framer-motion";

const AboutAreaHomeThree = () => {
  return (
    <section className="py-5 text-light">
      <div className="container">
        {/* Top Section - Heading and Mission */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="section-title">
                <span>Our Mission</span>
              </div>
        </motion.div>

        <div className="row d-flex align-items-start">
          {/* Left Section - Icon/Image */}
          <motion.div
            className="col-lg-6 text-center mb-4 mb-lg-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div
              className="d-flex justify-content-center align-items-center mx-auto position-relative responsive-container"
            >
              <img
                src="assets/img/cybermorphlock.png"
                alt="Cyber Security Logo"
                className="img-fluid responsive-icon"
                style={{
                  position: "absolute",
                  zIndex: "2",
                }}
              />
              {/* Dotted Circle */}
              <div
                className="position-absolute responsive-circle"
                style={{
                  borderRadius: "100%",
                  border: "5px dotted #fff",
                  animation: "spin 10s linear infinite",
                  zIndex: "1",
                }}
              ></div>
            </div>
          </motion.div>

          {/* Right Section - Content */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="ab_content">
              <p className="text-lg">
                Our mission is simple yet impactful: to revolutionize how businesses safeguard their assets and embrace AI-driven innovation. By combining cutting-edge cybersecurity solutions with transformative AI technologies, we help our clients build resilience, adapt to change, and unlock new opportunities in a rapidly evolving landscape.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3 mt-3">
                  <strong style={{ fontSize: "1.25rem", color: "#ffffff" }}>
                    Advanced Cybersecurity Solutions:
                  </strong>{" "}
                  Proactively protect your business with next-generation defense strategies.
                </li>
                <li className="mb-3">
                  <strong style={{ fontSize: "1.25rem", color: "#ffffff" }}>
                    AI-Driven Business Transformation:
                  </strong>{" "}
                  Harness the power of artificial intelligence to drive innovation and efficiency.
                </li>
                <li>
                  <strong style={{ fontSize: "1.25rem", color: "#ffffff" }}>
                    Customized Consulting and Support:
                  </strong>{" "}
                  Tailored guidance and expert services designed to meet your unique needs.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Inline Styles */}
      <style>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Default Container and Circle Size */
        .responsive-container {
          width: 350px;
          height: 350px;
        }

        .responsive-icon {
          max-width: 140px;
        }

        .responsive-circle {
          width: 100%;
          height: 100%;
        }

        /* Smaller Screens - Tablets */
        @media (max-width: 768px) {
          .responsive-container {
            width: 250px;
            height: 250px;
          }
          .responsive-icon {
            max-width: 100px;
          }
        }

        /* Small Mobile Screens */
        @media (max-width: 576px) {
          .responsive-container {
            width: 200px;
            height: 200px;
          }
          .responsive-icon {
            max-width: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutAreaHomeThree;
