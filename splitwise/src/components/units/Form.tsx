import React from "react";
import Button from "./Button";
interface FormProps {
  title: string;
  children: JSX.Element;
  onSubmit: (el: React.FormEvent) => void;
}

const Form: React.FC<FormProps> = ({ title, children, onSubmit }) => {
  function foo() {
    console.log();
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <h3>{title}</h3>
        {children}
        <div className="float-right">
          <Button color={"black"} name="Submit" handleOnClick={() => foo} />
        </div>
      </form>
    </>
  );
};

export default Form;
