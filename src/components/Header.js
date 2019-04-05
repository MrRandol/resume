import React from 'react'
import PropTypes from 'prop-types'
import { Trans } from 'react-i18next';
import { Navbar, NavItem } from 'react-materialize';

import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = ({t, color, categories, basicsLogo}) => (
  <Navbar className={color.className} fixed="true" options={{"edge":"left"}}>
    {categories.map(category => {

      var content = <Trans>{category}</Trans>
      if(category === "basics")
        content = <img src={basicsLogo} alt="navbar-avatar" className="navbar-avatar circle" />

      return <NavItem><AnchorLink
        key={"head-" + category}
        href={"/" + (category !== "basics" ? category : "")}>
          {content}
      </AnchorLink></NavItem>
    })}
  </Navbar>
)

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  basicsLogo: PropTypes.string
}

export default Header
