import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./Navbar.module.css"

const getClassName = ({ isActive }) => {
  return isActive ? `${style.link} ${style.link__active}` : `${style.link}`;
}

export default function Navbar() {
    return (
      <nav >
        <ul className={style.menu}>
          <li><NavLink className={getClassName} to='/' end>Home</NavLink></li>
          <li><NavLink className={getClassName} to='/movies' end>Movies</NavLink></li>
        </ul>    
      </nav>

  )
}
