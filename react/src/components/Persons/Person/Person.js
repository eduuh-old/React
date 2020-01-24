import React , {Component} from 'react';
import Aux from '../../../context/auth-context';

import classes from './Person.css';
class Person extends Component {
 constructor(){
   super()
    this.inputElementRef = React.createRef();
  }
 static contextType = Aux;

  componentDidMount(){
    this.inputElementRef.current.focus();

    console.log(this.context.authenticated)
  }
  
  render(){
  console.log('[Person.js] rendering...');

  return (
    <Aux>
    <div className={classes.Person}>
    { this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
      <p onClick={this.props.click}>
        I'm {this.props.name} and I am {this.props.age} years old!
      </p>
      <p>{this.props.children}</p>
      <input ref={this.inputElementRef}
      type="text" onChange={this.props.changed} value={this.props.name} />
    </div>
    
    </Aux>
  );
  
  }
 
}

export default Person;
