import React from 'react'
import { useTranslation } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import moment from 'moment';  
import Experience from './Experience'


const Education = ({color, education}) => {
  const { t } = useTranslation();

  return (
    <Container>
      <h2 className="category">{t('education')}</h2>
      {education.map((educationExperience, index) => {
        const experience = Object.assign({}, educationExperience);
        experience.place = educationExperience.institution;
        experience.title = "";
        experience.summary = educationExperience.studyType;
        return <Experience key={"education-experience-" + index} experience={experience} color={color}/>;
      })}
    </Container>
  );
}


export default Education
