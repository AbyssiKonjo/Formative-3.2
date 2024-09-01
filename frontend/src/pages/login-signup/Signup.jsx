import './login.scss'

import { useState} from 'react'

import { useSignup } from '../../hooks/useSignup'


const Signup = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [gitProfile, setGitProfile] = useState('')

  const [profileImg, setProfileImg] = useState(null)

  const {signup, error, isLoading} = useSignup()

  const handleLogin = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)
    formData.append('github_profile', gitProfile)
    formData.append('profile_image', profileImg)

    console.log(username, password, gitProfile, profileImg)

    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
  }

    await signup(formData)

    setUsername('')
    setPassword('')
    setGitProfile('')
  }

  return (
    <div className='login-body'> 
      <div className='login-border'>
        <form 
          className='login'
          
        >
          <h2>Signup</h2>

          <label htmlFor="username"> Username: </label>
          <input
            type="text" 
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />

          <label htmlFor="password"> Password: </label>
          <input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <label htmlFor="gitProfile"> Github Profile: </label>
          <input 
            type="text" 
            onChange={(e) => setGitProfile(e.target.value)}
            value={gitProfile}
          />

          <label>Upload Profile Image:</label>
          <input type='file' accept='image/*' onChange={(e) => setProfileImg(e.target.files[0])} />

        <div className='button-div'>
        <button
          onClick={handleLogin}
          className='login-button'
          disabled={isLoading}
        > Signup </button>
        </div>
        {error && <div className='error'>{error}</div>}
        </form>
        
      </div>
      
    </div>
  )
}

export default Signup
