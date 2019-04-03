import { Row, Card } from 'react-materialize';
import React from 'react'
import PropTypes from 'prop-types'

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
  work: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    website: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
  })).isRequired
}

export default Work
