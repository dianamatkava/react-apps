import React from "react";
import Form from "./units/Form";
import Input from "./units/Input";
import FriendModel from "../interfaces/FirendModels";

interface BillFormProps {
  selectedFriend: FriendModel | null;
  updateFriendStatus: (id: number, status: string) => void;
}

const BillForm: React.FC<BillFormProps> = ({
  selectedFriend,
  updateFriendStatus,
}) => {
  function submitBillForm(event: React.FormEvent<Element>) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const myBillInput = target.elements.namedItem(
      "myExpence"
    ) as HTMLInputElement;
    const theirsBillInput = target.elements.namedItem(
      "theirsExpence"
    ) as HTMLInputElement;
    console.log(myBillInput.value);
    console.log(theirsBillInput.value);
  }
  return (
    <Form
      title={`SPLIT THE BILL WITH ${selectedFriend?.name.toUpperCase()}`}
      onSubmit={(event) => submitBillForm(event)}
    >
      <>
        <Input emogi="👸" label="My expence" type="text" name="myExpence" />
        <Input
          emogi="👫"
          label={`${selectedFriend?.name}'s expence`}
          type="text"
          name="theirsExpence"
        />
        <Input
          emogi="💰"
          label="Bill value"
          type="text"
          name="total"
          readOnly={true}
        />
      </>
    </Form>
  );
};

export default BillForm;
