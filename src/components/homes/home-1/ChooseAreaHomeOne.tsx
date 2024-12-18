import KeyCapabilities from "./KeyCapabilities";
import ServiceAreaHomeThree from "../home-3/ServiceAreaHomeThree";
interface FeatureCardProps {
  title: string;
  description: string;
}

const ChooseAreaHomeOne: React.FC = () => {
  return (
    <>
      <section
        className="why_area section-padding"
        style={{
          backgroundColor: "#0D1321",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          color: "#fff",
        }}
      >
        <div className="container">
          {/* Header */}
          <div className="row text-center mb-5">
            <div className="col-12 section-title">
              <span>Why Choose CyberMorph</span>
              {/* New Paragraph */}
              <p className="lead mx-auto" style={{ marginTop: "10px" }}>
                At CyberMorph, we differentiate ourselves from competitors through our 
                AI-driven approach, deep threat intelligence, and customer-centric 
                strategies. We provide proactive solutions, blending cutting-edge 
                technologies with expert insights to ensure unparalleled cybersecurity 
                protection.
              </p>
              <KeyCapabilities />
            </div>
          </div>
          <ServiceAreaHomeThree />
          {/* Feature Cards */}
          <div className="row">
            {/* Left Column */}
            <div className="col-md-6">
              <FeatureCard
                title="Threat Intelligence"
                description="Gaining insights into potential threats."
              />
              <FeatureCard
                title="Incident Response and Management"
                description="Detecting, analyzing, and responding to incidents."
              />
              <FeatureCard
                title="Security Awareness and Training"
                description="Educating users to reduce human error."
              />
              <FeatureCard
                title="AI-Powered Cybersecurity"
                description="Enhancing threat detection, response, and prevention using AI."
              />
            </div>
            {/* Right Column */}
            <div className="col-md-6">
              <FeatureCard
                title="Vulnerability and Risk Management"
                description="Identifying, assessing, and mitigating risks."
              />
              <FeatureCard
                title="Cyber Threat Hunting"
                description="Proactively identifying and mitigating hidden threats."
              />
              <FeatureCard
                title="Compliance and Governance"
                description="Ensuring adherence to regulations and policies."
              />
              <FeatureCard
                title="Machine Learning & Predictive Analytics"
                description="Using machine learning to forecast future trends."
              />
            </div>
          </div>
        </div>

        {/* Inline Styles */}
        <style>{`
          .section-highlight {
            background: #00bcd4;
            color: #fff;
            padding: 5px 15px;
            border-radius: 20px;
            font-weight: bold;
          }

          .lead {
            font-size: 1.1rem;
            color: #ddd;
          }

          .feature-card {
            background: #1B263B;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease;
          }

          .feature-card:hover {
            transform: translateY(-5px);
          }

          .feature-card h4 {
            color: #18FEF542;
            margin-bottom: 10px;
            font-size: 1.2rem;
            font-weight: bold;
          }

          .feature-card p {
            margin-bottom: 5px;
            color: #ccc;
          }

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
      </section>
    </>
  );
};

// Reusable FeatureCard Component with TypeScript Props
const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="feature-card">
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

export default ChooseAreaHomeOne;
