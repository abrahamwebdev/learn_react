

import './App.css';
import {useEffect, useState} from "react";
import {Text} from './Text';
import Axios  from 'axios';

function App() {
 const [show,setShow] = useState("");

 const fetchcatfact = () => {
  Axios.get("https://catfact.ninja/fact").then((res)=>{
      setShow(res.data.fact);
    });
 }

  useEffect(()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
      setShow(res.data.fact);
    });
}, []);
 

    // Axios.get("https://catfact.ninja/fact").then((res)=>{
    //   console.log(res.data)
    // })

    fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>{
      console.log(data)
      console.log("This object is from fetch")
    })

  return (
    <div className="App">
      <button onClick={fetchcatfact} >Show Cat Fact</button>
      <h2>{show}</h2>
    </div>
  );
}

export default App;