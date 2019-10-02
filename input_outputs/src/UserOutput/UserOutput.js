import React from 'react';
import UserInput from '../UserInput/UserInput'; 
import './UserOutput.css';

const UserOutput = props => {
  return (
    <div className="UserOutput">
      <p id="p1">The username is {props.name}</p>
      <p>He is an Employee of Sirville</p>
      <UserInput onChanged={props.changed} value={props.name}/>
    </div>
  )
};


export default UserOutput;