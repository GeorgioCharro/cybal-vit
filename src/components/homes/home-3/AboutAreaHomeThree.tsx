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
          <h2>This Is 24/7 Cyber Security Operation Center For Your Problem Solution..</h2>
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
              className="d-flex justify-content-center align-items-center mx-auto position-relative"
              style={{
                width: "350px",
                height: "350px",
              }}
            >
              <img
                src="assets/img/cybershaded.png"
                alt="Cyber Security Logo"
                className="img-fluid"
                style={{
                  maxWidth: "140px",
                  position: "absolute",
                  zIndex: "2",
                }}
              />
              {/* Dotted Circle */}
              <div
                className="position-absolute"
                style={{
                  width: "100%",
                  height: "100%",
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
              {/* Paragraph Explaining the Logo */}
              <div className="d-flex align-items-start mb-4">
                <h5 className="me-3">
                  <i className="bi bi-lock-fill" style={{ color: "#fff" }}></i>
                </h5>
                <div>
                  <h5 className="mb-1">The Lock Represents You</h5>
                  <p className="mb-0">
                    The lock at the center symbolizes the user and the importance
                    of securing their digital presence.
                  </p>
                </div>
              </div>

              {/* Four Bordered Circles with Explanations */}
              <div className="mb-4">
                <div className="d-flex align-items-start mb-3">
                  <h5 className="me-3">
                    <i
                      className="bi bi-circle"
                      style={{
                        color: "transparent",
                        border: "2px solid #fff",
                        borderRadius: "50%",
                      }}
                    ></i>
                  </h5>
                  <p className="mb-0">
                    <strong>Networking Security:</strong> Protecting your network
                    infrastructure from unauthorized access, misuse, or theft.
                  </p>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <h5 className="me-3">
                    <i
                      className="bi bi-circle"
                      style={{
                        color: "transparent",
                        border: "2px solid #299da0",
                        borderRadius: "50%",
                      }}
                    ></i>
                  </h5>
                  <p className="mb-0">
                    <strong>Email Security:</strong> Ensuring the safety of
                    communication channels and protecting against phishing or
                    spam threats.
                  </p>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <h5 className="me-3">
                    <i
                      className="bi bi-circle"
                      style={{
                        color: "transparent",
                        border: "2px solid #487578",
                        borderRadius: "50%",
                      }}
                    ></i>
                  </h5>
                  <p className="mb-0">
                    <strong>Web Security:</strong> Safeguarding your online
                    presence, applications, and users from cyber threats.
                  </p>
                </div>
                <div className="d-flex align-items-start">
                  <h5 className="me-3">
                    <i
                      className="bi bi-circle"
                      style={{
                        color: "transparent",
                        border: "2px solid #71aeae",
                        borderRadius: "50%",
                      }}
                    ></i>
                  </h5>
                  <p className="mb-0">
                    <strong>Cloud Security:</strong> Protecting data and
                    applications hosted in the cloud from cyber attacks and
                    breaches.
                  </p>
                </div>
              </div>

              {/* Existing Content */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutAreaHomeThree;
