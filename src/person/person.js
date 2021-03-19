import React from 'react';
import './person.css';
const Person=(props)=>
{
    return (
        <div className="person">
<p onClick={props.click}>person name:{props.name} and age is:{props.age}</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name} />
    </div>
    );
}

export default Person;