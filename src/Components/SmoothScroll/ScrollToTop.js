import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {showButton && (
        <button onClick={scrollToTop} className="fixed bottom-5 left-5 font-bold text-5xl bg-custom text-white cursor-pointer rounded-full border-none shadow-lg hover:bg-white hover:border-red-500 hover:text-red-500">
          TOP
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;