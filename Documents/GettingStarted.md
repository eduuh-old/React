> # Getting started with React 
## Next-Gen JavaScript
## Let and Const
- let used for **Variable values**
- const are used for **Constant values.**

## Arrow Functions
 are a more concise syntax for writing function expressions. They utilize a new token, =>, that looks like a fat arrow. Arrow functions are anonymous and change the way this binds in functions.

 Arrow functions make our code more concise, and simplify function scoping and the this keyword. They are one-line mini functions which work much like Lambdas in other languages like C#.By using arrow functions, we avoid having to type the function keyword, return keyword (it’s implicit in arrow functions), and curly brackets

```javascript
// receiving two parameters
const PrintName = (firsname,lastname) =>{
  console.log(firsname,lastname);
}

PrintName("Edwin", "Kamau");

//  receiving one parameter
const Printname = (name) => {
  console.log(name);
}

Printname("Edwin");

//shorter way
const Multiply = number => number * 2;
console.log(Multiply(3));
```
## Export $ Import (Modules)

Writing modular code.
```javascript
const Person = {
  name: "Edwin"
}

export default Person;
```
app.js
```javascript
import Person from '/person.js'; // allways import the default export
import prs  from '/person.js';   // choose any name for default export
```
Named Export
  - You cannot change the name but you could alias.
```javascript
import {smith} from './utility.js';
import {smith as Smith} from './utility.js';
```

> Classes
This are blueprints for object. A class can have both properties and method. A class is instatiated with the **new** keywords.

Classes support inheritance. 
```javascript
class Human{
  gender = "male";
  printGender =()=> {
    console.log(this.gender);
  }
}
class Person extends Human{
  name = "max";
  gender = 'female';

  printMyName =() =>{
    console.log(this.name);
  }
}

const person = new Person();
```

> # Spread and Rest Operators
**Spread**
 - Used to split up array elements OR object properties.

**Rest**
- Used to merge a ist fo fuction arguements into an array.
```javascript
const number = [1, 2, 3];
const numbers = [...number, 4];
console.log(numbers);

const person = {
  name: 'max'
};
// spread operator in objects
const newPerson = {
  ...person,
  age:28
}

//Rest Operator
const filter = (...args) => args.filter(el => el === 1);
console.log(filter(1, 2, 3, 4));class Human{
  gender = "male";
  printGender =()=> {
    console.log(this.gender);
  }
}
class Person extends Human{
  name = "max";
  gender = 'female';

  printMyName =() =>{
    console.log(this.name);
  }
}

const person = new Person();
```

## Destructuring
Easily extract array elemets or object properties and store them in variable. 
```javascript
const number = [1, 2, 3, 4];
[num1, num2, num3] = number;

console.log(num1,num2,num3)
```

## More Javascript Features
```javascript
const numbers = [1, 2, 3, 4];
const doublenumber = numbers.map((num) => {
  return num *2
});
console.log(doublenumber);
console.log(numbers);

```