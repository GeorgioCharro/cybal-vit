import { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPopup from '../../../modals/VideoPopup';

const HeroAreaHomeOne = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <section
        className="home_bg hb_height"
        style={{
          backgroundImage: `url(/assets/img/bg/home-bg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12 col-xs-12">
              <div className="hero-text ht_top">
                <h1>Welcome to CyberMorph Technologies, where innovation meets security.</h1>

                {/* Full Subtitle for Large Screens */}
                <p className="d-none d-md-block">
                  We specialize in delivering state of the art Cybersecurity and Artificial
                  Intelligence solutions tailored to empower businesses across the region. At
                  CyberMorph, we redefine the future of digital resilience and intelligence,
                  ensuring that our partners & customers thrive in an ever evolving technological
                  landscape.
                </p>

                {/* Condensed Subtitle for Small Screens */}
                <p className="d-block d-md-none">
                  We specialize in delivering state of the art Cybersecurity and Artificial
                  Intelligence solutions tailored to empower businesses across the region.
                </p>
              </div>
              <div className="home_btns">
                <Link to="/about" className="btn_one">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={'i810CxN5Q6Q'}
      />
      {/* Video modal end */}

      {/* Inline Styles */}
      <style>{`
        .btn_one {
          display: inline-block;
          background: #00bcd4;
          color: #fff;
          padding: 10px 20px;
          border-radius: 5px;
          transition: background 0.3s ease;
        }

        .btn_one:hover {
          background: #0097a7;
          text-decoration: none;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default HeroAreaHomeOne;
