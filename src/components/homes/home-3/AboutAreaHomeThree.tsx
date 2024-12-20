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
                    In a rapidly evolving digital landscape, our mission is to fortify and transform businesses by
                    harnessing the power of advanced cybersecurity measures and artificial intelligence. We
                    are committed to safeguarding our clients' digital assets and ensuring robust protection
                    against ever-evolving cyber threats.
                  </p>
                  <p className="text-lg">
                    We provide advanced solutions and strategies that not only defend against current cyber
                    threats but also predict future risks.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-3 mt-3">
                      <strong style={{ fontSize: "1.25rem", color: "#ffffff" }}>
                        Comprehensive Cybersecurity Solutions:
                      </strong>{" "}
                      Cutting-edge threat detection, protection, and response solutions across a multicloud
                      environment.
                    </li>
                    <li className="mb-3">
                      <strong style={{ fontSize: "1.25rem", color: "#ffffff" }}>
                        AI-Driven Business Transformation Solutions:
                      </strong>{" "}
                      Leverage the power of artificial intelligence to drive innovation, efficiency, and sustainable growth.
                    </li>
                    <li>
                      <strong style={{ fontSize: "1.25rem", color: "#ffffff" }}>
                        Consultancy and Training Services:
                      </strong>{" "}
                      Our tailored approach will help your organization build a robust cybersecurity framework,
                      enhance employee awareness, and ensure compliance with industry standards.
                    </li>
                  </ul>
                  <p className="text-lg">
                    By integrating state-of-the-art AI technologies, we empower businesses to be always
                    prepared, always protected, and always one step ahead, transforming potential
                    vulnerabilities into strengths.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="vision"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg mb-3 mt-3" style={{fontWeight: "bold"}}>
                    Empowering Businesses Through Cybersecurity and AI Partnership
                  </p>
                  <p className="text-lg">
                    Our vision is to be the trusted digital partner for businesses, leveraging cutting-edge
                    cybersecurity and artificial intelligence solutions to drive transformative growth and
                    resilience. We aim to create a collaborative ecosystem where innovation, security, and
                    intelligence converge, enabling organizations to navigate the digital landscape with
                    confidence and agility.
                  </p>
                  <p className="text-lg">
                    We envision a future where businesses are not just protected from threats but are
                    empowered to harness the full potential of AI to make smarter, data-driven decisions.
                  </p>
                  <p className="text-lg">
                    Our commitment is to build lasting partnerships, providing tailored solutions that meet the
                    unique needs of each organization. Together, we will pioneer new standards of digital
                    security and intelligence, ensuring that our partners are equipped to succeed in an ever-
                    evolving digital world.
                  </p>
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
              color: isMission ? "#0d6efd" : "#ced4da",
              cursor: "pointer",
            }}
            onClick={() => setIsMission(true)}
          ></i>
          <i
            className={`bi ${!isMission ? "bi-circle-fill" : "bi-circle"} mx-2`}
            style={{
              fontSize: "1.5rem",
              color: !isMission ? "#0d6efd" : "#ced4da",
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
