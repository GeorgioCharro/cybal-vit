const AboutIntroduction = () => {
  return (
    <>
      <section className="section-padding" style={{ color: '#fff' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-left">
              <h2 className="mb-3" style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
                About CyberMorph
              </h2>
              <hr
                style={{
                  width: '80px',
                  height: '3px',
                  backgroundColor: '#5E9898',
                  border: 'none',
                }}
              />
              <p
                style={{
                  lineHeight: '1.8',
                  fontSize: '1.1rem',
                }}
              >
                We specialize in delivering state-of-the-art{' '}
                <span style={{ fontWeight: 'bold' }}>Cybersecurity</span> and{' '}
                <span style={{ fontWeight: 'bold' }}>Artificial Intelligence</span> solutions tailored
                to empower businesses across the region. At{' '}
                <span style={{ fontWeight: 'bold' }}>CyberMorph</span>, we redefine the future of
                digital resilience and intelligence, ensuring that our partners & customers thrive in
                an ever-evolving technological landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutIntroduction;
