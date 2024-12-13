import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import ScrollTop from "../common/ScrollTop";
import AoutUsAreaHomeOne from "../homes/home-1/AoutUsAreaHomeOne";
import AboutArea from "./AboutArea";
import AboutAreaHomeThree from "../homes/home-3/AboutAreaHomeThree";
 

const About = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="About Us" subtitle="About Us" />
      <AboutArea />
      <AboutAreaHomeThree />
      <AoutUsAreaHomeOne />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default About;