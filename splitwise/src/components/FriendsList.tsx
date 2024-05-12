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
  const [formOpen, setForOpen] = useState(false);
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
        {formOpen ? (
          <>
            <AddFriend />
            <div className="float-right">
              <Button
                name="Close"
                color={"white"}
                handleOnClick={() => setForOpen((el) => !el)}
              />
            </div>
          </>
        ) : (
          <div className="float-right">
            <Button
              name="Add Friend"
              color={"black"}
              handleOnClick={() => setForOpen((el) => !el)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default FriendsList;
