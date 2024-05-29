import React from "react";

interface HeaderProds {
  children: React.JSX.Element;
}

const Main: React.FC<HeaderProds> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Main;
