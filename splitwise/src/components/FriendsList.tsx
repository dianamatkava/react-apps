import React from "react";
import Friend from "./Friend";
import FriendModel from "../interfaces/FirendModels";

const friendList = [
  {
    id: 1,
    name: "John",
    status: "You and John are even",
    img: "user.png",
  },
  {
    id: 2,
    name: "Mark",
    status: "You and Mark are even",
    img: "user.png",
  },
  {
    id: 3,
    name: "Eric",
    status: "You and Eric are even",
    img: "user.png",
  },
];

interface FriendsListProps {
  setSelectFriend: (el: FriendModel) => void;
  selectedFriend: FriendModel | null;
}

const FriendsList: React.FC<FriendsListProps> = ({
  setSelectFriend,
  selectedFriend,
}) => {
  return (
    <>
      <div className="content-block">
        {friendList.map((el) => (
          <Friend
            key={el.id}
            el={el}
            setSelectFriend={(el: FriendModel) => setSelectFriend(el)}
            selectedFriend={selectedFriend}
          />
        ))}
        {/* <div className="float-right">
          <Button name="Colse" />
        </div> */}
      </div>
    </>
  );
};

export default FriendsList;
