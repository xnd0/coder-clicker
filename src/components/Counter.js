import React, { useState } from 'react';
import CardBody from './CardBody';

export default function Counter() {
  // Here we set the state for count and also create a function to update it.
  // Set the initial value to -
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [countF, setCountF] = useState(0);
  const [countAI, setCountAI] = useState(0);

  // Helper function to handle when the user clicks increment
  const handleIncrement = () => {
    setCount(count + 1);
    setTotal(total + 1);
  };

  const handleIncrementF = () => {
    setCountF(countF + 1);
    setTotal(total + 10);
  };

  const handleIncrementAI = () => {
    setCountAI(countAI + 1);
    // setTotal(total + 10);
  };

  // Helper function to handle when the user clicks to "functions"
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App-card text-center">
      <div className="card-header bg-primary text-white">Coder Clicker!</div>
      {/* Here we pass two props to CardBody which happen to be the event handlers we created above */}
      <CardBody
        total={total}
        count={count}
        countF={countF}
        countAI={countAI}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleIncrementF={handleIncrementF}
        handleIncrementAI={handleIncrementAI}
      />
    </div>
  );
}
