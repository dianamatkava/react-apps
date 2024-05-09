import React from "react";

interface SelectProps {
  emogi: string;
  label: string;
  type: string;
}

const Select: React.FC<SelectProps> = ({ emogi, label, type }) => {
  return (
    <div className="collumns input">
      <label htmlFor="">
        <span>{emogi}</span> {label}
      </label>
      <input type={type} />
    </div>
  );
};

export default Select;
