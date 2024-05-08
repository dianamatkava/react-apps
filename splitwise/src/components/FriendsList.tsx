import React from "react";
import Friend from "./Friend";
import Button from "./units/Button";

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
  handleFormHidden: (val: boolean) => void;
}

const FriendsList: React.FC<FriendsListProps> = ({ handleFormHidden }) => {
  return (
    <>
      <div className="content-block">
        {friendList.map((el) => (
          <Friend
            key={el.id}
            id={el.id}
            name={el.name}
            status={el.status}
            img={el.img}
            handleFormHidden={handleFormHidden}
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
