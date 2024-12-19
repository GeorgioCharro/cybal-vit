const AboutAreaHomeThree = () => {
  return (
    <section className="py-5 text-light">
      <div className="container">
        {/* Top Section - Heading and Mission */}
        <div className="text-center mb-5">
          <div className="section-title">
            <span>Our Mission</span>
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

          {/* Right Section - Content */}
          <div className="col-lg-6">
            <div className="ab_content">
              <p className="text-lg">
              At CyberMorph Technologies, our mission is clear and transformative, to redefine how businesses protect their critical assets and embrace the potential of AI-driven innovation, by integrating advanced cybersecurity strategies with cutting-edge artificial intelligence. We empower organizations to strengthen their resilience, adapt to dynamic challenges, and seize new opportunities in today’s fast-paced digital world.
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
