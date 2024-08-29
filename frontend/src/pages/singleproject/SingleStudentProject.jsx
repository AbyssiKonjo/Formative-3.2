import React from 'react'
import { useNavigate } from 'react-router-dom'
import './singlestudentproject.scss'

const SingleStudentProject = () => {
  const navigate = useNavigate()
  return (
    <div className='single-page-project'>
      <button onClick={()=>navigate(-1)}>Go Back</button>
      <h1>Student Project</h1>
    </div>
  )
}

export default SingleStudentProject