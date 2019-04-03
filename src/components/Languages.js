import { Row, Card } from 'react-materialize';
import React from 'react'
import PropTypes from 'prop-types'

const Language = ({language}) => (
    <Card title={language.name}>
      <p>
        {language.level}
      </p>
    </Card>
)

const Languages = ({languages}) => (
  <p>
    {languages.map(language => (
      <Row>
        <Language language={language} />
      </Row>
    ))}
  </p>
)

Languages.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.string,
  })).isRequired
}

export default Languages
