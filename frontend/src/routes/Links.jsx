import { Routes, Route } from "react-router-dom"
// PAGES
import Home from "../pages/home/Home"
import Projects from "../pages/projects/Projects"
import SingleStudentProject from "../pages/singleproject/SingleStudentProject"

import Login from "../pages/login/Login"
import Signup from "../pages/signup/Signup"

const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/project/:id' element={<SingleStudentProject/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}

export default Links
