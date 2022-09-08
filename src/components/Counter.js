import React, { useState, useEffect } from 'react';
import CardBody from './CardBody';







export default function Counter() {
  // Here we set the state for count and also create a function to update it.
  // Set the initial value to -
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [countF, setCountF] = useState(0);
  const [countAI, setCountAI] = useState(0);
  const [counterAI, setCounterAI] = useState(0);


  console.log(counterAI, "...counterAI is")


  useEffect(() => {

    if (countAI < 1) {
      return;
    } else {

    const interval = setInterval(() => {
      // let counterAI = countAI

      setTotal(total + 1);
      setCounterAI(counterAI + 1);
      console.log(counterAI, 'This will be called every 1 second');
      // console.log(total)

      // handleIncrement();

      // setTotal(total + 1);
    }, 1000);


    return () => clearInterval(interval);
  }}, [counterAI]);


  // Helper function to handle when the user clicks increment
  const handleIncrement = () => {
    setCount(count + 1);
    setTotal(total + 1);

    if (count > 10) {
      console.log('got 10!')
      
    }

  };

  const handleIncrementF = () => {
    
    setCountF(countF + 1);
    setTotal(total + 10);
  };

  const handleIncrementAI = () => {
    if (countAI > 0) {
      return;
    }
    setCountAI(countAI + 1);
    console.log(counterAI, 'in function')
    setCounterAI(counterAI + 1)
  };

  // Helper function to handle when the user clicks to "functions"
  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleDecrementAI = () => {
    setCountAI(countAI - 1);
  };

  // if (count > 10) {
  //   console.log('got 10!')

  // }

  return (
    <div className="App-card text-center">
      <div className="card-header bg-primary text-white">Coder Clicker!</div>
      {/* Here we pass props to CardBody which happen to be the event handlers we created above */}
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
