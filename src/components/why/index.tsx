import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import ScrollTop from "../common/ScrollTop";
import Pyramid from "../common/Pyramid";
 import ChooseAreaHomeOne from "../homes/home-1/ChooseAreaHomeOne";


const Why = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Why CyberMorph" subtitle="why" />
      <ChooseAreaHomeOne />
      <Pyramid />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default Why;