import { Link } from "react-router-dom";

 
const AboutArea = () => {
  return (
    <>
      <section className="ab_one section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
              <div className="ab_content">
                <span>Services we provide</span>
                <h2>CyberMorph Provides 3 Main Categories of Services</h2>
              </div>
              <div className="abmv_list">
                <ul>
                  <li><img src="assets/img/check.png" alt="" /> Morph AI Integration: Advanced AI solutions tailored for your business needs.</li>
                  <li><img src="assets/img/check.png" alt="" /> Professional Services: Expert engineering, support, and consultation services.</li>
                  <li><img src="assets/img/check.png" alt="" /> Comprehensive Support: 24/7 technical assistance and security solutions.</li>
  
                </ul>
              </div>
              <div className="skill_btn">
                
                <Link to="/contact" className="btn_two">Contact with us <i className="ti-arrow-top-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="ab_img ai_top">
                <img src="assets/img/about3.png" className="img-fluid" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;