import React from 'react';
import Person from './Persons/Person/Person'

const persons = (props) =>
   props.person.map((person,index) => {
            return  <Person key={person.id}
             click = {()=>this.clicked(index)}
             name={person.name}
             age = {person.age}
             changed = {(event)=>this.changed(event,person.id)}
             />
});

export default persons;