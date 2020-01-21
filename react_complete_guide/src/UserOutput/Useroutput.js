import React from 'react';
import Userinput from '../UserOutput/Useroutput';
const useroutput = (props)=> {
    return(
        <div className="Person">
            <p onClick={props.click}>My fist name is Edwin with username {props.username}</p>
            <p>My Lastname is Muraya</p>

            <Userinput changed={this.changeUsername} value={props.username}/> 
        </div>
    )
}
export default useroutput;