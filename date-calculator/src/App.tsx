import { react, useState } from "react";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const resDate = new Date();
  resDate.setDate(resDate.getDate() + count);

  function resetHandler() {
    setStep(0);
    setCount(1);
  }

  return (
    <div>
      <div className="flex-box">
        <input
          type="range"
          min="1"
          max="1000"
          onChange={(el) => setStep(parseInt(el.target.value))}
        />
        <p>Step: {step}</p>
      </div>

      <div className="flex-box">
        <button className="button" onClick={() => setCount((el) => el - step)}>
          -
        </button>
        <input
          type="text"
          placeholder="1"
          value={count}
          onChange={(el) => setCount(Number(el.target.value))}
        ></input>
        <button className="button" onClick={() => setCount((el) => el + step)}>
          +
        </button>
      </div>

      <div className="countaner">
        <span>
          {count === 0
            ? "Today is: "
            : count > 0
            ? `After ${count} days from today is: `
            : `${Math.abs(count)} days ago was: `}
        </span>
        <span> {resDate.toDateString()}</span>
      </div>
      {count !== 0 || step !== 1 ? (
        <button onClick={resetHandler}>Reset</button>
      ) : null}
    </div>
  );
}
