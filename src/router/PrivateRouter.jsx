import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'



const PrivateRouter = () => {
   
  return JSON.parse(localStorage.getItem("EMAIL"))==="tafamus" && JSON.parse(localStorage.getItem("PASSWORD"))==="1234" ? (<Outlet/>) : (<Navigate to="/login"/>)
}

export default PrivateRouter