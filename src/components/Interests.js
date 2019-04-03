import { Row, Card } from 'react-materialize';
import React from 'react';
import { interestsPropType } from '../common/PropTypes'

const Interest = ({ interest }) => {
  return (
    <Card title={interest.name}>
      {interest.keywords.map(keyword => (
        <p>
          {keyword}
        </p>
      ))}
    </Card>
  );
};

const Interests = ({ interests }) => {
  return (
    <Row style={{ marginTop: '50px' }}>
      {interests.map((interest, i) => (
        <Interest
          key={"skill-"+i}
          interest={interest}
        />
      ))}
    </Row>
  );
};

Interests.defaultProps = {
  interests: []
};

Interests.propTypes = {
  interests: interestsPropType
}

export default Interests;
