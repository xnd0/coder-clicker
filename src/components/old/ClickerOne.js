import React, { useState } from "react";

// -- Lines of Code 


// const setFunction = () => {
//     countFunctions += 1
// }



const ClickerOne = () => {
    const [countLoC, setCount] = useState(0);
    const [countFunction, setFunction] = useState (0);
    //   const mainCount = count;
    if (countLoC >= 10) {
        console.log("OVER 10")

    }
    return (
        <div className="App-block">

            <div className="App-card">
                <p>You have written {countLoC} lines of code</p>
                <button onClick={
                    () => setCount(countLoC + 1)
                }>Write Line of Code</button>
            </div>

            <div className="App-card">
                <p>You have written {countFunction} functions</p>
                <button onClick={
                    () => setFunction(
                        countFunction + 1)
                }>Write Function</button>
            </div>

        </div>

    );
};

export default ClickerOne;