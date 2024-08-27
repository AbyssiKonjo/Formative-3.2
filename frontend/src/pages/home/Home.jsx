import React from 'react'
import './home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <h1>2402 WUX <br/> Portfolio</h1>
      <div className='button-div'>
        <button><Link className='link' to='/projects'> View Projects </Link></button>
      </div>
      
    </div>
  )
}

export default Home
