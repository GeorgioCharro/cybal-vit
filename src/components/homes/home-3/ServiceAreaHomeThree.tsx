const ServiceAreaHomeThree = () => {
  return (
    <>
      <section className="service_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="section-title">
                <h2>
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
                Protecting the integrity and usability of networks.
                  
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
                Safeguarding cloud environments and assets.
                
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
                Ensuring security during app development and deployment.
               
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
                  Securing devices connected to the network.
                
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
