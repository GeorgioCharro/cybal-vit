import React from "react";
import CapabilityCard from "./CapabilityCard"; // Adjust the import path as necessary

const KeyCapabilities: React.FC = () => {
  const capabilities = [
    {
      title: "Proven Leadership",
      description:
        "With over 20 years of experience, we deliver cutting-edge cybersecurity solutions, solving businesses' unique challenges effectively.",
    },
    {
      title: "Innovative Approach",
      description:
        "Combining deep expertise with AI-driven technologies, we proactively protect, optimize, and empower your business.",
    },
    {
      title: "Channel-Centric Focus",
      description:
        "We tailor every strategy to align with your goals, ensuring measurable outcomes and maximum satisfaction.",
    },
    {
      title: "Future-Ready Solutions",
      description:
        "Scalable and forward-thinking solutions to help businesses grow and stay ahead of emerging threats.",
    },
  ];

  return (
    <section className="key-capabilities pt-5">
      <div className="container">
        {/* Section Title */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="fw-bold" style={{ letterSpacing: "1px" }}>
              KEY CAPABILITIES
            </h2>
          </div>
        </div>

        {/* Content Cards */}
        <div className="row">
          {capabilities.map((capability, index) => (
            <div className="col-md-4 d-flex align-items-stretch" key={index}>
              <CapabilityCard
                title={capability.title}
                description={capability.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyCapabilities;
