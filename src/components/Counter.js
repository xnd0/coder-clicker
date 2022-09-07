import React, { useState, useEffect } from 'react';
import CardBody from './CardBody';







export default function Counter() {
  // Here we set the state for count and also create a function to update it.
  // Set the initial value to -
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [countF, setCountF] = useState(0);
  const [countAI, setCountAI] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will be called every 1 seconds');
      handleIncrement();

    }, 1000);
  
    return () => clearInterval(interval);
  }, [count]);


  // const [value, setValue] = useState(0);
  // var master = useRef(total);
  // const increment = () => {
  //   // master = total;
  //   master.current = React.memo(setInterval(() => setTotal(total + 5), 1000));
  // };

  // increment();

//   const autoIncrement = () => {
//     // total.preventDefault();
//   setInterval(function() {
//     // total.preventDefault();
//     setTotal(total + 100);
//   },1000);
// }

// autoIncrement();
// var iter = 0;
// function autoCounter() {
//     console.log('show at ' + (iter++));
//     setTotal(total + 100);
//     setTimeout(autoCounter, 1000);
// }



// autoCounter();

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
    // autoIncrement();
    // autoCounter();
    if (countAI > 2) {
      setInterval(function() {
      for (let i = 0; i < 10000; i++) {
          // i.preventDefault();
          setCountAI(countAI + 33);
          
        // const element = array[i];
      }
    },1000);
    }

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
