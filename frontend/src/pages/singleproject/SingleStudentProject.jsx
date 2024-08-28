import React from 'react'
import { useNavigate } from 'react-router-dom'
import './singlestudentproject.scss'

const SingleStudentProject = () => {
  const navigate = useNavigate()
  return (
    <div className='single-page-project'>

      <div className='button-div'>
        <button className='back-button' onClick={()=>navigate(-1)}>Go Back</button>
      </div>

      <h2>Student Project</h2>
      {/* <p>{project.author_name}</p>
      <h3>{project.project_name}</h3> */}

    </div>
  )
}

export default SingleStudentProject
