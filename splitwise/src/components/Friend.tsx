import React from "react";
import Button from "./units/Button";
import FriendModel from "../interfaces/FirendModels";

interface FriendsProps {
  friend: FriendModel;
  setSelectFriend: (el: FriendModel) => void;
  selectedFriend: FriendModel | null;
}

const Friend: React.FC<FriendsProps> = ({
  friend,
  selectedFriend,
  setSelectFriend,
}) => {
  const isSelectedFriend = selectedFriend?.id === friend.id;
  return (
    <div
      className={`collumns coll ${isSelectedFriend ? "selected-block" : ""}`}
    >
      <img src={friend.img} alt="Friend pic" className="friend-img" />
      <div className="friend-info">
        <h5>{friend.name}</h5>
        <p>
          {friend.balance === 0 ? (
            <span
              style={{ color: "grey" }}
            >{`You and ${friend.name} are even`}</span>
          ) : friend.balance > 0 ? (
            <span style={{ color: "red" }}>
              {`You owe to ${friend.name} ${Math.abs(friend.balance)}$`}
            </span>
          ) : (
            <span style={{ color: "green" }}>
              {`${friend.name} owes you ${Math.abs(friend.balance)}$`}
            </span>
          )}
        </p>
      </div>
      <Button
        name={`${isSelectedFriend ? "Close" : "Select"}`}
        color={`${isSelectedFriend ? "black" : "white"}`}
        handleOnClick={() => setSelectFriend(friend)}
      />
    </div>
  );
};

export default Friend;
