import React , {Component} from 'react';

import classes from './Person.css';
class Person extends Component {
 constructor(){
   super()
    this.inputElementRef = React.createRef();
  }

  componentDidMount(){
    this.inputElementRef.current.focus()
  }
  
  render(){
  console.log('[Person.js] rendering...');

  return (
    <div className={classes.Person}>
      <p onClick={this.props.click}>
        I'm {this.props.name} and I am {this.props.age} years old!
      </p>
      <p>{this.props.children}</p>
      <input ref={this.inputElementRef}
      type="text" onChange={this.props.changed} value={this.props.name} />
    </div>
  );
  
  }
 
};

export default Person;
