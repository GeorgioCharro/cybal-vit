const ServiceAreaHomeThree = () => {
  return (
    <>
      <section className="service_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="section-title">
                <h2 className="text-lg-nowrap">
                  Technology solutions offering
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
                  We help secure your critical network infrastructure to ensure data integrity, availability, and confidentiality. Our solutions address modern threats while enabling secure and efficient operations.
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
                  src="assets/img/service7.png"
                  className="img-fluid"
                  alt="image"
                />
                <h2>Cloud Security</h2>
                <p>
                  Our cloud security solutions ensure the protection of your cloud infrastructure, data, and applications while maintaining compliance and visibility across hybrid and multi-cloud environments.
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
                <h2>Application Security</h2>
                <p>
                  We secure your applications across their entire lifecycle—from development to production—protecting against vulnerabilities, misconfigurations, and emerging attacks.
                </p>
              </div>
            </div>
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
                <h2>Endpoint Security</h2>
                <p>
                  We secure your endpoints—laptops, servers, and mobile devices—to defend against advanced cyber threats and ensure operational resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @media (min-width: 992px) {
          .text-lg-nowrap {
            white-space: nowrap;
          }
        }
      `}</style>
    </>
  );
};

export default ServiceAreaHomeThree;
