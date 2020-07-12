import React from 'react';
import "./Userinput.css"

const Userinput = (props) => {

    return(
        <div className="Userinput">
            <input type="text" placeholder="Enter text" onChange={props.changed} value={props.text}></input>
            <h1>{props.text}</h1>
        </div>
    );
}

export default Userinput;

