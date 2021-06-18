import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useTranslation } from 'react-i18next';

var _ = require('lodash');

const Skills = ({ skills }) => {
  const { t } = useTranslation();
  var methodologySkills = _.filter(skills, { 'type': 'methodology' });
  var toolsSkills = _.filter(skills, { 'type': 'tools' });

  return (
    <Container>
      <h2 className="category">{t('skills')}</h2>
        <Row>
          <Col md={8}><h3 className="category secondary">{t('methodology')}</h3></Col>
          <Col md={1} className="vertical-separator"></Col>
          <Col md={3}><h3 className="category secondary">{t('tools')}</h3></Col>
        </Row>
        <Row>
          <Col md={8} className="d-flex flex-column align-items-start justify-content-center">
              {methodologySkills.map((skill, index) => (
                <div className="skill" key={"m-skill-"+index}>
                  <span className="skill-name">{t(skill.name)}</span>
                  <ProgressBar className="skill-progress" now={skill.level} label={`${skill.level}%`}/>
                </div>
              ))}
          </Col>
          <Col md={1} className="vertical-separator"></Col>
          <Col md={3} className="d-flex flex-column align-items-start justify-content-center">
              {toolsSkills.map((skill, index) => (
                <p key={"t-skill-"+index}>
                  <i className="me-3 fa fa-check"></i>
                  {t(skill.name)}
                </p>
              ))}
          </Col>
        </Row>
    </Container>
    //TODO : Add other skills as simple progress circle grid
  );
};

export default Skills;
