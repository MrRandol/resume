import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { useTranslation } from 'react-i18next';

const Skills = ({ skills }) => {
  const { t } = useTranslation();


    console.log(skills)
  return (
    <Container>
      <h2 className="category">{t('skills')}</h2>
      {skills.map((skill, skillIndex) => (
        <Row key={"t-skill-"+skillIndex} className="align-items-center justify-content-left">        
          <h3 className="category secondary">{t(skill.name)}</h3>
          <div className="skill" >
            {skill.keywords.map((skill, keyIndex) => (
              <Badge pill className="me-2 skill-badge" key={"t-skillbadge-"+keyIndex} bg="info">{t(skill)}</Badge>
            ))}
          </div>
        </Row>
      ))}
    </Container>
  );
};

export default Skills;
