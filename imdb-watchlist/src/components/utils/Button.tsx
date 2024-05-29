import React from "react";

interface ButtonProds {}

const TuggleButton: React.FC<ButtonProds> = () => {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>IMDB</h1>
    </div>
  );
};

export default TuggleButton;
