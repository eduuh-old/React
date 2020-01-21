import React from 'react';

const userinput = (props)=> {
    return(
        <div>
            <input onChange={props.changed} value={props.value}/>
        </div>
    )
}

export default userinput;