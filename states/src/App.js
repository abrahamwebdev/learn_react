
import './App.css';
import {useState} from "react";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import {Home} from './Home'
import {Menu} from './Menu'
import {Contact} from './Contact'

function App() {

  return (
   
    <div className="App">
      <Router>
        <p>Hello Abraham</p>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>

  );
}


export default App;