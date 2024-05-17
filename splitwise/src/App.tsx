import React from "react";
import { useState } from "react";
import "./App.css";
import FriendsList from "./components/FriendsList";
import FriendModel from "./interfaces/FirendModels";
import BillForm from "./components/BillForm";

const friends: FriendModel[] = [
  {
    id: 1,
    name: "John",
    balance: 0,
    img: "user.png",
  },
  {
    id: 2,
    name: "Mark",
    balance: 0,
    img: "user.png",
  },
  {
    id: 3,
    name: "Eric",
    balance: 0,
    img: "user.png",
  },
];

function App() {
  const [selectedFriend, setSelectedFriend] = useState<FriendModel | null>(
    null
  );
  const [friendList, updateFriendList] = useState<FriendModel[]>(friends);

  function updateFriendBalance(id: number, balance: number) {
    updateFriendList((prevFriendList) =>
      prevFriendList.map((friend) =>
        friend.id === id
          ? { ...friend, balance: friend.balance + balance }
          : friend
      )
    );
  }

  function createFriend(el: FriendModel) {
    updateFriendList((friends) => [...friends, el]);
  }

  function setSelectedFriend1(el: FriendModel) {
    setSelectedFriend((selectedFriend) =>
      el.id === selectedFriend?.id ? null : el
    );
  }

  return (
    <div className={`main ${selectedFriend ? "" : "center-block"}`}>
      <div className="collumns">
        <div className="row">
          <FriendsList
            setSelectFriend={(el: FriendModel) => setSelectedFriend1(el)}
            selectedFriend={selectedFriend}
            friendList={friendList}
            createFriend={(el: FriendModel) => createFriend(el)}
          />
        </div>

        {selectedFriend && (
          <div className="row">
            <BillForm
              selectedFriend={selectedFriend}
              setSelectedFriend={(el) => setSelectedFriend(el)}
              updateFriend={(id, balance) => updateFriendBalance(id, balance)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
