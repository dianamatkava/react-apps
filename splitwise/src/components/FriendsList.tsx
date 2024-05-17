import React from "react";
import { useState } from "react";
import Friend from "./Friend";
import FriendModel from "../interfaces/FirendModels";
import Button from "./units/Button";
import AddFriend from "./AddFriend";

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
  const [addFormOpen, setAddFormOpen] = useState(false);

  function addFriend(el: FriendModel) {
    createFriend(el);
    setAddFormOpen(false);
  }

  return (
    <>
      <div className="content-block">
        {friendList.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            setSelectFriend={(friend: FriendModel) => setSelectFriend(friend)}
            selectedFriend={selectedFriend}
          />
        ))}
        {addFormOpen ? (
          <>
            <AddFriend onAddFriend={(el) => addFriend(el)} />
            <div className="float-right">
              <Button
                name="Close"
                color={"white"}
                handleOnClick={() => setAddFormOpen((el) => !el)}
              />
            </div>
          </>
        ) : (
          <div className="float-right">
            <Button
              name="Add Friend"
              color={"black"}
              handleOnClick={() => setAddFormOpen((el) => !el)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default FriendsList;
