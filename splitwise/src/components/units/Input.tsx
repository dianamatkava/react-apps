import React from "react";

interface InputProps {
  emogi: string;
  label: string;
  type: string;
  name: string;
  readOnly?: boolean | null;
  value?: string | null;
}

const Input: React.FC<InputProps> = ({
  emogi,
  label,
  type,
  readOnly,
  value,
  name,
}) => {
  return (
    <div className="collumns input">
      <label htmlFor="">
        <span>{emogi}</span> {label}
      </label>
      <input
        type={type}
        name={name}
        readOnly={readOnly === true ? true : false}
      />
    </div>
  );
};

export default Input;
