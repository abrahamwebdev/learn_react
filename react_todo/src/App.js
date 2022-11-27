// import './App.css';
// import {useState} from "react";
// function App() {
//  const [showText,setShowText] = useState(true);
//   return (
//     <div className="App">
//       <button onClick={()=>{setShowText(!showText)}}>Show/Hide</button>
//       {showText && <h1>Hai I am Abraham</h1>}
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import {useState} from "react";
// function App() {
//  const [age,setAge] = useState(0);

//  const toggleAge=()=>{
//   setAge(age+1)
//  }
//   return (
//     <div className="App">
//       <button onClick={toggleAge}>Increase Age</button>
//       <h1>Age is {age}</h1>
//     </div>
//   );
// }

// export default App;




// import './App.css';
// import {useState} from "react";
// function App() {
//  const [todo,setTodo] = useState([]);
//  const [task,setTask] = useState("");

//  const handleTodo = () => {
//   setTodo([...todo,task])
//  }


//  const handleTask = (event)=>{
//   setTask(event.target.value)
//  }
//  const handleDelete = (todoName) => {
//  setTodo( todo.filter((value)=>value!=todoName))
//  }

//   return (
//     <div className="App">
//       <div className='addTask' >
//         <input type="text" onChange={handleTask}/>
//         <button onClick={handleTodo}>Add Task</button>
//       </div>

//       {todo.map((value,key)=>{
//         return (
//         <div>
//         <h2>{value}</h2>
//         <button onClick={()=>handleDelete(value)} >X</button>
//         </div>
//         );
//       })}
//     </div>
//   );
// }

// export default App;






// import './App.css';
// import {useState} from "react";
// function App() {
//  const [todo,setTodo] = useState([]);
//  const [task,setTask] = useState("");

//  const handleTodo = () => {
//   const newtask= {
//     id: todo.length===0 ? 1 : todo[todo.length-1].id+1,
//     taskName:task
//   }
//   setTodo([...todo,newtask])
//  }


//  const handleTask = (event)=>{
//   setTask(event.target.value)
//  }
//  const handleDelete = (todoid) => {
//  setTodo( todo.filter((value)=>value.id!==todoid))
//  }

//   return (
//     <div className="App">
//       <div className='addTask' >
//         <input type="text" onChange={handleTask}/>
//         <button onClick={handleTodo}>Add Task</button>
//       </div>
//       <div className="list">
//       {todo.map((todoname,key)=>{
//         return (
//         <div>
//         <h2>{todoname.taskName}</h2>
//         <button onClick={()=>handleDelete(todoname.id)} >X</button>
//         </div>
//         );
//       })}
//         </div>
//     </div>
//   );
// }

// export default App;






import './App.css';
import {useState} from "react";
import {Task} from './Task';

function App() {
 const [todo,setTodo] = useState([]);
 const [task,setTask] = useState("");

 const handleTodo = () => {
  const newtask= {
    id: todo.length===0 ? 1 : todo[todo.length-1].id+1,
    taskName:task,
    completed: false,

  }
  setTodo([...todo,newtask])
 }


 const handleTask = (event)=>{
  setTask(event.target.value)
 }
 const handleDelete = (todoid) => {
 setTodo( todo.filter((value)=>value.id!==todoid))
 }
 const completeTask = (todoid) => {
  setTodo(todo.map((value) =>
   {
    if(value.id===todoid)
      {
      return { ...value, completed: true };
      }
    else
      {
      return value;
      }
    }
    )
  );
};

  return (
    <div className="App">
      <div className='addTask' >
        <input type="text" onChange={handleTask}/>
        <button onClick={handleTodo}>Add Task</button>
      </div>
      <div className="list">
      {todo.map((todoname)=>{
       return (
       < Task taskName={todoname.taskName} id={todoname.id} handleDelete={handleDelete} completeTask={completeTask} completed={todoname.completed} />); 
      })}
        </div>
    </div>
  );
}

export default App;