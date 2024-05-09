import React from "react";
import Friend from "./Friend";
import FriendModel from "../interfaces/FirendModels";

interface FriendsListProps {
  friendList: FriendModel[];
  setSelectFriend: (el: FriendModel) => void;
  createFriend: (el: FriendModel) => void;
  selectedFriend: FriendModel | null;
}

const FriendsList: React.FC<FriendsListProps> = ({
  friendList,
  createFriend,
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
