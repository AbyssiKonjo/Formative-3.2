import './projects.scss'
import {useEffect, useState} from 'react'
import axios from 'axios'

import ProjectDetails from '../projects-details/ProjectDetails'

const Projects = () => {

  const [projects, setProjects] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get(`http://localhost:4000/api/projects`)

      if (response.status === 200) {
        setProjects(response.data)
      }
    }

    fetchProjects()
  }, [])


  return (
    <div className='projects-page'>
      <div className='projects'>
          {projects && projects.map((project) => {
            return (
                <ProjectDetails key={project._id} project={project}/>
            )
          })}
      </div>
    </div>
  )
}

export default Projects
