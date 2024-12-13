import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import ScrollTop from "../common/ScrollTop";
import PartnerForm from "./PartnerForm";
const Partners = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Our Partners" subtitle="partners" />

      <PartnerForm />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default Partners;