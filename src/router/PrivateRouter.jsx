import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'



const PrivateRouter = () => {
    const email="hasmetbabaoglu@gmail.com";
    const password="1234"
  return email==="hasmetbabaoglu@gmail.com" && password==="1234"? (<Outlet/>) : (<Navigate to="/"/>)
}

export default PrivateRouter