import React from 'react'
import { useTranslation } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { downloadJson } from '../common/downloadJson'

const Footer = ({person, refToRender}) => {
  const { t, i18n } = useTranslation();

  var email="maxime.choffat@gmail.com"
  return (
    <Container fluid className="footer">
      <Container className="footer-content">
        <Row className="flex-centered text-center">
          <Col md={12}>
            <h2 className="category">{t('contact_me')}</h2>
            <div><i className="footer-contact-icon far fa-comment" /></div>
            <div><a className="tertiary" target="_blank" href={`mailto:${email}`}>{email}</a></div>
            <hr className="small secondary" />
          </Col>  
        </Row>

        <Row>
          <Col md={6} className="text-start">
            <Button variant="secondary" onClick={() => downloadJson(person, t, i18n)}><i className="fas fa-download"></i> {t('download_json')}</Button>
          </Col>
          <Col md={6} className="text-end">
            <div className="text-endw">
              {t('powered_by')}
              <a href="https://reactjs.org/">ReactJS</a>
              &nbsp; <i className="fab fa-react"></i>
            </div>
            <div className="text-end">
              {t('based_on')}
              <a href="https://jsonresume.org/">JSON Resume</a>
              &nbsp; <i className="fas fa-code"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer
