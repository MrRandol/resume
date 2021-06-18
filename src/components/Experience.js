import React from 'react'
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import moment from 'moment';  

const Experience = ({experience}) => {
  const { t } = useTranslation();
  const startDate = moment(experience.startDate);
  const endDate = moment(experience.endDate);

  var endMonth;
  var endYear;
  if (experience.endDate == null) {
    endMonth = ""
    endYear = t('today');
  } else {
    endMonth = t('dateMonth', {date: endDate});
    endYear = t('dateYear', {date: endDate});
  }

  // TODO : add highlights experience.highlights
  return (
  <Row className="experience-row">
    <Col md={3} className="d-flex flex-column justify-content-center align-items-end">
      <div className="experience-date">
        <span><div className="small">{t('dateMonth', {date: startDate})}</div>{t('dateYear', {date: startDate})}</span>
        { (experience.startDate != experience.endDate) && 
          <><span className="experience-date-splitter"> - </span>
          <span><div className="small">{endMonth}</div>{endYear}</span></>
        }
      </div>
      <div className="d-flex flex-column justify-content-center align-items-end">
        <Image className="experience-logo" src={experience.logo} />
        <span className="experience-place">{experience.place}</span>
        <div className="experience-title"><ReactMarkdown>{t(experience.title)}</ReactMarkdown></div>
      </div>
    </Col>
    <Col className="experience-right-col" md={9}>
      <div><ReactMarkdown>{t(experience.summary, { joinArrays: '  \n' })}</ReactMarkdown></div>
    </Col>
  </Row>
  );
}

export default Experience
