import React from "react"

// const numbers = [11, 22, 33, 44, 55];

let array = []

export default function Vizbox(props) {

    // let i = props.total

    array.push(props.total)

    // if (array.length > 10) {
    //     array.shift()
    // }

    console.log("array is: ", array)
    
    // const numbers = props.total;
    const listItems = array.map((x) =>
        <li>
            {array}:id-code-i:{x}-ref#:{array}-{x}
        </li>
    );

    
    return (
        <div>

            <div className="left">
                <h4>Code Visualizer</h4>
                <p className="card-text">Lines of Code: {listItems.length}  </p>
                {/* <p>"i" display : {React.createElement('div', { props }, i)}</p> */}
                    <ul>{listItems}</ul>
            </div>

        </div>
    )
}