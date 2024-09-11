import React from 'react'
import { useLocation } from 'react-router-dom'

const TeacherDetails = () => {
  const {state:{person}}=useLocation()
  return (
    <div className='text-center container mt-4'>
      <img src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${person.name}`} alt="" width="400px"/>
      <h3>{person.name}</h3>
      <h2>{person.email}</h2>
      <h5>{person.website}</h5>
      <h5>{person.phone}</h5>
    </div>
  )
}

export default TeacherDetails