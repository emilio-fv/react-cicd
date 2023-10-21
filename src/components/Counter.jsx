import React, { useState } from 'react';

const Counter = ({ initialValue=0 }) => {
  const [count, setCount] = useState(initialValue);

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const decrementBy5 = () => {
    setCount((prev) => prev - 5);
  };

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const incrementBy5 = () => {
    setCount((prev) => prev + 5);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={decrementBy5}>Decrement by 5</button>
        <button onClick={increment}>Increment</button>
        <button onClick={incrementBy5}>Increment by 5</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
};

export default Counter;