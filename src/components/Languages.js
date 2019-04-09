import React from 'react'
import { languagesPropType } from '../common/PropTypes'
import { Trans } from 'react-i18next';
import CustomCard from './Utils'
const uuidv4 = require('uuid/v4');

const Language = ({language, color}) => (
    <CustomCard
          title={language.name}
          logo={language.logo}
          color={color}>
        {language.level}
    </CustomCard>
)

const Languages = ({languages, color}) => (
  <div className="languages">
    <h3 className="category-title"><Trans>languages</Trans></h3>
    {languages.map(language => (
      <Language key={"language-" + uuidv4()} language={language} color={color} />
    ))}
  </div>
)

Languages.propTypes = {
  languages: languagesPropType
}

export default Languages
