// import './App.css';
// function App() {
//   const name=<h1>Abraham</h1>
//   const age=<h2>24</h2>
//   const email=<h3>abr@gmail.com</h3>
//   const User=(
//   <div>
//   {name}
//   {age}
//   {email}
//   </div>
//   );
//   return (
//     <div className="App">
//     Hello Abraham!!!
//     {User}
//     {User}
//     {User}
//     </div>
//   );
// }
// export default App;

// import './App.css';
// function App() {
//   const name=<h1>Abraham</h1>
//   const age=<h2>24</h2>
//   const email=<h3>abr@gmail.com</h3>
//   const User=(
//   <div>
//   {name}
//   {age}
//   {email}
//   </div>
//   );
//   return (
//     <div className="App">
//     Hello Abraham!!!
//     {User}
//     {User}
//     {User}
//     </div>
//   );
// }
// const getName=()=>{
//   return "Isac"
// }
// const GetNameComponent=()=>{
//   return <h1>Isac George </h1>
// }
// export default App;



// import './App.css';
// function App() {
 
//   return (
//     <div className="App">
//     Hello Abraham!!!
//     <User/>
//     <User/>
//     <User/>
//     </div>
//   );
// }
// const User=()=>{
// return(
// <div>
//   <h1>Abraham</h1>
//   <h2>24</h2>
//   <h3>abr@gmail.com</h3>
// </div>
// );
// };

// export default App;






// import './App.css';
// function App() {
 
//   return (
//     <div className="App">
//     Hello Abraham!!!
//     <User name="Abraham" age={23} email="abr@gmail.com"/>
//     <User />
//     <User />
//     </div>
//   );
// }
// const props={
//   name:"Abraham",
//   age:23,
//   email:"abr@gmail.com"
// }
// const User=(prop)=>{
// return(
// <div>
//   <h1>{prop.name}</h1>
//   <h2>{prop.age}</h2>
//   <h3>{prop.email}</h3>
// </div>
// );
// };

// export default App;





// import './App.css';
// function App() {
//   const planets = [
//   { name: "Mars", isGasPlanet: false },
//   { name: "Earth", isGasPlanet: false },
//   { name: "Jupiter", isGasPlanet: true },
//   { name: "Venus", isGasPlanet: false },
//   { name: "Neptune", isGasPlanet: true },
//   { name: "Uranus", isGasPlanet: true },
// ];
 
//   return (
//     <div className="App">
//     Hello Abraham!!!
//     <User name="Abraham" age={23} email="abr@gmail.com"/>
//     {planets.map((planet,key)=>{
//      return !planet.isGasPlanet &&  <h2>{planet.name
//       }</h2>}
//     )}
//     </div>
//   );
// }
// const props={
//   name:"Abraham",
//   age:23,
//   email:"abr@gmail.com"
// }
// const User=(prop)=>{
// return(
// <div>
//   <h1>{prop.name}</h1>
//   <h2>{prop.age}</h2>
//   <h3>{prop.email}</h3>
// </div>
// );
// };
// export default App;





import './App.css';
import {useState} from "react";

function App() {
const [input,setInput] = useState("");
const toggleInput = (event)=> {
  setInput(event.target.value)
}
  return (
    <div className="App">
    Hello Abraham!!!
    <input type="text" onChange={toggleInput}/>
    <h2>Current value is:{input}</h2>
    </div>
  );
}


export default App;