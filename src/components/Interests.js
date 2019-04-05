import { Card } from 'react-materialize';
import React from 'react';
import { interestsPropType } from '../common/PropTypes'
import { Trans } from 'react-i18next';
import CustomCard from './Utils'

const Interest = ({ interest, color }) => (
    <CustomCard
          title={interest.name}
          color={color}>
        <hr/>
        {interest.keywords.map(keyword => {
          var split = keyword.split(':')
          var title = split[0]
          var summary = split[1]
          return <Card title={title}>
            {summary}
          </Card>
        })}
    </CustomCard>
)

const Interests = ({ interests, color }) => {
  return (
    <div className="interets">
      <h3 class="category-title"><Trans>interests</Trans></h3>
      {interests.map((interest, i) => (
        <Interest interest={interest} color={color} />
      ))}
    </div>
  );
};

Interests.propTypes = {
  interests: interestsPropType
}

export default Interests;
