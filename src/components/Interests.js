import { Row, Card } from 'react-materialize';
import PropTypes from 'prop-types';
import React from 'react';

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
  interests: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
  })).isRequired
}

export default Interests;
