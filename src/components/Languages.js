import { Row, Card } from 'react-materialize';
import React from 'react'
import { languagesPropType } from '../common/PropTypes'

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
  languages: languagesPropType
}

export default Languages
