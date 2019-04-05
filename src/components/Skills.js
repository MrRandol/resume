import { Row, Col } from 'react-materialize';
import React from 'react';
import { skillsPropType } from '../common/PropTypes'
import { Trans } from 'react-i18next';
import { Circle } from 'rc-progress';

const Skill = ({ name, level, keywords }) => {
  return (
    <Col s="6" m="4" l="3" xl="2">
          <div className="skill">
            <Circle percent={level} strokeWidth="4" strokeColor="#D3D3D3" />
            <p>
              {name}
            </p>
          </div>
    </Col>
  );
};

const Skills = ({ skills }) => {
  return (
    <div className="skills">
      <h3 class="category-title"><Trans>skills</Trans></h3>

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
    </div>
  );
};

Skills.defaultProps = {
  skills: [],
};

Skills.propTypes = {
  skills: skillsPropType
}

export default Skills;
