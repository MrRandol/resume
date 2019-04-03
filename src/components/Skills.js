import { Row, Col, ProgressBar } from 'react-materialize';
import React from 'react';
import { skillsPropType } from '../common/PropTypes'

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

Skills.propTypes = {
  skills: skillsPropType
}

export default Skills;
