import React from 'react'
import {UserContext} from './App';
import {UserContext2} from './App';

function ComponentC() {

  return (
    <div >
	   <UserContext.Consumer>
	   {
	   	(user)=>{
	   		return(
	   		<UserContext2.Consumer>
	   			{
	   			(lastname)=>
	   				{
	   					return(<div>User is  {user} {lastname}</div>) 
	   				}
	   			}
	   		</UserContext2.Consumer>
	   	)
	}
}
	   </UserContext.Consumer>
    </div>
  )
}
export default  ComponentC