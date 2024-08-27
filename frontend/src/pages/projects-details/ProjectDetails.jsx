import { useState } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
//IMPORT PROJECTS CONTEXT HOOK HERE

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";




const ProjectDetails = ({project}) => {

    const [isEditing, setIsEditing] = useState(false)

    const [editTitle, setEditTitle] = useState(project.project_name)
    const [editAuthor, setEditAuthor] = useState(project.author_name)

    // const {dispatch} = useProjectContext()
    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem('user'))
    const user_id = user.username

    //handle navigate
    const handleNavigate = () => {
        let path = `/${project._id}`
        navigate(path)
    }

    //handle delete
    const handleDelete = async () => {
        const response = await axios.delete(`http://localhost:4000/api/projects/${project._id}`)
        const json = await response.data
        if(response.status === 200) {
            dispatch({type: 'DELETE_PROJECT', payload: json})
        }
    }

    //handle edit
    const handleEdit = () => {
        setIsEditing(true);
    }

    //handle submit edit
    const handleSubmitEdit = async () => {
        const updatedProject = {
            project_name: editTitle,
            author_name: editAuthor
        };
        try {
            const response = await axios.patch(`http://localhost:4000/api/projects/${project._id}`, updatedProject);
            const updatedData = response.data

            if (response.status === 200) {
                dispatch({type: 'UPDATE_PROJECT', payload: updatedData});
                setIsEditing(false)
            }
        } catch (error) {
            console.log("error updating workout", error)
        }
    };

    //handle cancel edit
    const handleCancelEdit = () => {
        setEditTitle(project.project_name)
        setEditAuthor(project.author_name)
        setIsEditing(false)
    }


  return (
    <div className='project-details'>
      {isEditing ? (
        <div className='edit-project'>
        <label>Edit Project Title:</label>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />

          <label>Edit Project Author</label>
          <input
            type="text"
            value={editAuthor}
            onChange={(e) => setEditAuthor(e.target.value)}
          />
          <button className='edit-button' oncClick={handleSubmitEdit}> Save </button>
          <button className='edit-button'onClick={handleCancelEdit}> Cancel </button>
        </div>
      )
      : //if not editing
      (
        <>
            <div className='whole-card-border'>
                <div className='card'>
                    <div className='project-img'>
                        <img src={`http://localhost:4000/public/uploads/${project.project_img}`} alt="Project" />
                    </div>
                    <div className='card-info'>
                        <h3 onClick={handleNavigate}>{project.project_name}</h3>
                        <p>{project.author_name}</p>
                        <p>
                            Created&nbsp; 
                            {formatDistanceToNow(new Date(project.createdAt), {
                            includeSeconds: true,
                            })}{' '}
                            ago
                        </p>
                    </div>
                    <div className='profile-border'>
                        <div className='profile-img'>
                        <img src={`http://localhost:4000/public/uploads/${project.author_img}`} alt="Profile Pic" />
                        </div>
                    </div>
                    {project.user_id === user_id &&(
                        <>
                            <MdEdit className='edit'onClick={handleEdit}/>
                            <MdDelete className='delete'onClick={handleDelete}/>
                        </>
                    ) }


                    
                </div>
            </div>
        
        </>
      )
    }
    </div>
  )
}

export default ProjectDetails
