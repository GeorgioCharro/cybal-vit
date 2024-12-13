const ServiceAreaHomeThree = () => {
  return (
    <>
      <section className="service_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="section-title">
                <span>Our Portfolio</span>
                <h2>
                  What we do for your <br />
                  Cyber security solutions
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Network Security */}
            <div
              className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_service">
                <img
                  src="assets/img/service4.png"
                  className="img-fluid"
                  alt="image"
                />
                <h2>Network Security</h2>
                <p>
                  Protect your organization's network from unauthorized access,
                  breaches, and attacks with our cutting-edge solutions.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div
              className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_service">
                <img
                  src="assets/img/service5.png"
                  className="img-fluid"
                  alt="image"
                />
                <h2>Data Security</h2>
                <p>
                  Safeguard sensitive data from cyber threats with robust
                  encryption, backup, and recovery strategies.
                </p>
              </div>
            </div>

            {/* App Security */}
            <div
              className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_service">
                <img
                  src="assets/img/service6.png"
                  className="img-fluid"
                  alt="image"
                />
                <h2>App Security</h2>
                <p>
                  Ensure your applications are secure by addressing
                  vulnerabilities and providing real-time protection.
                </p>
              </div>
            </div>

            {/* Governance and Risk Services */}
            <div
              className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_service">
                <img
                  src="assets/img/service7.png"
                  className="img-fluid"
                  alt="image"
                />
                <h2>Governance and Risk Services</h2>
                <p>
                  Manage compliance, mitigate risks, and ensure governance with
                  comprehensive security frameworks and strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaHomeThree;
