import React, { useState } from "react";

interface BoxContainerProps {
  children: React.JSX.Element;
}

const BoxContainer: React.FC<BoxContainerProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
};

export default BoxContainer;
