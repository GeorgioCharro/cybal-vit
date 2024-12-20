
import { useState, useEffect } from "react";
import UseSticky from "../../hooks/UseSticky";


const ScrollToTop = () => {
  const { sticky }: { sticky: boolean } = UseSticky();

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <>
      <div id="topcontrol" className="topcontrol" onClick={scrollTop}
        style={{ position: "fixed", bottom: "5px", right: "5px", opacity: sticky ? "1" : "0", cursor: "pointer", zIndex:"999999" }}>
        <i className="ti-arrow-up scrolltop"></i>
      </div>
    </>
  );
};

export default ScrollToTop;
