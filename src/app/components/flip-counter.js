import { useState } from "react";
import FlipCard from "./flip-card";

export default function Home() {
  const [counter, setCounter] = useState([0, 0, 0, 0, 0, 0, 0]);

  const increment = () => {
    const newCounter = [...counter];
    newCounter[0]++;

    for (let i = 0; i < newCounter.length; i++) {
      if (newCounter[i] > 9) {
        newCounter[i] = 0;
        if (i + 1 < newCounter.length) {
          newCounter[i + 1]++;
        }
      }
    }

    if (
      newCounter.every((digit, idx) => (idx === 6 ? digit >= 10 : digit === 0))
    ) {
      newCounter.fill(0);
    }

    setCounter(newCounter);
  };

  const decrement = () => {
    const newCounter = [...counter];

    for (let i = 0; i < newCounter.length; i++) {
      if (newCounter[i] > 0) {
        newCounter[i]--;
        break;
      } else {
        newCounter[i] = 9;
      }
    }

    if (newCounter.every((digit) => digit === 0)) {
      newCounter.fill(0);
    }

    setCounter(newCounter);
  };

  return (
    <div>
      <div className="container">
        {/* Invertir el array antes de renderizar */}
        {counter
          .slice()
          .reverse()
          .map((digit, index) => (
            <FlipCard key={index} number={digit} />
          ))}
      </div>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}
