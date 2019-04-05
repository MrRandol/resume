import { Row, Card, Chip } from 'react-materialize';
import React from 'react'
import { educationPropType } from '../common/PropTypes'
import { Trans } from 'react-i18next';
import CardTitle from './CardTitle'

const Formation = ({formation}) => (
    <Card title={<CardTitle label={formation.institution}/>} reveal="competences ?">
      <p>
        <hr/>
        {formation.area} : {formation.studyType} <br />
        {formation.startDate} - {formation.endDate}
      </p>
      <div className="chips">
        {formation.courses.map(course => (
          <Chip>
            {course}
          </Chip>
        ))}
      </div>
    </Card>
)

const Education = ({education}) => (
  <div className="education">
    <h3 class="category-title"><Trans>education</Trans></h3>

    {education.map(formation => (
      <Row>
        <Formation formation={formation} />
      </Row>
    ))}
  </div>
)

Education.propTypes = {
  education: educationPropType
}

export default Education
