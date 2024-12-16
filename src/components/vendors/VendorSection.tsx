import React from 'react';
import { motion } from 'framer-motion';

interface Vendor {
  name: string;
  logoSrc: string;
  link: string;
}

const vendors: Vendor[] = [
  {
    name: 'Octopus',
    logoSrc: 'assets/img/octopus.png',
    link: 'https://www.octopus-var.com/',
  },
  {
    name: 'FrontierZero',
    logoSrc: 'assets/img/frontierZero.svg',
    link: 'https://www.frontierzero.io',
  },
  {
    name: 'BitSight',
    logoSrc: 'assets/img/bitSight.png',
    link: 'https://www.bitsight.com/',
  },
  {
    name: 'CyberReason',
    logoSrc: 'assets/img/cyberreason.png',
    link: 'https://www.cybereason.com/',
  },
];

const VendorSection: React.FC = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">Our Vendors</h2>
      <hr className="w-25 mx-auto mb-5" style={{ border: '2px solid #5E9898' }} />
      <div className="row justify-content-center">
        {vendors.map((vendor) => (
          <div key={vendor.name} className="col-md-3 col-sm-6 mb-4 mb-4 mb-md-2 d-flex justify-content-center">
            <a
              href={vendor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <motion.img
  src={vendor.logoSrc}
  alt={vendor.name}
  whileHover={{ y: -10, scale: 1.05 }}
  transition={{ type: 'spring', stiffness: 300 }}
  className="img-fluid mx-auto d-block"
  style={{
    maxHeight: '80px', // Set a consistent max height
    objectFit: 'contain', // Ensures images scale proportionally
  }}
/>

            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorSection;
