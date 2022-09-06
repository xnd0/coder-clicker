import React from 'react';

// We can see that by logging `props` that what are being passed to this child component is an object containing `count`, `handleIncrement()`, and `handleDecrement()`.

function CardBody(props) {
  return (
    <div className="App-block">
<p className="card-text">TOtal Lines of Code: {props.count}</p>
{/* Lines of Code - LoC  */}
    <div className="card-body App-card">
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
  );
}

export default CardBody;
