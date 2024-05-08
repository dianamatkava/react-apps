import Button from "./units/Button";
interface FormProps {
  title: string;
  children: JSX.Element;
}

const Form: React.FC<FormProps> = ({ title, children }) => {
  return (
    <>
      <div className="content-block form">
        <h3>{title}</h3>
        {children}
        <div className="float-right">
          <Button name="Submit" />
        </div>
      </div>
    </>
  );
};

export default Form;
