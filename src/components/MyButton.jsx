import React from "react";

const MyButton = ({ isOn, onClick, label, className = "" }) => {
  return (
    <button
      onClick={onClick}
      style={{ margin: "5px" }}
      className={`py-2 px-4 font-bold rounded transition-all duration-300 
        ${isOn ? "bg-green-700 hover:bg-green-900 text-white border border-black shadow " : "bg-gray-500 hover:bg-red-600 text-white"} 
        ${className}`}
    >
      {label}
    </button>
  );
};

export default MyButton;
