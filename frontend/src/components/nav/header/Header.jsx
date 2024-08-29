import { useState } from 'react'
import Form from '../form/Form'
import { Link } from 'react-router-dom'
import { useLogout } from '../../../hooks/useLogout'
import { useAuthContext } from '../../../hooks/useAuthContext'
import './header.scss'

const Header = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()

    const [formIsOpen, openForm] = useState(false)

    const handleClick = () => {
        logout()
    }

    const toggleForm = () => {
        openForm(!formIsOpen);
        document.body.classList.toggle('no-scroll')
    }

    return (
        <>
            <div className='header'>
                {user && <div>
                    <img src={`http://localhost:4000/public/uploads/${user.profileImg}`}/>
                
                    <span>{user.username}</span>
                    <button onClick={handleClick}>Logout</button>
                </div>}

                {!user && <div className='user-actions'>
                    <Link className='nav-link' to='/login'> Login </Link>
                    <Link className='nav-link' to='/signup'> Signup </Link>
                </div>}

                <div className='nav-links'>
                    <Link className='nav-link' to='/'> Home </Link>
                    <Link className='nav-link' to='/projects'> Projects </Link>
                </div>
                {user && <div className='form-button' onClick={toggleForm}> Add Project </div>}
            </div>

            {formIsOpen && <Form closeMethod={toggleForm}/>}
        </>
    )
}

export default Header