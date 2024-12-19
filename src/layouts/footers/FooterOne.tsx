import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <>
      <div className="footer section-padding"
        style={{ backgroundImage: `url(assets/img/bg/section-2.jpg)`, backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_footer">
                <Link to="/"><img src="assets/img/cybermorph.png" alt="image-here" width={150} /></Link>
                <div className="">
                  <p><strong>Meydan FZ</strong></p>
                  <p>Dubai, United Arab Emirates</p>
                  <p><a href="mailto:info@cybermorph.ai" style={{ color: "#fff" }}>info@cybermorph.ai</a></p>
                  <p><a href="http://www.cybermorph.ai" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>www.cybermorph.ai</a></p>
                </div>
                <div className="social_profile">
                  <ul>
                    <li><a href="#" className="f_facebook"><i className="ti-facebook" title="Facebook"></i></a></li>
                    <li><a href="#" className="f_twitter"><i className="ti-twitter" title="Twitter"></i></a></li>
                    <li><a href="#" className="f_instagram"><i className="ti-instagram" title="Instagram"></i></a></li>
                    <li><a href="#" className="f_linkedin"><i className="ti-linkedin" title="LinkedIn"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_footer">
                <h4>About Company</h4>
                <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Blog & news</a></li>
                  <li><a href="#">Our Portfolio</a></li>
                  <li><a href="#">Contact us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_footer">
                <h4>Our services</h4>
                <ul>
                  <li><a href="#">Network Protection</a></li>
                  <li><a href="#">Cloud Security</a></li>
                  <li><a href="#">Applications Security</a></li>
                  <li><a href="#">Endpoint security</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row fc">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="footer_copyright">
                <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="footer_menu">
                <ul>
                  <li><a href="#">Terms of use</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterOne;
