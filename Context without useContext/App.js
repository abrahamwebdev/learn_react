import React from 'react'
import  ComponentA from './ComponentA';

export const UserContext=React.createContext()
export const UserContext2=React.createContext()
 function App() {

  return (
    <div className='App'>
	    <UserContext.Provider value={'Abraham'}>
	    <UserContext2.Provider value={'George'}>

	    	<ComponentA/>
	    </UserContext2.Provider>
	    </UserContext.Provider>
    </div>
  )
}

export default App;