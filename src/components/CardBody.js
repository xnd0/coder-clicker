import React from 'react';

import ProgressBar from "@ramonak/react-progress-bar";
// import '@ramonak/react-progress-bar/dist/styles.css'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function CardBody(props) {
  return (
    <div>
      <div className='center'>
        <p className="card-text">Total Lines of Code: {props.total}  </p>

        {/* linear progress bar  */}
        {/* <div className='l-bar'>
          <ProgressBar completed={((props.total) * 0.01)} maxCompleted={100} bgColor="#61dafb" />
        </div> */}

        <div className="center">

          {/* -- Progression Messages --  */}
          <div style={{ display: props.total >= 1000 ? "flex" : "none" }}>
            <p style={{ display: props.total >= 5000 ? "none" : "flex" }}> Wow! 1,000 lines of code </p>
          </div>

          <div style={{ display: props.total >= 5000 ? "flex" : "none" }}>
            <p style={{ display: props.total >= 10000 ? "none" : "flex" }}> 5,000!? Half way there </p>
          </div>

          <div style={{ display: props.total >= 10000 ? "flex" : "none" }}>
            <p> 10,000+ lines of code. </p>
          </div>

        </div>

        {/* row  */}
        <div>
          {/* AI UPGRADER  */}
          <div style={{ display: props.countAI >= 1 ? "flex" : "none" }}>
            <div className="card-body App-card">

              <p className="card-text">Active AutoBot Algorithms: {props.countAI}</p>
              <p className="card-text">Speed Upgrades: {props.countSpeed}</p>

              <button
                type="button"
                className="btn btn-danger"
                onClick={props.handleFasterAI}
              >
                FASTER
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={props.handleSlowerAI}
              >
                SLOWER
              </button>

              <button
                type="button"
                className="btn btn-danger"
                onClick={props.handleDecrementAI}
              >
                Deactivate
              </button>

            </div>
          </div>
        </div>
        {/* Lines of Code - LoC  */}
        <div className='App-block'>
          <div className="card-body App-card flex-row">

            <div className='left'>
              {/* CIRCLE Progress Bar LoC (circle) */}
              <div style={{ width: 50, height: 50 }}>
                <CircularProgressbar value={(props.count) * 10} />
              </div>
            </div>


            <br></br>

            <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={props.handleIncrement}
            >
              "Hand Write" Line of Code
            </button>{' '}
            {/* <button
              type="button"
              className="btn btn-danger"
              onClick={props.handleDecrement}
            >
              Decrement
            </button> */}

            {/* -- display count --  */}
            <p className="card-text">Lines of Code: {props.count}</p>

            </div>

          </div>



          {/* functions  */}
          <div style={{ display: props.count >= 10 ? "flex" : "none" }}>
            <div className="card-body App-card hidden-function">

              <div>
                {/* Progress Bar (circle) */}
                <div style={{ width: 100, height: 100 }}>
                  <CircularProgressbar value={(props.countF) * 10} />
                </div>
              </div>

              <p className="card-text">Functions: {props.countF}</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={props.handleIncrementF}
              >
                Write Function
              </button>{' '}
              <button
                type="button"
                className="btn btn-danger"
                onClick={props.handleDecrementF}
              >
                Decrement
              </button>
            </div>
          </div>



          {/* AI Bots  */}
          <div style={{ display: props.countF >= 10 ? "flex" : "none" }}>
            <div className="card-body App-card">

              <div>
                {/* Progress Bar (circle) */}
                <div style={{ width: 100, height: 100 }}>
                  <CircularProgressbar value={(props.countAI) * 100} />
                </div>
              </div>

              <p className="card-text">Auto Bot Algorithm: {props.countAI}</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={props.handleIncrementAI}
              >
                Activate Auto Bot
              </button>{' '}
              <button
                type="button"
                className="btn btn-danger"
                onClick={props.handleDecrementAI}
              >
                Deactivate
              </button>

            </div>
          </div>

        </div>
        {/* end row  */}

        {/* <p className="card-text">Aprox Number of Functions: ({props.total / 10}) </p> */}
      </div>
    </div>
  );
}

export default CardBody;
