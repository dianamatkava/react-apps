import React from "react";

interface LogoProds {}

const Logo: React.FC<LogoProds> = () => {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>IMDB</h1>
    </div>
  );
};

export default Logo;
