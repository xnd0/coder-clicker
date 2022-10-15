import React from 'react';

import ProgressBar from "@ramonak/react-progress-bar";
// import '@ramonak/react-progress-bar/dist/styles.css'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function CardBody(props) {
  return (
    <div>
      <div className='flex-row'>



        <div className='flex-columnm'>
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


        <div className='flex-column'>

          {/* -- 1st Lines of Code Card - LoC -- */}
          <div className='App-block'>
            <div className="card-body App-card flex-row">

              <div>
                {/* 1st CIRCLE Progress Bar LoC (circle) */}
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
                <p className="card-text">Lines of Code (+1): {props.count}</p>
              </div>
            </div>



            {/* -- 2nd Card - Functions -- */}
            <div style={{ display: props.count >= 10 ? "flex" : "none" }}>
              <div className="card-body App-card flex-row hidden-function">

                <div>
                  {/* Progress Bar (circle) */}
                  <div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar value={(props.countF) * 10} />
                  </div>
                </div>

                <br></br>

                <div>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={props.handleIncrementF}
                >
                  "Hand Write" Function
                </button>{' '}
                <p className="card-text">Functions (+10): {props.countF}</p>
                {/* <button
                  type="button"
                  className="btn btn-danger"
                  onClick={props.handleDecrementF}
                >
                  Decrement
                </button> */}

</div>
              </div>
            </div>



            {/* 3rd Card - AI Auto Bot  */}
            <div style={{ display: props.countF >= 10 ? "flex" : "none" }}>
              <div className="card-body App-card flex-row">

                <div>
                  {/* Progress Bar (circle) */}
                  <div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar value={(props.countAI) * 100} />
                  </div>
                </div>

                <br></br>

<div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={props.handleIncrementAI}
                >
                  Initialize Auto Bot
                </button>{' '}
                <p className="card-text">Auto Bot Algorithm: {props.countAI}</p>
                {/* <button
                  type="button"
                  className="btn btn-danger"
                  onClick={props.handleDecrementAI}
                >
                  Deactivate
                </button> */}
              </div>
            </div>
            </div>
          </div>
          {/* <p className="card-text">Aprox Number of Functions: ({props.total / 10}) </p> */}
        </div>



        {/* -v-v-v- ScoreCard Info Area -v-v-v- */}
        <div className='center'>
          <p className="card-text">Total Lines of Code: {props.total}  </p>

          {/* linear progress bar  */}
          {/* <div className='l-bar'>
          <ProgressBar completed={((props.total) * 0.01)} maxCompleted={100} bgColor="#61dafb" />
          </div> */}

          <div className="center flex-column">

            {/* -- Progression Messages --  */}
            <div style={{ display: props.total >= 1000 ? "flex" : "none" }}>
              <p style={{ display: props.total >= 5000 ? "none" : "flex" }}> Wow! 1,000+ lines of code </p>
            </div>

            <div style={{ display: props.total >= 5000 ? "flex" : "none" }}>
              <p style={{ display: props.total >= 10000 ? "none" : "flex" }}> 5,000!? Half way there </p>
            </div>

            <div style={{ display: props.total >= 10000 ? "flex" : "none" }}>
              <p> 10,000+ lines of code. </p>
            </div>

          </div>
        </div>
        {/* -^-^-^- End ScoreCard Info Area -^-^-^- */}

      </div>
    </div>
  );
}

export default CardBody;
