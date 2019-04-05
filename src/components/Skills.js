import { Row, Col } from 'react-materialize';
import React from 'react';
import { skillsPropType } from '../common/PropTypes'
import { Trans } from 'react-i18next';
import { Circle } from 'rc-progress';
import * as colors from '../common/categoriesColors'

const Skill = ({ skill, level, keywords }) => {
  var split = skill ? skill.split("_") : "---"
  var skillName = split.length === 2 ? split[1] : split[0]
  var skillColor = (split.length === 2 && colors[split[0]]) ? colors[split[0]].hex : colors.defaultColor.hex
  return (
    <Col s={4} m={3} l={3} xl={2}>
      <div className="skill">
        <Circle percent={level} strokeWidth="8" strokeColor={skillColor} />
        <p>
          {skillName}
        </p>
      </div>
    </Col>
  );
};

const Skills = ({ skills }) => {
  return (
    <div className="skills">
      <h3 className="category-title"><Trans>skills</Trans></h3>
      <Row style={{ marginTop: '50px' }}>
        {skills.map((j, i) => (
          <Skill
            key={"skill-"+i}
            skill={j.name}
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
