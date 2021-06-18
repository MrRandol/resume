import React from 'react'
import { useTranslation } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import moment from 'moment';  
import Experience from './Experience'


const Work = ({color, work}) => {
  const { t } = useTranslation();

  return (
    <Container>
      <h2 className="category">{t('work')}</h2>
      {work.map((workExperience, index) => {
        const experience = Object.assign({}, workExperience);
        experience.place = workExperience.company;
        experience.title = workExperience.position;
        return <Experience key={"work-experience-" + index} experience={experience} color={color}/>;
      })}
    </Container>
  );
}


export default Work
