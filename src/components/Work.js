import { Row, Card, Chip } from 'react-materialize';
import React from 'react'
import { workPropType } from '../common/PropTypes'
import { Trans } from 'react-i18next';
import CardTitle from './CardTitle'

const Highlights = ({highlights}) => (
    <div className="chips">
      {highlights.map(highlight => (
        <Chip>{highlight}</Chip>
      ))}
    </div>
)

const Experience = ({experience}) => {
  return <Card className="work-card"
              title={<CardTitle label={experience.company} extra={experience.position}/>}>
      <span className="light-color">
        <i className="far fa-calendar-alt" /> {experience.startDate} / {experience.endDate}
      </span>
      <hr/>
      <p className="summary">{experience.summary}</p>
      <hr/>
      <Highlights highlights={experience.highlights} />
  </Card>
}

const Work = ({work}) => (
  <div className="work">
    <h3 class="category-title"><Trans>work</Trans></h3>
    {work.map(experience => (
      <Row>
        <Experience experience={experience} />
      </Row>
    ))}
  </div>
)

Work.propTypes = {
  work: workPropType
}

export default Work
