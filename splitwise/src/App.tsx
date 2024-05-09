import React from "react";
import { useState } from "react";
import "./App.css";
import FriendsList from "./components/FriendsList";
import Form from "./components/Form";
import Input from "./components/units/Input";
import FriendModel from "./interfaces/FirendModels";

function App() {
  const [selectedFriend, setSelectedFriend] = useState<FriendModel | null>(
    null
  );

  return (
    <div className={`main ${selectedFriend ? "" : "center-block"}`}>
      <div className="collumns">
        <div className="row">
          <FriendsList
            setSelectFriend={(el: FriendModel) => setSelectedFriend(el)}
            selectedFriend={selectedFriend}
          />
        </div>
        <div className={`${selectedFriend ? "" : "hidden"} "row"`}></div>
      </div>
    </div>
  );
}

export default App;
