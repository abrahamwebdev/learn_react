import React,{useContext} from 'react'
import {UserContext} from './App';
import {UserContext2} from './App';

function ComponentC() {
const firstname= useContext(UserContext)
const lastname= useContext(UserContext2)
  return (
    <div >
	 Hi {firstname} {lastname}
	</div>
  )
}
export default  ComponentC