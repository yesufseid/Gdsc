import React from 'react'
import { useParams } from 'react-router-dom'
export default function Profile() {
    const {Id}=useParams()
  return (
    <div className='flex justify-center items-center h-screen text-2xl gap-5'>
        <h1>profile page</h1>
        <p>{Id}</p>
    </div>
  )
}
