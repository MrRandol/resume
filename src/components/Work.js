import React from 'react'
import { workPropType } from '../common/PropTypes'
import { Trans } from 'react-i18next';
import CustomCard from './Utils'
const uuidv4 = require('uuid/v4');

const Experience = ({experience, color}) => (
  <CustomCard
    title={experience.company}
    extraTitle=<Trans>{experience.position}</Trans>
    highlights={experience.highlights}
    logo={experience.logo}
    color={color}>
      <div className="card-dates light-color">
        <i className="far fa-calendar-alt" /> {experience.startDate} / <Trans>{experience.endDate}</Trans>
      </div>
      <hr style={{color: color.hex}}/>
      <p className="summary"><Trans>{experience.summary}</Trans></p>
  </CustomCard>
)

const Work = ({color, work}) => (
  <div className="work">
    <h3 className="category-title"><Trans>work</Trans></h3>
    {work.map(experience => (
      <Experience key={"experience-"+uuidv4()} experience={experience} color={color}/>
    ))}
  </div>
)

Work.propTypes = {
  work: workPropType
}

export default Work
