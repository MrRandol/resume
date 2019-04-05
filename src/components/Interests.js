import { Card } from 'react-materialize';
import React from 'react';
import { interestsPropType } from '../common/PropTypes'
import { Trans } from 'react-i18next';
import CustomCard from './Utils'
const uuidv4 = require('uuid/v4');

const Interest = ({ interest, color }) => (
    <CustomCard
          title={interest.name}
          color={color}>
        <hr/>
        {interest.keywords.map(keyword => {
          var split = keyword.split(':')
          var title = split[0]
          var summary = split[1]
          return <Card key={"interest-" + uuidv4()} style={{background: "rgba("+color.r+","+color.g+","+color.b+", 0.1)"}} title={title}>
            {summary}
          </Card>
        })}
    </CustomCard>
)

const Interests = ({ interests, color }) => {
  return (
    <div className="interets">
      <h3 className="category-title"><Trans>interests</Trans></h3>
      {interests.map((interest, i) => (
        <Interest key={"interest-" + uuidv4()} interest={interest} color={color} />
      ))}
    </div>
  );
};

Interests.propTypes = {
  interests: interestsPropType
}

export default Interests;
