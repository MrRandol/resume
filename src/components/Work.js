import { Row, Card } from 'react-materialize';
import React from 'react'
import { workPropType } from '../common/PropTypes'

const Experience = ({experience}) => (
    <Card title={experience.company} reveal="competences ?">
      <p>
        <hr/>
        {experience.position} : {experience.startDate} - {experience.endDate}
        <hr/>
        {experience.summary}
      </p>
    </Card>
)

const Work = ({work}) => (
  <p>
    {work.map(experience => (
      <Row>
        <Experience experience={experience} />
      </Row>
    ))}
  </p>
)

Work.propTypes = {
  work: workPropType
}

export default Work
