import React from "react";
import Button from "./Button";
interface FormProps {
  title?: string | null;
  children: JSX.Element;
  onSubmit: (el: React.FormEvent) => void;
}

const Form: React.FC<FormProps> = ({ title, children, onSubmit }) => {
  return (
    <>
      <form onSubmit={(el) => onSubmit(el)}>
        {title && <h3>{title}</h3>}
        {children}
        <div className="float-right">
          <Button color={"black"} name="Submit" handleOnClick={() => null} />
        </div>
      </form>
    </>
  );
};

export default Form;
