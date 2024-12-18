import React from "react";
import { Link } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface BlogAreaProps {
  hide?: boolean;
}

const BlogArea: React.FC<BlogAreaProps> = ({ hide = true }) => {
  if (hide) {
    return (
      <div className="text-center py-5">
        <DotLottieReact src="assets/img/rocketLaunching.lottie" loop autoplay />
        <div className="mt-4">
          <p className="fw-bold fs-4" style={{ color: "#127176" }}>
            🚀 Exciting updates coming soon!
          </p>
          <p className=" fs-5">
            We will start showing new blogs at the start of 
            <strong> 1/1/2025</strong>. Stay tuned for fresh content!
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_blog">
                <img
                  src="assets/img/blog/1.jpg"
                  className="img-fluid"
                  alt="Blog 1"
                />
                <span>
                  <Link to="/blog-details">Security</Link>
                </span>
                <span>February 15, 2024</span>
                <h3>
                  <a href="#">
                    How can you improve your business policy for better products.
                  </a>
                </h3>
                <a href="#" className="blog_btn">
                  View Details <i className="ti-arrow-top-right"></i>
                </a>
              </div>
            </div>
            {/* Add additional blog cards here as in your original code */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;
