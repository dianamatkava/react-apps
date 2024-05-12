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
        <p>
          {el.balance === 0 ? (
            <span
              style={{ color: "grey" }}
            >{`You and ${el.name} are enev`}</span>
          ) : el.balance > 0 ? (
            <span style={{ color: "red" }}>
              {`You owe to ${el.name} ${Math.abs(el.balance)}$`}
            </span>
          ) : (
            <span style={{ color: "green" }}>
              {`${el.name} ows you ${el.balance}$`}
            </span>
          )}
        </p>
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
