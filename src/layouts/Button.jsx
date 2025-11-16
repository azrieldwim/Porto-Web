import React from "react";

const Button = () => {
  const downloadCV = () => {
    window.open("https://drive.google.com/file/d/1185HChbumeWC6VUVFgI2BsnyVsR-viCg/view?usp=sharing", "_blank");
  };

  return (
    <div>
      <button
        className="px-3 py-1 text-sm border-2 border-[#437FC7] bg-white text-[#437FC7] hover:bg-[#437FC7] hover:text-white transition-all rounded-full"
        onClick={downloadCV}
      >
        Download CV
      </button>
    </div>
  );
};

export default Button;