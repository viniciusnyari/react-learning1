import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I´m <strong>{props.name}</strong> and I am <strong>{props.age}</strong> years old and a <strong>{props.gender}</strong>!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Radium(person);