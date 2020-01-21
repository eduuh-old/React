import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    person: [
      { name: "max", age: 28 },
      { name: "Edwin", age: 22 }
    ]
  };

  switchNameHandler = (newname) => {
    this.setState({
      person: [
        { name: newname, age: 29 },
        { name: "Edwin Kamau", age: 22 }
      ]
    });
  }

  nameChangedHandler = (event)=>{
    this.setState({
      person:[
          {name:event.target.value ,age: 28},
          {name:'Edwin',age: 22}
        
      ]
    })
  }
  render() {

    const style = {
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'poiter'
    };

    return (
      <div className="App">
        <h1>Hi My Name is edwin</h1>

        <Person name="Max" age="28" />
        <Person name="Edwin" age="22" />
        <Person name="Jackson">Hobies: racing</Person>

        <button style={style} onClick={() => this.switchNameHandler('Maximilian!!!')}>Switch Name</button>
        <Person
          click={this.switchNameHandler.bind(this,'Max!')}
          changed={this.nameChangedHandler}
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        >My hobbies: Riding</Person>
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
        ></Person>
      </div>
    );
  }
}
export default App;
