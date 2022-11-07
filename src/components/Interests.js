import React from 'react';
import { Trans } from 'react-i18next';
import i18next from 'i18next';

const Interest = ({ interest, color }) => (
    <div
          title=<Trans>{interest.name}</Trans>
          logo={interest.logo}
          color={color}>
        <hr style={{color: color.hex}}/>

        {interest.keywords.map(keyword => {
          var keyworkText = i18next.t(keyword) || ""
          var split = keyworkText.split(':')
          var title = split[0]
          var summary = split[1]
          return <div key={interest.name + "-" + interest.keywork} style={{background: "rgba("+color.r+","+color.g+","+color.b+", 0.1)"}} title={title}>
            {summary}
          </div>
        })}
    </div>
)

const Interests = ({ interests, color }) => {
  return (
    <div className="interets">
      <h3 className="category-title"><Trans>interests</Trans></h3>
      {interests.map((interest, i) => (
        <Interest key={interest.name + "-interest-" + interest.keywork} interest={interest} color={color} />
      ))}
    </div>
  );
};

export default Interests;
