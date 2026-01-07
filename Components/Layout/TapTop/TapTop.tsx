'use client';

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const TapTop = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button className="tap-top" onClick={scrollToTop} aria-label="Scroll to top">
      <ArrowUp className="tap-top-icon" />
    </button>
  );
};

export default TapTop;
