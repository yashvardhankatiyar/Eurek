import React from 'react'
import { Link } from 'react-router-dom'
const RegisterButton = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="text-center">
      <h1 className="mb-4">Choose an Option</h1>
      <div className="d-flex justify-content-between">
        <Link to={'/csignup'}><button type="button" className="btn btn-info mr-2">Sponsor</button></Link>    
        <Link to={'/signup'}><button type="button" className="btn btn-info mr-2">Student</button></Link>
      </div>
    </div>
  </div>
  )
}

export default RegisterButton