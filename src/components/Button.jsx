import React from "react";

const Button = ({text, className}) => {
  return (
    <div>
      <button
        className={`bg-black py-2 px-2 mt-2 text-white rounded-sm ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
