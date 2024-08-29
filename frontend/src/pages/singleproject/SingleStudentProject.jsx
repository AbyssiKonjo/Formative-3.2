import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './singlestudentproject.scss'
import { useProjectContext } from '../../hooks/useProjectContext'

const SingleStudentProject = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const {projects} = useProjectContext()

  const project = projects.find(proj => proj._id === id)

  return (
    <div className='single-page-project'>

      <div className='button-div'>
        <button className='back-button' onClick={()=>navigate(-1)}>Go Back</button>
      </div>

      <div className='title'>
        <h2>{project.author_name}'s {project.project_name} Project</h2>
      </div>

      <div className='single-page-card'>
        <div className='left-overlay'>
          <img className='single-page-project-image' src={`http://localhost:4000/public/uploads/${project.project_img}`} alt="Single Page project image" />
        </div>
        
        <div className='right-overlay'>
          <h3>{project.project_name}</h3><br/>
          <p>{project.description}</p>
          <h4>{project.author_name}</h4>
        </div>
      </div>

    </div>
  )
}

export default SingleStudentProject