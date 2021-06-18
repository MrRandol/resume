import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { useTranslation } from 'react-i18next';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Tooltip from 'react-bootstrap/Tooltip';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Scrollspy from 'react-scrollspy';
import { downloadJson } from '../common/downloadJson'

const Header = ({person, basicsLogo}) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar bg="primary" sticky="top" className="mb-4 d-flex flex-row align-items-center justify-content-between">
      <div></div>

      <Nav>
        <Scrollspy items={ ['profile', 'work', 'education', 'skills', 'languages'] } className="m-0 p-0 d-flex flex-row" currentClassName="current">
          <Nav.Link href="#profile">{t('profile')}</Nav.Link>
          <Nav.Link href="#work">{t('work')}</Nav.Link>
          <Nav.Link href="#education">{t('education')}</Nav.Link>
          <Nav.Link href="#skills">{t('skills')}</Nav.Link>
          <Nav.Link href="#languages">{t('languages')}</Nav.Link>
        </Scrollspy>
      </Nav>

      <div className="d-flex flex-row align-items-center justify-content-center">
        <OverlayTrigger placement="auto" overlay={<Tooltip>{t('download_json')}</Tooltip>}>
          <a className="me-4 download-icon" onClick={() => downloadJson(person, t, i18n)}><i className="fas fa-download"></i></a>
        </OverlayTrigger>
        <Dropdown>
          <Dropdown.Toggle variant="secondary">
            {t('i18n_' + i18n.language)}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item  as="button" onClick={() => changeLanguage('fr')}>{t('i18n_fr')}</Dropdown.Item>
            <Dropdown.Item  as="button" onClick={() => changeLanguage('en')}>{t('i18n_en')}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  );
}

export default Header
