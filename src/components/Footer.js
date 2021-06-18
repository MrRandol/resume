import React from 'react'
import { Trans } from 'react-i18next';

const Footer = ({color}) => (
    <div className={color.className}>
      <ul className="footer-links">
        <li>
          <Trans>powered_by</Trans>
          <a href="https://reactjs.org/">ReactJS</a>
          &nbsp; <i className="fab fa-react"></i>
        </li>
        <li>
          <Trans>inspired_by</Trans>
          <a href="https://github.com/deltaskelta/react-awesome-resume">« React Awesome Resume »</a>
          &nbsp; <i className="fab fa-github"></i>
        </li>
        <li>
          <Trans>based_on</Trans>
          <a href="https://jsonresume.org/">JSON Resume</a>
          &nbsp; <i className="fas fa-code"></i>
        </li>
      </ul>
    </div>
)

export default Footer
