import React, { useState } from 'react'

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  
  return (
    <div className="container text-center mt-4">
    <h1 className="display-6 text-danger">LOG IN</h1>
    <form >
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          EMAIL
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter your email"
          required
         
        />
      </div>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">
         PASSWORD
        </label>
        <input
          type="password"
          className="form-control"
          id="desc"
          placeholder="Enter your password"
          required
          
        />
      </div>
      <button type="submit" className="btn btn-danger mb-4">
        Submit
      </button>
    </form>
  </div>
  )
}

export default Login