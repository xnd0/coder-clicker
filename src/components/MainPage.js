// import React, { useState } from 'react';
import React from 'react';
// import ClickerOne from './old/ClickerOne';
import Counter from "./Counter";



export default function MainPage() {
    return (
        <div>
            {/* <Counter /> */}
            <div className="App">
                <section className="App-body">

                    <div className="App-block">
                        <Counter />
                    </div>

                </section>
                <div>
                    <p> Goal: Write 10,000 lines of code - (click the buttons)</p>
                </div>
            </div>
        </div>
    );
}
