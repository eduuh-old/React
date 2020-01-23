import React, { Component } from "react";
import css from "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    person: [
      {id:1, name: "max", age: 28 },
      { id:2,name: "Edwin", age: 22 }
    ],
    usernames: ["max", "Admin", "Edd"],
    showPerson: false
  };

  switchNameHandler = newname => {
    this.setState({
      person: [
        { name: newname, age: 29 },
        { name: "Edwin Kamau", age: 22 }
      ]
    });
  };

  nameChangedHandler = (event, id) => {
      const personIndex = this.state.person.findIndex(p => {
          return p.id ===id;
      });

      const person = {
          ...this.state.person[personIndex]
      };
      
      person.name = event.target.value;
      const persons = [...this.state.person];
      persons[personIndex] = person;

    this.setState({
      person:persons }
    );
  };

  updateUsernameHandler = () => {
    this.setState({
      usernames: ["Maximilian", "Administrator", "Edwin"]
    });
  };

  changeUsername = event => {
    this.setState({
      usernames: [event.target.value, "Maximilian", "Edwin"]
    });
  };

  togglePersonHandler = () => {
    const doesshow = this.state.showPerson;
    this.setState({
      showPerson: !doesshow
    });
  };

  deletepersonHandler = (personIndex) => {
    const persons =[...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({person:persons});

  }

  printlengthofEnteredtext = ()=> {

  }
  
  render() {
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "poiter",
    
    };

    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
        {
            this.state.person.map((person,index) => {
            return <Person key={person.id}
             click = {this.deletepersonHandler}
             name={person.name}
             age = {person.age}
             changed = {(event) => this.nameChangedHandler(event,person.id)}
             />
        })
        }
        </div>
      );

      style.backgroundColor = "red";
    
    }
     
    let classes = [];
    if(this.state.person.length <= 2){
      classes.push('red');

    } 
    if(this.state.person.length <= 1){
      classes.push('bold');
    }

    return (
     
      <div className={css.App}>
        <h1>Hi My Name is edwin</h1>
        <p className={classes.join(' ')}>This is really working</p>

        <button style={style} onClick={this.togglePersonHandler}>
          Switch Name
        </button>

        {person}
      </div>
     
    )
  }
}
export default App; 
