import { Routes, Route } from "react-router-dom"
// PAGES
import Home from "../pages/home/Home"
import Projects from "../pages/projects/Projects"
import SingleStudentProject from "../pages/singleproject/SingleStudentProject"

import Login from "../pages/login-signup/Login"
import Signup from "../pages/login-signup/Signup"

const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/:id' element={<SingleStudentProject/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

        {/* ADD TO ALL ROUTES SO YOU HAVE TO BE LOGIN IN TO VIEW */}
        {/* element={user ? <SingleStudentProject/> : <Navigate to="/login"/>}/> */}

    </Routes>
  )
}

export default Links
