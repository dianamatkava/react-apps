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
  const [friendList, updateFriend] = useState<FriendModel[]>(friends);

  function updateFriendStatus(id: number, status: string) {
    updateFriend((prevFriendList) =>
      prevFriendList.map((friend) =>
        friend.id === id ? { ...friend, status: status } : friend
      )
    );
  }

  function createFriend(el: FriendModel) {
    console.log();
  }

  return (
    <div className={`main ${selectedFriend ? "" : "center-block"}`}>
      <div className="collumns">
        <div className="row">
          <FriendsList
            setSelectFriend={(el: FriendModel) => setSelectedFriend(el)}
            selectedFriend={selectedFriend}
            friendList={friendList}
            createFriend={(el: FriendModel) => createFriend(el)}
          />
        </div>

        {selectedFriend && (
          <div className="row">
            <BillForm
              selectedFriend={selectedFriend}
              updateFriendStatus={(id, status) =>
                updateFriendStatus(id, status)
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
