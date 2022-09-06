import React, { useState } from 'react';
import CardBody from './CardBody';

export default function Counter() {
  // Here we set the state for count and also create a function to update it.
  // Set the initial value to -
  const [count, setCount] = useState(0);
  const [countF, setCountF] = useState(0);

  // Helper function to handle when the user clicks increment
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleIncrementF = () => {
    setCountF(countF + 1);
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
        count={count}
        countF={countF}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleIncrementF={handleIncrementF}
      />
    </div>
  );
}
