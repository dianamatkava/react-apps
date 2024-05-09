import Button from "./units/Button";
interface FormProps {
  title: string;
  children: JSX.Element;
}

const Form: React.FC<FormProps> = ({ title, children }) => {
  function foo() {
    console.log();
  }
  return (
    <>
      <div className="content-block form">
        <h3>{title}</h3>
        {children}
        <div className="float-right">
          <Button color={"black"} name="Submit" handleOnClick={() => foo} />
        </div>
      </div>
    </>
  );
};

export default Form;
