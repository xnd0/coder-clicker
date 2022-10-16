// import React, { useState } from 'react';
import React from 'react';
// import ClickerOne from './old/ClickerOne';
import Counter from "./Counter";



export default function MainPage() {
    return (
        <div>
            <div className='App-body'>
                <br></br>
            </div>
            {/* <Counter /> */}
            <div className="App">
                <section className="App-body">

                    <div className="App-block">
                        <Counter />
                    </div>

                </section>
                <div className='App-body'>
                    <br></br>
                </div>
                <div className='App-body'>
                    <p> Goal: 10,000 total lines of code - (click the buttons)</p>
                </div>
                <div className='App-body'>
                    <br></br>
                </div>
            </div>
        </div>
    );
}
