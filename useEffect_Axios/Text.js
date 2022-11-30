import {useState, useEffect} from "react";
import React from "react";

export const Text = () => {
  const [input,setInput] = useState("");

  useEffect(()=>{
    console.log("Component Mounted")
    return () => {
      console.log("Component Unmounted")
    }
  },[input]);
  const handleinput=(event) => {
    setInput(event.target.value);
  }
  return (
    <div className="text" >
  {
   //<input type="text" onChange={(event)=>{
   //   setInput(event.target.value);
  // }}/>
  }
    <input type="text" onChange={handleinput}/>
    <h2>{input}</h2>
    </div>
    );
}