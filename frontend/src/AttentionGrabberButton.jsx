import React, { useEffect, useState } from "react";

const AttentionGrabberButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const message = encodeURIComponent("Hi, I'm interested in booking a site visit!");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setIsClicked(true);
  };

  if (!showButton || isClicked) return null;

  return (
    <a
      href={`https://wa.me/919515519536?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-green-500 text-white px-6 py-3 rounded-r-full shadow-lg hover:bg-green-600 transition z-50 animate-pulse"
    >
      BOOK SITE VISIT TODAY!
    </a>
  );
};

export default AttentionGrabberButton;
