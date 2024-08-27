import './login.scss'

import { useState} from 'react'

//IMPORT USE LOGIN HERE

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const {login, error, isLoading} = useLogin()

  // const handleLogin = async (e) => {
  //   e.preventDefault()

  //   await login(username, password)
  // }

  return (
    <div className='login-body'> 
      <div className='login-border'>
        <form 
          className='login'
          // onClick={handleLogin}
        >
          <h2>Login</h2>

          <label htmlFor="username"> Username: </label>
          <input
            type="text" 
            // onChange={setUsername(e.target.value)}
            value={username}
          />

          <label htmlFor="password"> Password: </label>
          <input 
            type="password" 
            // onChange={setPassword(e.target.value)}
            value={password}
          />

        <div className='button-div'>
        <button
          className='login-button'
          // disabled={isLoading}
        > Login </button>
        </div>
        {/* {error && <div className='error'>{error}</div>} */}
        </form>
        
      </div>
      
    </div>
  )
}

export default Login
