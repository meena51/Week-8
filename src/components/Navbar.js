import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    

    
  return (
    <div>
      <nav className='primary-nav'>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='blogs'>Blogs</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='contact'>Contact</NavLink>
        
      </nav>
    </div>
  )
}

export default Navbar
