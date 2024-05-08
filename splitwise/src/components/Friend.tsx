import React from "react";
import Button from "./units/Button";

interface FriendsProps {
  id: number;
  name: string;
  status: string;
  img: string;
  handleFormHidden: (val: boolean) => void;
}

const Friend: React.FC<FriendsProps> = ({
  id,
  name,
  status,
  img,
  handleFormHidden,
}) => {
  return (
    <div className="collumns">
      <img src={img} alt="Friend pic" className="friend-img" />
      <div className="friend-info">
        <h5>{name}</h5>
        <p>{status}</p>
      </div>
      <Button name="Select" onSubmit={handleFormHidden(true)} />
    </div>
  );
};

export default Friend;
