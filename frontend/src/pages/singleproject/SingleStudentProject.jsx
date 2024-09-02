import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './singlestudentproject.scss'
import { useProjectContext } from '../../hooks/useProjectContext'
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";


const SingleStudentProject = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const {projects} = useProjectContext()

  const user = JSON.parse(localStorage.getItem('user'))
  const githubProfile = user.github_profile;
  console.log(user); 

  const project = projects.find(proj => proj._id === id)

  return (
    <div className='single-page-project'>

      <div className='button-div'>
        <button className='back-button' onClick={()=>navigate(-1)}><IoMdArrowRoundBack /></button>
      </div>

      <div className='title'>
        <h2>{project.author_name}'s {project.project_name} Project</h2>
      </div>

      <div className='single-page-card'>

        <div className='left-overlay'>
          <img className='single-page-project-image' 
          src={`http://localhost:4000/public/uploads/${project.project_img}`} 
          alt={project.project_name} />

          <div className='profile-pic-overlay'>
            <div className='profile-avatar'>
              <span>{project.author_name.charAt(0).toUpperCase()}</span> 
            </div>
          </div>
        </div>
        
        <div className='right-overlay'>
          <h3>{project.project_name}</h3><br/>
          <p>{project.description}</p><br/>
          <h4>{project.author_name}</h4><br/>

          <div className='github-profile'>
          <p>Github Profile: <a href={project.github_profile} target="_blank" rel="noopener noreferrer">{project.github_profile}</a></p><br/>
          </div>

          <div className='socials'>

            <div className='icon-link-holder'>
              <a href={project.github_repo} target="_blank" rel="noopener noreferrer">
                <p className='social-icons'>
                  <FaGithub className='github'/>
                </p>
              </a>
              <a className='text-link' href={project.github_repo} target="_blank" rel="noopener noreferrer">
                <span className='link-title'>Github Repo</span>
              </a>
            </div>

            <div className='icon-link-holder'>
              <a className='text-link' href={project.vercel_link} target="_blank" rel="noopener noreferrer">
                <p className='social-icons'>
                <IoLogoVercel className='vercel' />
                </p>
              </a>
              <a className='text-link' href={project.vercel_link} target="_blank" rel="noopener noreferrer">
                <span className='link-title'>Vercel Link</span>
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default SingleStudentProject