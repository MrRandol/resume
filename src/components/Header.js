import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = ({categories}) => (
  <p>
    {categories.map(category => (
      <NavLink key={"head-" + category} to={"/" + (category !== "basics" ? category : "")} activeStyle={{color: 'blue'}}>{category} || </NavLink>
    ))}
  </p>
)

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Header
