import React from "react";

interface ButtonProps {
  name: string;
  color: string | null;
  handleOnClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  name,
  handleOnClick,
  color = "white",
}) => {
  return (
    <button className={`button ${color}`} onClick={handleOnClick}>
      {name}
    </button>
  );
};

export default Button;
