import { useEffect, useState } from "react";

export default function App() {
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("EUR");
  const [amount, setAmount] = useState();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurr}&to=${toCurr}`;
    setLoading(true);

    async function callback() {
      try {
        const res = await fetch(url, { signal: controller.signal });
        const data = await res.json();

        console.log(data.rates[toCurr]);
        setResult(data.rates[toCurr]);
      } catch (e) {
        if (e.name !== "AbortError") {
          console.log(e);
        } else {
          console.log("Unexpected Error");
        }
        setResult(0);
      } finally {
        setLoading(false);
      }
    }

    callback();

    return () => {
      controller.abort((reason = "AbortError"));
    };
  }, [amount, fromCurr, toCurr]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select onChange={(e) => setFromCurr(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => setToCurr(e.target.value)}>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
      </select>
      {loading ? <p>Loading</p> : <p>{result}</p>}
    </div>
  );
}
