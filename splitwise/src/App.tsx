import React from "react";
import { useState } from "react";
import "./App.css";
import FriendsList from "./components/FriendsList";
import Form from "./components/Form";
import Input from "./components/units/Input";

function App() {
  const [formHidden, setFormHidden] = useState();

  return (
    <div className={`main ${formHidden ? "center-block" : ""}`}>
      <div className="collumns">
        <div className="row">
          <FriendsList handleFormHidden={(el) => setFormHidden} />
        </div>
        <div className={`${formHidden ? "hidden" : ""} "row"`}>
          <Form title={"SPLIT THE BILL WITH NAME"}>
            <>
              <Input emogi="💰" label="Bill value" type="text" />
              <Input emogi="👸" label="Your expence" type="text" />
              <Input emogi="👫" label="$NAME's expence" type="text" />
            </>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default App;
