import React from "react";

interface InputProps {
  emogi?: string | null;
  label: string;
  type: string;
  name: string;
  readOnly?: boolean | null;
  placeholder?: any | null;
  value?: any | null;
  isRequired?: boolean | null;
  setValue?: (value: any | null) => void;
}

const Input: React.FC<InputProps> = ({
  emogi,
  label,
  type,
  readOnly,
  placeholder,
  setValue,
  value,
  name,
  isRequired = true,
}) => {
  return (
    <div className="collumns input">
      <label htmlFor="">
        {emogi && <span>{emogi}</span>} {label}
      </label>
      <input
        type={type}
        name={name}
        required={isRequired ? true : false}
        value={value ? value : ""}
        onChange={(el) => (setValue ? setValue(el.target.value) : null)}
        placeholder={placeholder ? placeholder : ""}
        readOnly={readOnly === true ? true : false}
      />
    </div>
  );
};

export default Input;
