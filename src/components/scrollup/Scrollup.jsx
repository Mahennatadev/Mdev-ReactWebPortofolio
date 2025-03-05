import React, { useEffect, useState } from "react";
import "./scrollup.css";

const Scrollup = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY >= 560);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup event listener saat komponen unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`scrollup ${showScroll ? "show-scroll" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </button>
  );
};

export default Scrollup;
