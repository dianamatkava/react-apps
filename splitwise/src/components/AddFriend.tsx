import React from "react";
import { useState } from "react";
import Form from "./units/Form";
import Input from "./units/Input";
import FriendModel from "../interfaces/FirendModels";

interface AddFriendProps {
  onAddFriend: (el: FriendModel) => void;
}

const AddFriend: React.FC<AddFriendProps> = ({ onAddFriend }) => {
  function AddFriend(event: React.FormEvent<Element>) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const friendName = target.elements.namedItem(
      "friendName"
    ) as HTMLInputElement;
    const firendImg = target.elements.namedItem(
      "firendImg"
    ) as HTMLInputElement;

    const friend: FriendModel = {
      id: Number(new Date()),
      name: friendName.value,
      img: firendImg.value || "user.png",
      balance: 0,
    };
    onAddFriend(friend);
  }

  return (
    <div className="content-small-block form">
      <Form onSubmit={(el) => AddFriend(el)}>
        <>
          <Input label="Your friend name" type="text" name="friendName" />
          <Input
            label="Your Friend Image"
            type="text"
            isRequired={false}
            name="firendImg"
            placeholder={"https://"}
          />
        </>
      </Form>
    </div>
  );
};

export default AddFriend;
