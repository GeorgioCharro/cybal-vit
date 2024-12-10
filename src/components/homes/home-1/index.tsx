import React from "react";
import FooterOne from "../../../layouts/footers/FooterOne";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import ScrollTop from "../../common/ScrollTop";
import AboutAreaHomeOne from "./AboutAreaHomeOne";
import AoutUsAreaHomeOne from "./AoutUsAreaHomeOne";
import ChooseAreaHomeOne from "./ChooseAreaHomeOne";
import CounterAreaHomeOne from "./CounterAreaHomeOne";
import HeroAreaHomeOne from "./HeroAreaHomeOne";
import NewsletterAreaHomeOne from "./NewsletterAreaHomeOne";
import PortfolioAreaHomeOne from "./PortfolioAreaHomeOne";
import PriceAreaHomeOne from "./PriceAreaHomeOne";
import ServiceAreaHomeOne from "./ServiceAreaHomeOne";
import TeamAreaHomeOne from "./TeamAreaHomeOne";
import TestimonialAreaHomeOne from "./TestimonialAreaHomeOne";
import useFadeInOnScroll from "../../../hooks/useFadeInOnScroll";


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
        <CounterAreaHomeOne />
      </FadeInSection>
      <FadeInSection>
        <AboutAreaHomeOne />
      </FadeInSection>
      <FadeInSection>
        <ServiceAreaHomeOne />
      </FadeInSection>
      <FadeInSection>
        <AoutUsAreaHomeOne />
      </FadeInSection>
      <FadeInSection>
        <PortfolioAreaHomeOne />
      </FadeInSection>
      <FadeInSection>
        <ChooseAreaHomeOne />
      </FadeInSection>
      <FadeInSection>
        <PriceAreaHomeOne />
      </FadeInSection>
      <FadeInSection>
        <TestimonialAreaHomeOne />
      </FadeInSection>
      <FadeInSection>
        <TeamAreaHomeOne />
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
