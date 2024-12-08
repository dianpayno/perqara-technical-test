import React from "react";

interface ActionButtonProps {
  label: string;
  isActive: boolean;
  handleClick: () => void;
}
const ActionButton = ({ label, isActive, handleClick }: ActionButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`${
        isActive ? "bg-[#FF0000]" : "bg-gray-900"
      } text-white py-1 px-3 rounded-[32px] text-[14px] font-bold min-w-[95px]`}
    >
      <span>{label}</span>
    </button>
  );
};

export default ActionButton;
