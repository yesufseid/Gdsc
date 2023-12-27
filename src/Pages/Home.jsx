import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import Nav from './Nav'

export default function Home() {
  const navigater=useNavigate()

const handleClick=()=>{
  return navigater("/about")
}

  return (
    <div>
      <Nav />
    <div className='flex justify-center items-center h-screen font-bold text-2xl gap-5'>
        <h1>Home</h1> 
         <NavLink to={"/about"}    state={{data:"name"}} 
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-4  border-pink-600" : ""
          }
         >About </NavLink>
         <button  className='border-2 border-pink-600 hover:bg-pink-600'   onClick={()=>handleClick()}   >ABout</button>
    </div>
    </div>
  )
}
