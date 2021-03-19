import React, { Component} from 'react';
import './App.css';
import Person from './person/person'
class App extends Component{
  state={
    persons: [

      {name:"sahil", age:"28"},
      {name:"Ankita", age:"29"},
      {name:"Bhushan", age:"30"}

    ],
    otherState:'some other value'
  }
  clickNameHandler=(newname)=>
  {
    //console.log("It was clciked");
    this.setState({
      persons: [
        {name:newname, age:"28"},
        {name:"Ankita", age:"29"},
        {name:"Bhushan", age:"27"}
      ]

    })
  }
  namechanghandler=(event)=>
  {
    //console.log("It was clciked");
    this.setState({
      persons: [
        {name:"sahil", age:"28"},
        {name:event.target.value, age:"29"},
        {name:"Bhushan", age:"26"}
      ]

    })
  }

  render()
  {
    return (
      <div className="App">
        <h1>Hi , I'm react app</h1>
        <button onClick={() => this.clickNameHandler.bind(this,'Sahilk')}>Click Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.clickNameHandler.bind(this,'sahil!!')}
        changed={this.namechanghandler}>My hobbies: Dancing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    );
  }
}
 

export default App;
