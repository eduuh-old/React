import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Useroutput from "./UserOutput/Useroutput";
import Userinput from "./UserInput/Userinput";

class App extends Component {
  state = {
    person: [
      { name: "max", age: 28 },
      { name: "Edwin", age: 22 }
    ],
    usernames:['max','Admin','Edd']
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

  updateUsernameHandler= () =>{
    this.setState({
      usernames:['Maximilian','Administrator','Edwin']
    });

  }

  changeUsername= (event)=> {
    this.setState({
      usernames:[event.target.value,'Maximilian',"Edwin"]
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
       
      
       <button onClick={this.updateUsernameHandler}>Update Usernames</button>
       <Useroutput click={this.changeUsername} username = {this.state.usernames[0]}/>
       <Useroutput username = {this.state.usernames[1]}/>
       <Useroutput username = {this.state.usernames[2]}/> 
         


      </div>
    );
  }
}
export default App;
