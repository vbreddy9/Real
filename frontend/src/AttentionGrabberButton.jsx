import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const AttentionGrabberButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Tailwind's md breakpoint
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.body.scrollHeight - window.innerHeight;
      if (isMobile && scrollPosition > pageHeight * 0.2) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  if (!showButton) return null;

  return (
    <div className="fixed top-[70px] left-0 w-full z-40 flex justify-center md:hidden animate-bounce">
      <a
        href="tel:+919515519536"
        className="bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 flex items-center gap-2"
      >
        <FaPhoneAlt /> Call Now
      </a>
    </div>
  );
};

export default AttentionGrabberButton;
