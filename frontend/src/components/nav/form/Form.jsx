import './form.scss'
import { useState } from 'react'
import { useProjectContext } from '../../../hooks/useProjectContext'
import axios from 'axios'

const Form = () => {
  const { dispatch } = useProjectContext()

  const [title, setTitle] = useState('')
  const [projectImage, setProjectImage] = useState(null)
  const [description, setDescription] = useState('')
  const [gitRepo, setGitRepo] = useState('')
  const [vercelLink, setVercelLink] = useState('')

  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = JSON.parse(localStorage.getItem('user'))
    const authorName = user.username
    const authorImage = user.profile_image
    const gitProfile = user.github_profile

    const formData = new FormData()
    formData.append('project_name', title)
    formData.append('project_image', projectImage)
    formData.append('author_name', authorName)
    formData.append('author_image', authorImage)
    formData.append('description', description)
    formData.append('github_repo', gitRepo)
    formData.append('vercel_link', vercelLink)
    formData.append('github_profile', gitProfile)

    try {
      const response = await axios.post(`http://localhost:4000/api/projects/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setTitle('')
      setProjectImage(null)
      setDescription('')
      setGitRepo('')
      setVercelLink('')

      setError(null)

      dispatch({type: 'CREATE_PROJECTS', payload: response.data})
    } catch (error) {
      setError(error.message)
    }
    
  }

  return (
    <div className='form-box'>

      <form>
        <h3> Add Project </h3>
        
        <label htmlFor="title"> Project Name: </label>
        <input 
          type="text" 
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="title"> Description: </label>
        <input 
          type="text" 
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <label htmlFor="title"> Git Repo: </label>
        <input 
          type="text" 
          onChange={(e) => setGitRepo(e.target.value)}
          value={gitRepo}
        />

        <label htmlFor="title"> Vercel Deployment: </label>
        <input 
          type="text" 
          onChange={(e) => setVercelLink(e.target.value)}
          value={vercelLink}
        />


        <label>Upload Project Image:</label>
        <input type='file' accept='image/*' onChange={(e) => setProjectImage(e.target.files[0])} />

        <div className='button-div'>
          <button className='add-project-button' onClick={handleSubmit}> Add Project </button>
        </div>
        {error && <div className="error">{error}</div>}

      </form>
    </div>
  )
}

export default Form
