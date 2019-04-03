import { Row, Card, Badge } from 'react-materialize';
import React from 'react'
import { educationPropType } from '../common/PropTypes'

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
  education: educationPropType
}

export default Education
