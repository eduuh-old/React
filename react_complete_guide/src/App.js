import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [personStates , SetPersonsState] = useState({
     persons: [
      { name: 'max', age: 28 },
      { name: 'manu', age: 29 },
      { name: 'Stepanie', age: 26 }
    ],
     otherState: 'some other value'
  });

  
  const switchNameHandler = () => {
    SetPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'manu', age: 29 },
        { name: 'Stepanie', age: 27 }
      ],
      otherState: 'some other value'
    });
  };

    return (
      <div className='App'>
        <h1>hi this is Edwin Kamau</h1>
        <p>This is Really Working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personStates.persons[0].name} age={personStates.persons[0].age} />
        <Person name={personStates.persons[1].name} age={personStates.persons[1].age}/>
        <Person name={personStates.persons[2].name} age={personStates.persons[2].age} />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement("h1", null, "Does this exist"));
  }


export default App;
