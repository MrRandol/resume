import React from 'react'
import { Card, Chip } from 'react-materialize';
import { Trans } from 'react-i18next';
import * as colors from '../common/categoriesColors'
const uuidv4 = require('uuid/v4');

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
  <span>
    <b>{label}</b>
    {extra && <span className="light-color"> - {extra}</span>}
  </span>
)

const Highlights = ({highlights, color}) => (
    <Card className="highlights" style={{background: "rgba("+color.r+","+color.g+","+color.b+", 0.1)"}}>
      {highlights.map(highlight => {
        var split = highlightParse(highlight)
        var highlightText = split.name
        var colorClass = colors[split.category].className
        return <Chip className={"highlight-chip " + colorClass}
                key={"highlight-" + uuidv4()}>
                  <Trans>{highlightText}</Trans>
               </Chip>
      })}
    </Card>
)

const CustomCard = ({children, title, extraTitle, highlights, color}) => (
  <div className="card custom-card" style={{background: "rgba("+color.r+","+color.g+","+color.b+", 0.1)"}}>
     <div className="card-content">
       <span className="card-title"><CardTitle label={title} extra={extraTitle}/></span>
       { children }
       { (highlights && highlights.length > 0) && <Highlights highlights={highlights} color={color} />}
     </div>
   </div>
)

export default CustomCard
