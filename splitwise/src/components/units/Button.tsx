import React from "react";

interface ButtonProps {
  name: string;
  onSubmit: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, onSubmit }) => {
  return (
    <button className="button" onClick={onSubmit}>
      {name}
    </button>
  );
};

export default Button;
