import React, { useState } from "react";

// -- Lines of Code 

const ClickerOne = () => {
    const [countLoC, setCount] = useState(0);
    //   const mainCount = count;
    if (countLoC >= 10) {
        console.log("OVER 10")
    }
    return (
        <div>

            <div>
                <p>You have written {countLoC} lines of code</p>
                <button onClick={
                    () => setCount(countLoC + 1)
                }>Write Line of Code</button>

            </div>

        </div>

    );
};

export default ClickerOne;