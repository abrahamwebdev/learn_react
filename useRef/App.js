import React,{useState,useEffect,useRef} from 'react'
import  FocusInput from './FocusInput';

 function App() {
const [name,setName]= useState('')
const renderCount= useRef(0)

useEffect(()=>{
renderCount.current=renderCount.current+1
})

  return (
    <div className='App'>
    	<FocusInput/>
    	<input value={name} onChange={e=>setName(e.target.value)}/>
    	<div>My name is {name}</div>
    	<p>This is rendered {renderCount.current}times</p>
    </div>
  )
}

export default App;