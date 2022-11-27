

import './App.css';
import {useState} from "react";
import {Text} from './Text';

function App() {
 const [show,setShow] = useState(true);


  return (
    <div className="App">
      <button onClick={()=>setShow(!show)} >Show/Hide</button>
      {show && <Text/>}
    </div>
  );
}

export default App;