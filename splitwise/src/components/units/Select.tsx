import React, { Children } from "react";

interface SelectProps {
  label: string;
  children: JSX.Element;
  onChange: (el: string) => void;
}

const Select: React.FC<SelectProps> = ({ label, children, onChange }) => {
  return (
    <div className="collumns input">
      <label>{label}</label>
      <select onChange={(el) => onChange(el.target.value)}>{children}</select>
    </div>
  );
};

export default Select;
