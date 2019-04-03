import { Row, Col, ProgressBar } from 'react-materialize';
import PropTypes from 'prop-types';
import React from 'react';

const Skill = ({ name, level, keywords }) => {
  return (
    <Col width={3}>
          <div style={{ textAlign: 'center' }}>
            <span>
              {name}
            </span>
            <ProgressBar progress={level} />
          </div>
    </Col>
  );
};

Skill.defaultProps = {
  keywords: [],
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

const Skills = ({ skills }) => {
  return (
    <Row style={{ marginTop: '50px' }}>
      {skills.map((j, i) => (
        <Skill
          key={"skill-"+i}
          name={j.name}
          level={j.level}
          keywords={j.keywords}
        />
      ))}
    </Row>
  );
};

Skills.defaultProps = {
  skills: [],
};

Skills.propTypes = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  level: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export default Skills;
