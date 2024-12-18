import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import ScrollTop from "../common/ScrollTop";
import AboutAreaHomeThree from "../homes/home-3/AboutAreaHomeThree";
 import AboutIntroduction from "./AboutIntroduction";
import ServiceAreaHomeThree from "../homes/home-3/ServiceAreaHomeThree";
import Pyramid from "../common/Pyramid";
const About = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="About Us" subtitle="About Us" />
      <AboutIntroduction />
      <AboutAreaHomeThree />
      <Pyramid />
      <ServiceAreaHomeThree />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default About;