import React, { useState } from 'react'
import { useContext } from "react";
import { AppContext } from "../App";
export default function ChangeProfile() {
  const [newUsername,setNewUsername] = useState("")
  const {setUsername} = useContext(AppContext);

  return (
    <div>
      <input type="text"  onChange={(event)=>setNewUsername(event.target.value)}/>
      <button onClick={()=>setUsername(newUsername) }>Change Username</button>
    </div>
  )
}
