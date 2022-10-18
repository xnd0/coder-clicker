import React from "react"

// const numbers = [11, 22, 33, 44, 55];

let array = []

export default function Vizbox(props) {

    // const line1 = <h6>line 1 Lorem ipsum dolor {props.total}</h6>
    // const line2 = <h6>line 2 arhhr ertw tjyj {props.total}</h6>

    let i = props.total

    array.push(props.total)

    console.log("array is: ", array)
    
    // const numbers = props.total;
    const listItems = array.map((number) =>
        <li key={number}>
            {array}-code-{number}
        </li>
    );


    return (
        <div className="vizbox">

            <div>
                <p>Vizbox Component</p>
                {/* <p className="card-text">Vizbox Display: {props.total}  </p> */}
                <p>"i" display : {React.createElement('div', { props }, i)}</p>
                <ul>
                    <ul>{listItems}</ul>
                </ul>
            </div>

        </div>
    )
}