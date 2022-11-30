import React from 'react';
import './App.css';
import Person from './Person';
import ClickCounter from './ClickCounter';
import { ErrorBoundary } from './ErrorBoundary';
function App() {
  const person = {
    firstName: 'Abraham',
    lastName:'George',
  }
  return(

    <div className="App">
      <ErrorBoundary>
      <Person person={person}/>
      {/* <Person person={{}}/> */}
      <ClickCounter/>
      </ErrorBoundary>
    </div>
  );
}
export default App;