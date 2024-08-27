import { useState } from 'react'
import Form from '../form/Form'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = () => {

    const [formIsOpen, openForm] = useState(false)

    const toggleForm = () => {
        openForm(!formIsOpen);
        document.body.classList.toggle('no-scroll')
    }

    return (
        <>
            <div className='header'>
                <div className='user-actions'>
                    <Link className='nav-link' to='/login'> Login </Link>
                    <Link className='nav-link' to='/signup'> Signup </Link>
                </div>
                <div className='nav-links'>
                    <Link className='nav-link' to='/'> Home </Link>
                    <Link className='nav-link' to='/projects'> Projects </Link>
                </div>
                <div className='form-button' onClick={toggleForm}> Add Project </div>
            </div>

            {formIsOpen && <Form closeMethod={toggleForm}/>}
        </>
    )
}

export default Header
