import React, { Component } from 'react';
import Person from './Person/Person';


class Persons extends Component {
 


  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    if(nextProps.persons !==this.props.persons){
      return true
    }
    return false;
  }
   
  componentWillUnmount(){
    console.log('[Person.js] componentWillUnmount');
  }

  getSnapshotBeforeUpdate(prevProp, prevState){
    console.log('[Persons.js] getSnapshopBeforeUpdate');
  }
  render(){
   
    console.log('[Persons.js] rendering...');

  return this.props.persons.map((person, index) => {
    return (
      <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={event => this.props.changed(event, person.id)}
      />
    );
  });
 
  }
 }

export default Persons;
