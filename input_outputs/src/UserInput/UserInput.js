import React, { Component } from 'react';

const UserInput = props => {
  return(
    <div>
      <input type="text" onChange={props.onChanged} value={props.value} />
    </div>
  );
  }
export default UserInput;