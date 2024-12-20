"use client";
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <div className="flex space-x-1">
        {counter
          .slice()
          .reverse()
          .map((digit, index) => (
            <FlipCard key={index} number={digit} />
          ))}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={increment}
          className="w-12 h-12 bg-blue-500 text-white font-bold rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition ease-in-out duration-300 flex items-center justify-center"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="w-12 h-12 bg-red-500 text-white font-bold rounded-full shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition ease-in-out duration-300 flex items-center justify-center"
        >
          −
        </button>
      </div>
    </div>
  );
}
