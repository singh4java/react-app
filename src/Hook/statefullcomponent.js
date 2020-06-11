// import React, { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Person from "./Person/Person";

// const app = props => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: "Monu", age: 23 },
//       { name: "Singh", age: 33 },
//       { name: "Ramkant", age: 33 }
//     ]
//   });

//   const [otherState, setOtherState] = useState('other state value');
//   console.log(personState,otherState)

//   const switchNameHandler = () => {
//     //   console.log('was clicked');
//     setPersonState({
//       persons: [
//         { name: "Math", age: 7 },
//         { name: "Chemistry", age: 5 },
//         { name: "Social", age: 30 }
//       ]
//     });
//   };



//   return (
//     <div className="App">
//       <h1>Hi , I am React App</h1>
//       <p>Its really working</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personState.persons[0].name}
//         age={personState.persons[0].age}
//       />
//       <Person
//         name={personState.persons[1].name}
//         age={personState.persons[1].age}
//       />
//       <Person
//         name={personState.persons[2].name}
//         age={personState.persons[2].age}
//       >
//         Hi is my friend , we both worked in smae project!
//         </Person>
//     </div>
//   );

// };
// // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi This is Manvendra'));
// export default app;