import React from 'react'
import { Footer as MaterialFooter } from 'react-materialize';
import { Trans } from 'react-i18next';

const Footer = ({color}) => (
    <MaterialFooter className={color.className}>
      <a href="https://reactjs.org/"><Trans>powered_by_react</Trans></a>
      <a href="https://github.com/deltaskelta/react-awesome-resume"><Trans>inspired_by_awesome_resume</Trans></a>
    </MaterialFooter>
)

export default Footer
