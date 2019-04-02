import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <p>
    <NavLink to='/' activeStyle={{color: 'blue'}}>HOME</NavLink>
  </p>
)

export default Header
