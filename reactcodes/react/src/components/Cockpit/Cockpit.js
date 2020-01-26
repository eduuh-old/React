import React, {useEffect, useRef,useContext} from 'react';

import classes from './Cockpit.css';
import AuthContext from './../../context/auth-context';

const cockpit = ( props ) => {
  
  const toggleBtnref = useRef(null);
  const authContext = useContext(AuthContext);
  // toggleBtnref.current.click();

  console.log(authContext.authenticated);
   useEffect(()=>{
     console.log('[cockpit] useEffect');

    //  const timer = setTimeout(()=>{
    //   alert('saved data to cloud!!');
    //  },1000);
    toggleBtnref.current.click();
     return ()=>{
      //  clearTimeout(timer);
       console.log('[Cockpit] cleanup fuction');
     };
   },[]);

   useEffect(()=>{
     console.log('[Cockpit.js] 2nd useEffect');
     return ()=>{
       console.log('[Cockpit.js] clean up work in 2nd effect');
     };
   });

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.personsLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button ref={toggleBtnref}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
             
           <button onClick={authContext.login}>Log In</button>
                
        </div>
    );
};

export default React.memo(cockpit);