import React from 'react';

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
      <p className="card-text">Total Lines of Code: {props.total}</p>
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
        <div className="card-body App-card">

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


    </div>
  );
}

export default CardBody;
