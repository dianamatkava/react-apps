import React from "react";
import { useState } from "react";
import Form from "./units/Form";
import Input from "./units/Input";
import FriendModel from "../interfaces/FirendModels";
import Select from "./units/Select";

interface BillFormProps {
  selectedFriend: FriendModel;
  setSelectedFriend: (el: FriendModel | null) => void;
  updateFriend: (id: number, balance: number) => void;
}

const BillForm: React.FC<BillFormProps> = ({
  selectedFriend,
  setSelectedFriend,
  updateFriend,
}) => {
  const [myExpence, setMyExpence] = useState(0);
  const [totalExpence, setTotalExpence] = useState(0);
  const friendExpence = totalExpence ? totalExpence - myExpence : 0;
  const [payer, setPayer] = useState("me");

  function submitBillForm(event: React.FormEvent<Element>) {
    event.preventDefault();
    if (!myExpence || !totalExpence) return;
    updateFriend(
      selectedFriend.id,
      payer === "me" ? -friendExpence : friendExpence
    );
    setSelectedFriend(null);
  }
  return (
    <div className="content-block form" style={{ width: "300px" }}>
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
            setValue={(el) =>
              Number(el) <= totalExpence
                ? setMyExpence(Number(el))
                : totalExpence
            }
          />
          <Input
            emogi="💰"
            label={`${selectedFriend?.name}'s expence`}
            type="text"
            name="theirExpence"
            readOnly={true}
            placeholder={friendExpence}
          />
          <Select label="Who paid the bill?" onChange={(el) => setPayer(el)}>
            <>
              <option value="me">Me</option>
              <option value="them">{selectedFriend.name}</option>
            </>
          </Select>
        </>
      </Form>
    </div>
  );
};

export default BillForm;
