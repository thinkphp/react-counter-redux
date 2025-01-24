import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
  increment, 
  decrement, 
  reset, 
  setStep, 
  clearHistory 
} from "./counterActions";

const Counter = () => {
  const dispatch = useDispatch();
  const { count, step, history, maxCount, minCount } = useSelector(state => state.counter);

  const getColor = () => {
    if (count > 0) return "green";
    if (count < 0) return "red";
    return "black";
  };

  return (
    <div className="container">
      <header>
        <h1>Redux Counter</h1>
      </header>
      <main>
        <section>
          <p id="value" style={{ color: getColor() }}>
            {count}
          </p>
          
          <div>
            <label>Step Size: </label>
            <select 
              value={step} 
              onChange={(e) => dispatch(setStep(Number(e.target.value)))}
            >
              {[1, 2, 5, 10].map(stepValue => (
                <option key={stepValue} value={stepValue}>
                  {stepValue}
                </option>
              ))}
            </select>
          </div>

          <section className="button-container">
            <button
              className="btn decrease"
              onClick={() => dispatch(decrement())}
              disabled={count <= minCount}
            >
              decrease
            </button>
            <button 
              className="btn reset" 
              onClick={() => dispatch(reset())}
            >
              reset
            </button>
            <button
              className="btn increase"
              onClick={() => dispatch(increment())}
              disabled={count >= maxCount}
            >
              increase
            </button>
          </section>

          <section>
            <h3>History</h3>
            <button 
              onClick={() => dispatch(clearHistory())}
            >
              Clear History
            </button>
            <ul>
              {history.slice(-5).map((entry, index) => (
                <li key={index}>
                  {entry.action}: {entry.value} 
                  ({new Date(entry.timestamp).toLocaleTimeString()})
                </li>
              ))}
            </ul>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Counter;
