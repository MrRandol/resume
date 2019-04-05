import { Row, Card } from 'react-materialize';
import React from 'react';
import { interestsPropType } from '../common/PropTypes'
import { Trans } from 'react-i18next';
import CardTitle from './CardTitle'

const Interest = ({ interest }) => {
  return (
    <Card title={<CardTitle label={interest.name}/>}>
      {interest.keywords.map(keyword => {
        var split = keyword.split(':')
        var title = split[0]
        var summary = split[1]
        return <Card title={title}>
          {summary}
        </Card>
      })}
    </Card>
  );
};

const Interests = ({ interests }) => {
  return (
    <div className="interets">
    <h3 class="category-title"><Trans>interests</Trans></h3>
      <Row style={{ marginTop: '50px' }}>
        {interests.map((interest, i) => (
          <Interest
            key={"skill-"+i}
            interest={interest}
          />
        ))}
      </Row>
    </div>
  );
};

Interests.defaultProps = {
  interests: []
};

Interests.propTypes = {
  interests: interestsPropType
}

export default Interests;
