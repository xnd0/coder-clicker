import React from 'react';

import ProgressBar from "@ramonak/react-progress-bar";
// import '@ramonak/react-progress-bar/dist/styles.css'

// const Example = () => {
//   return <ProgressBar completed={60} />;
// };



// import { CircularProgressbar } from "react-circular-progressbar";

// const MyComponent: React.FC = () => {
// const points = 30000 //only of testing
//  const percentage = (points / 10000) * 100; //calculate the percentage
//  return (
//         <div>
//             <CircularProgressbar value={percentage} text={points} />
//         </div>
//     );
// }
// export default MyComponent;

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;

<CircularProgressbar value={percentage} text={`${percentage}%`} />;
// We can see that by logging `props` that what are being passed to this child component is an object containing `count`, `handleIncrement()`, and `handleDecrement()`.

function CardBody(props) {
  return (
    <div>
      <div className='center'>
        <p className="card-text">Total Lines of Code: {props.total}  </p>



        {/* linear progress bar  */}
        <div className='l-bar'>
          <ProgressBar completed={((props.total) * 0.01)} maxCompleted={100} bgColor="#61dafb" />
        </div>



        <div className="center">
          {/* Progress Bar LoC (circle) */}
          {/* <div style={{ width: 70, height: 70 }}>
            <CircularProgressbar value={(props.total) * 0.001} />
          </div> */}



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
        </div>
        {/* Lines of Code - LoC  */}
        <div className='App-block'>
          <div className="card-body App-card">

            <div>
              {/* Progress Bar LoC (circle) */}
              <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar value={(props.count) * 5} />
              </div>
            </div>

            <p className="card-text">Lines of Code: {props.count}</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={props.handleIncrement}
            >
              Write Line of Code
            </button>{' '}
            <button
              type="button"
              className="btn btn-danger"
              onClick={props.handleDecrement}
            >
              Decrement
            </button>
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

              <p className="card-text">Auto Bot: {props.countAI}</p>
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
              <button
                type="button"
                className="btn btn-danger"
                onClick={props.handleFasterAI}
              >
                FASTER
              </button>
            </div>
          </div>

        </div>
        {/* end row  */}


        {/* AI UPGRADER  */}
        <div style={{ display: props.countAI >= 1 ? "flex" : "none" }}>
          <div className="card-body App-card">

            <div>
              {/* Progress Bar (circle) */}
              {/* <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar value={(props.countAI) * 100} />
              </div> */}
            </div>

            <p className="card-text">AutoBot Upgrader: {props.countAI}</p>
            <p className="card-text">Speed Upgrades: {props.countSpeed}</p>
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
            <button
              type="button"
              className="btn btn-danger"
              onClick={props.handleFasterAI}
            >
              FASTER
            </button>
          </div>
        </div>


      </div>
    </div>
  );
}

export default CardBody;
