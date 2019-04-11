import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, NavItem } from 'react-materialize';
import { Trans } from 'react-i18next';

const uuidv4 = require('uuid/v4');

const Header = ({t, color, categories, basicsLogo, changeLanguage, locale}) => (
  <Navbar className={"right " + color.className} fixed={true} alignLinks="left">
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

      {locale!=="fr" &&
        <NavItem
          className="hoverable halfway-fab waves-effect waves-light circle language-button french"
          onClick={() => changeLanguage('fr')} >
            fr
        </NavItem>
      }
      {locale!=="en" &&
        <NavItem
          className="hoverable halfway-fab waves-effect waves-light circle language-button english"
          onClick={() => changeLanguage('en')} >
            en
        </NavItem>
      }
  </Navbar>
)

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  basicsLogo: PropTypes.string,

}

export default Header
