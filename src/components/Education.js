import { Row, Card, Badge } from 'react-materialize';
import React from 'react'
import PropTypes from 'prop-types'

const Formation = ({formation}) => (
    <Card title={formation.institution} reveal="competences ?">
      <p>
        <hr/>
        {formation.area} : {formation.studyType} <br />
        {formation.startDate} - {formation.endDate}
        <hr/>
      </p>
      {formation.courses.map(course => (
        <Badge className="red">
          {course}
        </Badge>
      ))}
    </Card>
)

const Education = ({education}) => (
  <p>
    {education.map(formation => (
      <Row>
        <Formation formation={formation} />
      </Row>
    ))}
  </p>
)

Education.propTypes = {
  education: PropTypes.arrayOf(PropTypes.shape({
    institution: PropTypes.string,
    area: PropTypes.string,
    studyType: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    gpa: PropTypes.string,
    courses: PropTypes.arrayOf(PropTypes.string),
  })).isRequired
}

export default Education
