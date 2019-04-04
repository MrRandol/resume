import React from 'react'
import PropTypes from 'prop-types'
import { Trans } from 'react-i18next';
import { Navbar, NavItem } from 'react-materialize';


const Header = ({t, categories}) => (
  <Navbar className="light-blue lighten-4">
    {categories.map(category => (
      <NavItem
        key={"head-" + category}
        href={"/" + (category !== "basics" ? category : "")}>
        <Trans>{category}</Trans>
      </NavItem>
    ))}
  </Navbar>
)

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Header
