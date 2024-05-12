import React from "react";
import { useState } from "react";
import Form from "./units/Form";
import Input from "./units/Input";
import FriendModel from "../interfaces/FirendModels";

interface AddFriendProps {}

const AddFriend: React.FC<AddFriendProps> = () => {
  return (
    <div className="content-small-block form">
      <Form title="Add Friend" onSubmit={() => console.log()}>
        <>
          <Input label="Your friend name" type="text" name="friendName" />
          <Input
            label="Your Friend Image"
            type="text"
            isRequired={false}
            name="firendImg"
          />
        </>
      </Form>
    </div>
  );
};

export default AddFriend;
