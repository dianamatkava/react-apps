import React from "react";
import { useState } from "react";
import Form from "./units/Form";
import Input from "./units/Input";
import FriendModel from "../interfaces/FirendModels";

interface BillFormProps {
  selectedFriend: FriendModel;
  updateFriendStatus: (id: number, status: string) => void;
}

const BillForm: React.FC<BillFormProps> = ({
  selectedFriend,
  updateFriendStatus,
}) => {
  const [myExpence, setMyExpence] = useState(0);
  const [totalExpence, setTotalExpence] = useState(0);

  function submitBillForm(event: React.FormEvent<Element>) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const myBillInput = target.elements.namedItem(
      "myExpence"
    ) as HTMLInputElement;
    const theirsBillInput = target.elements.namedItem(
      "theirsExpence"
    ) as HTMLInputElement;
    const splitBill =
      Number(myBillInput.value) + Number(theirsBillInput.value) / 2;
    updateFriendStatus(selectedFriend?.id, `${splitBill}`);
  }
  return (
    <div className="content-block form" style={{ width: "250px" }}>
      <Form
        title={`SPLIT THE BILL WITH ${selectedFriend?.name.toUpperCase()}`}
        onSubmit={(event) => submitBillForm(event)}
      >
        <>
          <Input
            emogi="👫"
            label="Bill value"
            type="text"
            value={totalExpence}
            setValue={(el) => setTotalExpence(Number(el))}
            name="totalExpence"
          />
          <Input
            emogi="👸"
            label="My expence"
            type="text"
            name="myExpence"
            value={myExpence}
            setValue={(el) => setMyExpence(Number(el))}
          />
          <Input
            emogi="💰"
            label={`${selectedFriend?.name}'s expence`}
            type="text"
            name="theirExpence"
            readOnly={true}
            placeholder={totalExpence - myExpence}
          />
        </>
      </Form>
    </div>
  );
};

export default BillForm;
