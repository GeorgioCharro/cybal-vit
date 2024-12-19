const NewsletterAreaHomeOne = () => {
  return (
    <>
      <section className="newsletter_area section-padding" style={{ backgroundColor: '#14192D' }}>
        <div className="container">
          <div className="row text-center">
            <div
              className="col-lg-10 offset-lg-1 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="subs_form">
                <h3 style={{ color: 'white' }}>Subscribe to our newsletter, We don't make any spam.</h3>
                <p style={{ color: 'white' }}>
                  Stay updated with the latest news. We promise — no spam, just the good stuff... like a perfectly baked
                  pizza in your inbox!
                </p>
                <form onClick={(e) => e.preventDefault()} className="home_subs">
                  <div className="input-group" style={{ borderRadius: '25px', overflow: 'hidden' }}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Email Address"
                      aria-label="Email Address"
                      style={{
                        border: 'none',
                        borderRadius: '0',
                        padding: '20px',
                        color: 'white', // Input text color
                        backgroundColor: '#14192D', // Transparent background for input
                      }}
                    />
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{
                        border: 'none',
                        borderRadius: '0',
                        backgroundColor: '#5fb7bf',
                        width: '20%', // Responsive width (percentage)
                        minWidth: '100px', // Ensures a minimum size
                      }}
                    >
                      <i
                        className="ti-new-window"
                        style={{
                          fontSize: '24px', // Increase the size of the icon
                        }}
                      ></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .form-control::placeholder {
          color: white; /* Placeholder color set to white */
        }

        @media (max-width: 768px) {
          .btn.btn-primary {
            width: 30%; /* Adjust size for smaller screens */
          }
        }

        @media (max-width: 576px) {
          .btn.btn-primary {
            width: 50%; /* Further adjust size for extra small screens */
          }
        }
      `}</style>
    </>
  );
};

export default NewsletterAreaHomeOne;
