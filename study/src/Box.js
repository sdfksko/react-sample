import React from 'react';

function Box(props) {
    return(
        <div className="box">
            <p>Box {props.num}</p>
            <p>{props.name}</p>
        </div>
    )
}

export default Box;