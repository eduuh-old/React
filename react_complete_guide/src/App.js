import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'max', age: 28 },
      { name: 'manu', age: 29 },
      { name: 'Stepanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };


  

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Edwin", age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stepanie', age: 27 }
      ],
      otherState: 'some other value'
    });
  }


  togglePersonHandler = () => {
    const doeshow = this.state.showPersons;
    this.setState({ showPersons: !doeshow });
  }
  
  deletePersonHander = (personIndex) => {
    const persons = this.state.persons.slice();
   // const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }
  render() {

    const style = {
      backgroundcolor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

  
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
              click={this.deletePersonHander(index)}  
              name={person.name}
              age={person.age} />
          })};
          
        </div > //:null
      );
    }
    return (
      <div className='App'>
        <h1>hi this is Edwin Kamau</h1>
        <p>This is Really Working</p>
        <button style={style}
          onClick={this.togglePersonHandler}>
          Toggle Person
          </button>
        {persons}{
         // this.state.showPersons ?
         }
         // 

        
      </div>

    );
    // return React.createElement('div', { className: 'App' }, React.createElement("h1", null, "Does this exist"));
  }
}

export default App;
