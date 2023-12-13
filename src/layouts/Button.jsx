import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className=" px-6 py-1 text-sm border-2 border-[#437FC7] bg-gray-300 text-[#437FC7] hover:bg-[#437FC7] hover:text-white transition-all rounded-full">
        {props.title}
      </button>
    </div>
  );
};

export default Button;