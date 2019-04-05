import React from 'react'
import { workPropType } from '../common/PropTypes'
import { Trans } from 'react-i18next';
import CustomCard from './Utils'

const Experience = ({experience, color}) => (
  <CustomCard
    title={experience.company}
    extraTitle={experience.position}
    highlights={experience.highlights}
    color={color}>

    <span className="light-color">
      <i className="far fa-calendar-alt" /> {experience.startDate} / {experience.endDate}
    </span>
    <hr/>
    <p className="summary">{experience.summary}</p>

  </CustomCard>
)

const Work = ({color, work}) => (
  <div className="work">
    <h3 class="category-title"><Trans>work</Trans></h3>
    {work.map(experience => (
      <Experience experience={experience} color={color}/>
    ))}
  </div>
)

Work.propTypes = {
  work: workPropType
}

export default Work
