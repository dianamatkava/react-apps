import React from "react";
import Button from "./units/Button";
import FriendModel from "../interfaces/FirendModels";

interface FriendsProps {
  el: FriendModel;
  setSelectFriend: (el: FriendModel) => void;
  selectedFriend: FriendModel | null;
}

const Friend: React.FC<FriendsProps> = ({
  el,
  selectedFriend,
  setSelectFriend,
}) => {
  return (
    <div className="collumns">
      <img src={el.img} alt="Friend pic" className="friend-img" />
      <div className="friend-info">
        <h5>{el.name}</h5>
        <p>{el.status}</p>
      </div>
      <Button
        name="Select"
        color={`${selectedFriend?.id === el.id ? "black" : "white"}`}
        handleOnClick={() => setSelectFriend(el)}
      />
    </div>
  );
};

export default Friend;
