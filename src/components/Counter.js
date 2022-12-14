import React, { useState, useEffect } from 'react';
import CardBody from './CardBody';
import Vizbox from './Vizbox';


export default function Counter() {
  // Here we set the state for count and also create a function to update it.
  // Set the initial value to -
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [countF, setCountF] = useState(0);
  const [countAI, setCountAI] = useState(0);
  const [counterAI, setCounterAI] = useState(0);
  // const [fasterAI, setFasterAI] = useState(0);
  const [countSpeed, setCountSpeed] = useState(1);
  // const [viz, setViz] = useState(total)

  // console.log(counterAI, "...counterAI is")
  // if (total >= 200) {
  //   alert("200+ lines of code. Thanks for the working Program! \n Starting you Over. ")
  //   setTotal(total - 199)
  // }

  let y = (1000 / countSpeed);


  useEffect(() => {

    if (countAI < 1) {
      return;
    } else {

      const interval = setInterval(() => {
        // let counterAI = countAI
        // let x = 1
        setTotal(total + 1);

        setCounterAI(counterAI + 1);
        // console.log(counterAI, 'This is Called');
        
      }, y);

      return () => clearInterval(interval);
    }
  }, [counterAI]);


  // Helper function to handle when the user clicks increment
  const handleIncrement = () => {
    setCount(count + 1);
    setTotal(total + 1);
    // if (count > 10) {
    //   console.log('got 10!')
    // }
  };

  const handleIncrementF = () => {
    setCountF(countF + 1);
    setTotal(total + 1);
  };

  const handleIncrementAI = () => {
    if (countAI > 0) {
      return;
    }
    setCountAI(countAI + 1);
    // console.log(counterAI, 'in function')
    setCounterAI(counterAI + 1)
  };

  // Helper function to handle when the user clicks to "functions"
  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleDecrementAI = () => {
    setCountAI(countAI - 1);
  };

  const handleFasterAI = () => {
    setCountSpeed(countSpeed + 1);
  };

  const handleSlowerAI = () => {
    setCountSpeed(countSpeed - 1);
    return;
  };

  // const handleViz = () => {
  //   setViz(console.log('testViz'))
  // }

  
  return (
    <div className="App-card text-center">
      <div>Coder Clicker</div>

      <div>

        <div>
          {/* pass props to CardBody which are the event handlers above */}
          <CardBody
            total={total}
            count={count}
            countF={countF}
            countAI={countAI}
            countSpeed={countSpeed}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleIncrementF={handleIncrementF}
            handleIncrementAI={handleIncrementAI}
            handleDecrementAI={handleDecrementAI}
            handleFasterAI={handleFasterAI}
            handleSlowerAI={handleSlowerAI}
          />
        </div>


        {/* -- VizBox Container Div -- */}
        <div>
          {/* pass props to Vizbox  */}
          <div className='vizbox'>
            <Vizbox
              total={total}
            // viz={handleViz}
            />
          </div>
        </div>


      </div>
    </div>
  );
}
