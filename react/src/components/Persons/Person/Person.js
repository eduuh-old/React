import React , {Component} from 'react';
import AuthContext from '../../../context/auth-context';

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
    <AuthContext.Consumer>
    <div className={classes.Person}>
    {(context)=> context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
      <p onClick={this.props.click}>
        I'm {this.props.name} and I am {this.props.age} years old!
      </p>
      <p>{this.props.children}</p>
      <input ref={this.inputElementRef}
      type="text" onChange={this.props.changed} value={this.props.name} />
    </div>
    
    </AuthContext.Consumer>
  );
  
  }
 
}

export default Person;
