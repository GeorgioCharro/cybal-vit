import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  examples: string;
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
              <span>Why choose us</span>
              <h2>
              Comprehensive Solutions For A Safer Digital World
              </h2>
              <p className="lead mt-3">
                As cyber threats become more sophisticated, organizations require a holistic
                approach to mitigate risks. Our expertise ensures your business stays secure
                and compliant.
              </p>
            </div>
          </div>
          {/* Feature Cards */}
          <div className="row">
            {/* Left Column */}
            <div className="col-md-6">
              <FeatureCard
                title="Threat Intelligence"
                description="Gaining insights into potential threats."
                examples="TIP, SIEM, SOAR."
              />
              <FeatureCard
                title="Incident Response and Management"
                description="Detecting, analyzing, and responding to incidents."
                examples="Incident Response Platforms, Forensics Tools."
              />
              <FeatureCard
                title="Security Awareness and Training"
                description="Educating users to reduce human error."
                examples="Phishing Simulation, Awareness Platforms."
              />
              <FeatureCard
                title="AI-Powered Cybersecurity"
                description="Enhancing threat detection, response, and prevention using AI."
                examples="AI-driven Threat Intelligence, Autonomous Response Systems."
              />
            </div>
            {/* Right Column */}
            <div className="col-md-6">
              <FeatureCard
                title="Vulnerability and Risk Management"
                description="Identifying, assessing, and mitigating risks."
                examples="Vulnerability Scanners, Risk Assessment Tools."
              />
              <FeatureCard
                title="Cyber Threat Hunting"
                description="Proactively identifying and mitigating hidden threats."
                examples="Threat Hunting Platforms, Behavioral Analytics."
              />
              <FeatureCard
                title="Compliance and Governance"
                description="Ensuring adherence to regulations and policies."
                examples="Compliance Platforms, Audit Tools."
              />
              <FeatureCard
                title="Machine Learning & Predictive Analytics"
                description="Using machine learning to forecast future trends."
                examples="Fraud Detection, Predictive Maintenance."
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
const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, examples }) => (
  <div className="feature-card">
    <h4>{title}</h4>
    <p>{description}</p>
    <p>
      <strong>Examples:</strong> {examples}
    </p>
  </div>
);

export default ChooseAreaHomeOne;
