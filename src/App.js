import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Monu", age: 23 },
      { name: "Singh", age: 33 },
      { name: "Ramkant", age: 33 }
    ],
  };

  switchNameHandler = () =>{
    //   console.log('was clicked');
    this.setState({
        persons: [
            { name: "Math", age: 7 },
            { name: "Chemistry", age: 5 },
            { name: "Social", age: 30 }
          ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi , I am React App</h1>
        <p>Its really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          Hi is my friend , we both worked in smae project!
        </Person>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi This is Manvendra'));
  }
}

export default App;
