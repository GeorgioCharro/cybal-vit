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
                <h1>Welcome to CyberMorph Technologies</h1><br />
                <h2 className='mb-3'>Where innovation meets security</h2>

                {/* Full Subtitle for Large Screens */}
                <p className="d-none d-md-block">
                CyberMorph value added distributer VAD  specialize in providing cutting-edge Cybersecurity and Artificial Intelligence solutions designed to empower businesses throughout the region.
                </p>

                {/* Condensed Subtitle for Small Screens */}
                <p className="d-block d-md-none">
                CyberMorph value added distributer VAD  specialize in providing cutting-edge Cybersecurity and Artificial Intelligence solutions designed to empower businesses throughout the region.
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
    </>
  );
};

export default HeroAreaHomeOne;
