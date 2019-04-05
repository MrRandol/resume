import React from 'react'
import { educationPropType } from '../common/PropTypes'
import { Trans } from 'react-i18next';
import CustomCard from './Utils'
const uuidv4 = require('uuid/v4');

const Formation = ({formation, color}) => (
  <CustomCard
        title={formation.institution}
        highlights={formation.courses}
        color={color}>
      <hr/>
      {formation.area} : {formation.studyType} <br />
      {formation.startDate} - {formation.endDate}
  </CustomCard>
)

const Education = ({education, color}) => (
  <div className="education">
    <h3 className="category-title"><Trans>education</Trans></h3>
    {education.map(formation => (
      <Formation key={"formation-"+uuidv4()} formation={formation} color={color} />
    ))}
  </div>
)

Education.propTypes = {
  education: educationPropType
}

export default Education
