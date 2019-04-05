import React from 'react'
import { languagesPropType } from '../common/PropTypes'
import { Trans } from 'react-i18next';
import CustomCard from './Utils'

const Language = ({language, color}) => (
    <CustomCard
          title={language.name}
          color={color}>
        {language.level}
    </CustomCard>
)

const Languages = ({languages, color}) => (
  <div className="languages">
    <h3 class="category-title"><Trans>languages</Trans></h3>
    {languages.map(language => (
      <Language language={language} color={color} />
    ))}
  </div>
)

Languages.propTypes = {
  languages: languagesPropType
}

export default Languages
