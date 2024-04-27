import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './components/homepage/HomePage'
import NoPage from './components/noPage/NoPage'
import SignUp from './components/registeration/SignUp'
import Login from './components/registeration/Login'
import CLogin from './components/registeration/CLogin'
import CSignUp from './components/registeration/CSignUp'
import { Toaster } from 'react-hot-toast'
import StudentDashboard from './components/student/StudentDashboard'
import CompanyDashboard from './components/company/CompanyDashboard'
import CompanyCard from './components/company/CompanyCard'
import MyState from './context/myState'
function App() {
  
  return (
    <MyState> <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/*" element={<NoPage />} />
      <Route path="/csignup" element={<CSignUp />} />
      <Route path="/clogin" element={<CLogin />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path='/student-dashboard' element={<StudentDashboard />} />
      <Route path='/company-dashboard' element={<CompanyDashboard />} />
      <Route path='/test' element={<CompanyCard/>} />
    </Routes>
    <Toaster/>
  </Router></MyState>
 
  )
  
}

export default App
