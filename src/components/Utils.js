import React from 'react'
import { Trans } from 'react-i18next';
import * as colors from '../common/categoriesColors'

const uuidv4 = require('uuid/v4');
const _ = require('lodash');

export const highlightParse = (highlight) => {
  var split = highlight.split("_");
  if (split.length === 1) {
    return {
      "category": "other",
      "name": highlight
    }
  } else {
    var cat = split.shift()
    return {
      "category": cat,
      "name": split.join("_")
    }
  }
}

const CardTitle = ({label, extra}) => (
  <div>
    <p>
      <b>{label}</b>
      {extra && <span className="light-color"> - {extra}</span>}
    </p>
  </div>
)

const Highlights = ({highlights, color}) => (
    <div className="highlights" style={{background: "transparent"}}>
      {highlights.map(highlight => {
        var split = highlightParse(highlight)
        var highlightText = split.name
        var colorClass = colors[split.category].className
        return <span className={"highlight-chip " + colorClass}
                key={"highlight-" + uuidv4()}>
                  <Trans>{highlightText}</Trans>
               </span>
      })}
    </div>
)

const generateLogo = (logo) => {
    if (_.startsWith(logo, "img:")) {
      return <img className="hide-on-med-and-down custom-card-logo" src={_.replace(logo, "img:", "")} alt="logo" />
    } else if (_.startsWith(logo, "icon:")) {
      return <i className={"hide-on-med-and-down custom-card-logo " + _.replace(logo, "icon:", "")}/>
    }else {
      return null;
    }
}

const CustomCard = ({children, logo, title, extraTitle, highlights, color}) => (
  <div className="card custom-card"
  style={{borderLeft:"5px solid " + color.hex,background: "rgba("+color.r+","+color.g+","+color.b+", 0.05)"}}>
     <div className="card-content">
      {generateLogo(logo)}
       <span className="card-title"><CardTitle label={title} extra={extraTitle}/></span>
       { children }
       { (highlights && highlights.length > 0) && <Highlights highlights={highlights} color={color} />}
     </div>
   </div>
)

export default CustomCard
