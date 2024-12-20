import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const AboutAreaHomeThree = () => {
  const [isMission, setIsMission] = useState(true);

  return (
    <section className="py-5 text-light">
      <div className="container">
        {/* Top Section - Heading */}
        <div className="text-center mb-5">
          <div className="section-title">
            <span>{isMission ? "Our Mission" : "Our Vision"}</span>
          </div>
        </div>

        <div className="row d-flex align-items-start">
          {/* Left Section - Icon/Image */}
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <div className="d-flex justify-content-center align-items-center mx-auto position-relative responsive-container">
              <img
                src="assets/img/cybermorphlock.png"
                alt="Cyber Security Logo"
                className="img-fluid responsive-icon"
              />
              {/* Dotted Circle */}
              <div
                className="position-absolute responsive-circle"
                style={{
                  borderRadius: "100%",
                  border: "5px dotted #fff",
                }}
              ></div>
            </div>
          </div>

          {/* Right Section - Content with Animation */}
          <div className="col-lg-6">
            <AnimatePresence mode="wait">
              {isMission ? (
                <motion.div
                  key="mission"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg">
                    At CyberMorph Technologies, our mission is clear and transformative: to redefine
                    how businesses protect their critical assets and embrace the potential of
                    AI-driven innovation. We integrate advanced cybersecurity strategies with
                    cutting-edge artificial intelligence to empower organizations to strengthen
                    resilience, adapt to challenges, and seize opportunities.
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
                      Harness the power of artificial intelligence to drive innovation and
                      efficiency.
                    </li>
                    <li>
                      <strong style={{ fontSize: "1.25rem", color: "#ffffff" }}>
                        Customized Consulting and Support:
                      </strong>{" "}
                      Tailored guidance and expert services designed to meet your unique needs.
                    </li>
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  key="vision"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg">
                    At CyberMorph Technologies, our vision is to lead the evolution of the digital
                    world by enabling businesses to operate in a safer, smarter, and more innovative
                    environment. We envision a future where organizations thrive through the seamless
                    integration of technology, security, and creativity.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-3 mt-3">
                      <strong style={{ fontSize: "1.25rem", color: "#ffffff" }}>
                        Digital Leadership:
                      </strong>{" "}
                      Become a global leader in secure digital transformation.
                    </li>
                    <li className="mb-3">
                      <strong style={{ fontSize: "1.25rem", color: "#ffffff" }}>
                        Resilient Innovation:
                      </strong>{" "}
                      Inspire progress by fostering resilience and creativity.
                    </li>
                    <li>
                      <strong style={{ fontSize: "1.25rem", color: "#ffffff" }}>
                        Ethical AI Integration:
                      </strong>{" "}
                      Shape a future where artificial intelligence is used responsibly to enhance
                      humanity.
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Toggle Dots Below Content */}
        <div className="text-center mt-5">
          <i
            className={`bi ${isMission ? "bi-circle-fill" : "bi-circle"} mx-2`}
            style={{
              fontSize: "1.5rem",
              color: isMission ? "#0d6efd" : "#ced4da", // Active: Primary, Inactive: Light Gray
              cursor: "pointer",
            }}
            onClick={() => setIsMission(true)}
          ></i>
          <i
            className={`bi ${!isMission ? "bi-circle-fill" : "bi-circle"} mx-2`}
            style={{
              fontSize: "1.5rem",
              color: !isMission ? "#0d6efd" : "#ced4da", // Active: Primary, Inactive: Light Gray
              cursor: "pointer",
            }}
            onClick={() => setIsMission(false)}
          ></i>
        </div>
      </div>

      {/* Inline Styles */}
      <style>{`
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
          animation: rotate 10s linear infinite; 
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .responsive-container {
            width: 250px;
            height: 250px;
          }
          .responsive-icon {
            max-width: 100px;
          }
        }

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
