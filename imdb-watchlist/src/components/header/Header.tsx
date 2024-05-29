import React from "react";

interface HeaderProds {
  children: React.JSX.Element;
}

const Header: React.FC<HeaderProds> = ({ children }) => {
  return <nav className="nav-bar">{children}</nav>;
};

export default Header;
