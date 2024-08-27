import { Routes, Route } from "react-router-dom"
// PAGES
import Home from "../pages/home/Home"
import Projects from "../pages/projects/Projects"
import SingleStudentProject from "../pages/singleproject/SingleStudentProject"

const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/project/:id' element={<SingleStudentProject/>}/>
        <Route path='/projects' element={<Projects/>}/>
    </Routes>
  )
}

export default Links
