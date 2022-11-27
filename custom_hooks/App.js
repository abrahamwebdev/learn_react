// import './App.css';
// import { useState } from 'react';

// function App() {
//   const [isVisible,setisVisible] =useState(false);
//   return(
//     <div className='App'>
//       <button onClick={()=>setisVisible((prev)=>!prev)}>
//         {isVisible ? 'Hide':'Show'}
//       </button>
//       {isVisible && <h1>Hidden Text</h1>}
//     </div>

//   );
// }
// export default App;
// https://non-traditional.dev/the-several-states-of-the-usestate-hook-in-react-113b346cb63c


import './App.css';
import { useState } from 'react';
import { useToggle } from './useToggle';

function App() {

  const [isVisible,toggle] =useToggle();
  const [isVisible2,toggle2] =useToggle();
  return(
    <div className='App'>
      <button onClick={toggle}>
        {isVisible ? 'Hide':'Show'}
      </button>
      {isVisible && <h1>Hidden Text</h1>}
      <button onClick={toggle2}>
        {isVisible2 ? 'Hide':'Show'}
      </button>
      {isVisible2 && <h1>Hidden Text</h1>}
    </div>

  );
}
export default App;