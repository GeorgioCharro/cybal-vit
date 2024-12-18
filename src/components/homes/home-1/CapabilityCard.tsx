import React from "react";

interface CapabilityCardProps {
  title: string;
  description: string;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ title, description }) => {
  return (
    <div className="card bg-transparent border-0 shadow-none h-80 w-80">
      <div
        className="card-body d-flex flex-column justify-content-center align-items-center text-center"
      >
        <div
          className="mb-2"
          style={{
            width: "50px",
            height: "4px",
            backgroundColor: "#127176",
            margin: "0 auto",
          }}
        ></div>
        {/* Fixed height for title */}
        <h4
          className="fw-bold text-white mb-3"
          style={{
            height: "2rem", // Ensures consistent title height
            whiteSpace: "nowrap", // Prevent wrapping
            overflow: "hidden", // Prevent overflow
            textOverflow: "ellipsis", // Add "..." if text is too long
          }}
        >
          {title}
        </h4>
        <p className="small text-white">{description}</p>
      </div>
    </div>
  );
};

export default CapabilityCard;
