const AboutAreaHomeThree = () => {
  return (
    <section className="py-5 text-light">
      <div className="container">
        {/* Top Section - Heading */}
        <div className="text-center mb-5">
          <div className="section-title">
            <span>About the CyberMorph Logo</span>
          </div>
        </div>

        <div className="row d-flex align-items-start">
          {/* Left Section - Icon/Image */}
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <div className="d-flex justify-content-center align-items-center mx-auto position-relative responsive-container">
              <img
                src="assets/img/cybermorphlock.png"
                alt="CyberMorph Logo"
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

          {/* Right Section - Content */}
          <div className="col-lg-6">
            <div className="ab_content">
              <p className="text-lg">
                The CyberMorph logo visually represents themes related to cybersecurity, transformation, and technology. Here’s a breakdown of its meaning:
              </p>
              <ul className="list-unstyled">
                <li className="mb-3 mt-3">
                  <strong style={{ fontSize: "1.25rem", color: "#ffffff" }}>
                    Shield-Like Structure:
                  </strong>
                  The overall shape still resembles a shield, symbolizing protection and security, which are the core elements of cybersecurity.
                </li>
                <li className="mb-3">
                  <strong style={{ fontSize: "1.25rem", color: "#ffffff" }}>
                    Data Nodes Representation:
                  </strong>
                  Instead of generic network nodes, the interconnected dots now represent key data nodes in cybersecurity:
                  <ul className="list-unstyled ms-3">
                    <li><i className="bi bi-diagram-3"></i> <strong>Network</strong></li>
                    <li><i className="bi bi-shield-lock"></i> <strong>Endpoint</strong></li>
                    <li><i className="bi bi-cloud"></i> <strong>Cloud</strong></li>
                    <li><i className="bi bi-window"></i> <strong>Application</strong></li>
                    <li><i className="bi bi-person"></i> <strong>End User</strong></li>
                  </ul>
                  This highlights CyberMorph’s comprehensive coverage of all critical digital areas that need protection.
                </li>
                <li className="mb-3">
                  <strong style={{ fontSize: "1.25rem", color: "#ffffff" }}>
                    Central Lock Icon:
                  </strong>
                  At the center of the shield is a lock symbol, representing security, trust, and protection of data across these interconnected nodes.
                </li>
                <li>
                  <strong style={{ fontSize: "1.25rem", color: "#ffffff" }}>
                    Connections Between Nodes:
                  </strong>
                  The lines connecting the nodes emphasize the interdependency of these data points in a secure and well-structured digital ecosystem.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Styles */}
      <style>{`
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
          animation: rotate 10s linear infinite; /* Rotation Animation */
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
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
