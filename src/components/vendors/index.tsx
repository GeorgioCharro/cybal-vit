import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import ScrollTop from "../common/ScrollTop";
import VendorSection from "./VendorSection";
const Vendors = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Vendors" subtitle="vendors" />
      <VendorSection />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default Vendors;