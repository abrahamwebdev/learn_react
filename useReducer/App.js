import React,{useReducer} from 'react'

const reducer=(state,action)=>{
	switch(action.type){
		case 'increment':
			return {count:state.count+1}
		case 'decrement':
			return {count:state.count-1}
		default:
			return state
	}
}


 function App() {
// const [count,setCount]=useState(0)
// const increment=()=>{
// 	setCount((count)=>count+1)
// }
// const decrement=()=>{
// 	setCount((count)=>count-1)
// }

const [state,dispatch]= useReducer(reducer,{count:0})
const increment=()=>{
	dispatch({type:'increment'})
}
const decrement=()=>{
	dispatch({type:'decrement'})
}
  return (
    <div className='App'>
	  <button onClick={increment}>+</button>
	  <span>{state.count}</span>
	  <button onClick={decrement}>-</button>
    </div>
  )
}

export default App;