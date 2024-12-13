import React from "react";
import FooterOne from "../../../layouts/footers/FooterOne";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import ScrollTop from "../../common/ScrollTop";
import AboutAreaHomeThree from "../home-3/AboutAreaHomeThree";
import ChooseAreaHomeOne from "./ChooseAreaHomeOne";
import HeroAreaHomeOne from "./HeroAreaHomeOne";
import NewsletterAreaHomeOne from "./NewsletterAreaHomeOne";
import useFadeInOnScroll from "../../../hooks/useFadeInOnScroll";
import ServiceAreaHomeThree from "../home-3/ServiceAreaHomeThree";
import Pyramid from "../../common/Pyramid";
interface FadeInSectionProps {
  children: React.ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const [ref, isVisible] = useFadeInOnScroll<HTMLDivElement>();
  return (
    <div ref={ref} className={`fade-in ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

const HomeOne: React.FC = () => {
  return (
    <>
      <HeaderOne />
      <FadeInSection>
        <HeroAreaHomeOne />
      </FadeInSection>
      <FadeInSection>
        <Pyramid />
      </FadeInSection>
      <FadeInSection>
        <ServiceAreaHomeThree />
      </FadeInSection>
      
      <FadeInSection>
        <AboutAreaHomeThree />
      </FadeInSection>
      <FadeInSection>
        <ChooseAreaHomeOne />
      </FadeInSection>
      <FadeInSection>
        <NewsletterAreaHomeOne />
      </FadeInSection>
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default HomeOne;
