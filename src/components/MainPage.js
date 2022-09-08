// import React, { useState } from 'react';
import React from 'react';
import ClickerOne from './ClickerOne';
import Counter from "./Counter";



export default function MainPage() {
    return (
        <div>
            {/* <Counter /> */}
            CLICKER CODER CLICKER CODER CLICKER
            <div className="App">
                <section className="App-body">
                    

                    {/* <div className="App-block">
                        {ClickerOne()}
                    </div> */}

                    <div className="App-block">
                        <Counter />
                    </div>

                </section>
                <div>
                    <p>
                        Welcome to Coder Clicker
                    </p>
                    <p> Goal: Get to 200 - How many lines of code can you write?</p>
                </div>
            </div>
        </div>
    );
}
