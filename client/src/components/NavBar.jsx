import React from 'react'

import './Styles.css';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='navbar' >
      <NavLink to='/'><h1 className='head'>TEAM-TODO'S</h1></NavLink>

    </div>
  )
}

export default NavBar