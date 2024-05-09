import React from "react";
import Form from "./Form";
import Input from "./units/Input";
import FriendModel from "../interfaces/FirendModels";

interface BillFormProps {
  selectedFriend: FriendModel;
}

const BillForm: React.FC<BillFormProps> = ({ selectedFriend }) => {
  return (
    <Form title={"SPLIT THE BILL WITH NAME"}>
      <>
        <Input emogi="💰" label="Bill value" type="text" />
        <Input emogi="👸" label="Your expence" type="text" />
        <Input
          emogi="👫"
          label={`${selectedFriend.name}'s expence`}
          type="text"
        />
      </>
    </Form>
  );
};

export default BillForm;
