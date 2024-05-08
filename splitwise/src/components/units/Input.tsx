import React from "react";

interface InputProps {
  emogi: string;
  label: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ emogi, label, type }) => {
  return (
    <div className="collumns input">
      <label htmlFor="">
        <span>{emogi}</span> {label}
      </label>
      <input type={type} />
    </div>
  );
};

export default Input;
