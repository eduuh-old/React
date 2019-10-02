> ## Why React
Ui State becomes difficult to handle using javascript. 
- React help by making Ui management a non-issue. 
- Focus of Business logic, not on preventing your app from exploding.
    - Framework creators probably make better frameworks
- Huge ecosystem, Active community, High performance.

> ## Alternative
- Angular 
- React 
- vue

> ## Two Kinds of Applications
1. Single page applications
  - only get one file HTML page, content is Rendered of client.
  - popular approach.
  - The entire page is build with react components
  - Has one **ReactDOM.render()**

2. Multi page Applicatins
   - Multiple html pages, content is rendered on the server.
   - could have a bunch or react components and some html files.(React is not fully aware of the existance of other files.)
  - Has many **ReactDOM.render()**
  
> ## React Topic To Read
1.  Getting started
2.  The basics
3. Debugging 
4. Styling Components
5. Routing 
6. Http Requests
7. Components Deep Dive
8. Forms and Validation
9. Redux
10. Authentications
11. Testing Introductions
12. Deployments
13. Animations 

Components are the core building block of React apps. Actually, react really is just a library for creating components in its core. A typical React app therefr could be depicated as a component tree. Having one root components ("App") and then an potentiallly infinite amount of nested child components. 

Each components needs to return/render some jsx code it defines which HTML code react should render to the real Dom in the end.

JSX is not HTML but it looks a lot like it. Differences can be seen when looking closely though(for example className in JSX vs in 'normal HTML"). Jsx is just syntactic sugar for javascript allowing you to write HTMLish code instead of nested React.createElement(...) calls.

When creating components you have the choice between two different ways.
1. Functional components (also referred to as "presentational","dumb" or "stateless" componets - more about this later in the course) => const cmp =() => {return <div> some JSX</div>}(Using ES%6 Arrow Fuctions as shown here is recommended but optional.)
2. Class-based components (also referred to as containers, 'Smart" or "stateful" components) => class cmp extends Components) {render () {return <div> some Jsx</div>}}

## Properties and State
Props and state are core concepts of React, Actually only changes in props and /or state trigger React to re-render your components (a detailed look at how React checks whether to really touch the real Dom is provided in Section 6).
## Props

Props allow you to pass data from  a parent (wrapping component) to a child (embedded) components.
Example
> ### AllPost Component
```jsx
const post = () =>{
  return (
    <div> 
        <post>title="My first Post"</post>
    </div>
  );
}
```
Here the title is the custome property (prop) set up on the custom Post component . we basically replicate the default HTML attribute behaviour we already know(eg. <input type="text"> informs the browser about how to handle that input.)

> ### Post Component
```Javascript
const post = (post) => {
  return (
    <div> 
       <h1>{props.title}</h1>
    </div>
  );
}
```
The Post componet receive the props argument. You can of course name this argument whatever you want - it's your function definition, React doen't care but React will pass one arguemen to your component functions => an arguement to your component functions => An object, which contains all properties you set up on <post>

{props.title} then dynamically ouputs the title property of the props object - which is available since we set the title property inside AllPosts Component.

## State

Whilst props allow you to pass data down the componet tree(and hence trigger and Ui Update), state is used to change the component, well, state from within. Change to state also trigger an UI Update.

## Example.

NewPost Components:
```javascript
class newPost extends Components {
  state = {
    counter: 1
  };
 render (){
   return (
     <div>{this.state.counter}</div>
   )
 }
}

```
Here the newPost component contains state, Only class-based component can define and use State. YOu can of course pass the state down to functional components, but these then can't directly edit it.

State simply is a property of the component class, you have to call it state through- the name is not optional. You can then access it via this.state in your class jsx code (which you return in the required render() method).

Whenever state changes (taught over the next lectures), the components will re-render and reflect the new state. The difference to props is , that this happens within one and the same component - You don't receive new data (props) from outside.