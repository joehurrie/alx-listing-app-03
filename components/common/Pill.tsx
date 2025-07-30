import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, active = false }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-full text-sm font-medium border ${
        active ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-blue-100"
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;
