import React ,{Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    employees: [
      { name: 'Wanjala' ,age: 21},
      { name: 'Rotich ',age:22},
      { name: 'Jonte', age:29},
      { name: 'Alex', age:20},
      { name: 'Edwin', age:26 }
    ],
    companyname: "Sirville Brewery"
  };
 
  ChangeEmployesState = (event) => {
    this.setState({
      employees: [
        { name: event.target.value, age: 40 },
        { name: "Rotich", age: 32 },
        { name: 'Jonte', age: 25 },
        { name: 'Alex', age: 22 },
        { name: 'Edwin', age: 21 }
      ],
      companyname: "Sirville Brewery And Lounge"
    });
}


  render() {
    return (
      <div className='App'>
        <h1>{this.state.companyname}</h1>
        <UserOutput name={this.state.employees[0].name}
          changed={this.ChangeEmployesState}/>
        <UserOutput name={this.state.employees[1].name}/>
        <UserOutput name={this.state.employees[2].name}/>
        <UserOutput name={this.state.employees[3].name}/>
        <UserOutput name={this.state.employees[4].name}/>
     
      </div>
      )};
  
}


export default App;
