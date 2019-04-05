import React from 'react'
import PropTypes from 'prop-types'
import { Trans } from 'react-i18next';
import { Navbar, NavItem } from 'react-materialize';

const uuidv4 = require('uuid/v4');

const Header = ({t, color, categories, basicsLogo}) => (
  <Navbar className={color.className} fixed={true} options={{"edge":"left"}}>
    {categories.map(category => {
      var content = <Trans>{category}</Trans>
      if(category === "basics") {
        content = <img src={basicsLogo} alt="navbar-avatar" className="navbar-avatar circle" />
      }
      return (
        <NavItem key={"head-" + uuidv4()}
          href={"#" + (category !== "basics" ? category : "")}
          className="valign-wrapper">
            {content}
        </NavItem>
      )
    })}
  </Navbar>
)

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  basicsLogo: PropTypes.string
}

export default Header
