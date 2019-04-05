import React from 'react'
import { Card, Chip } from 'react-materialize';
import { Trans } from 'react-i18next';
import * as colors from '../common/categoriesColors'
const uuidv4 = require('uuid/v4');

const CardTitle = ({label, extra}) => (
  <span>
    <b>{label}</b>
    {extra && <span className="light-color"> - {extra}</span>}
  </span>
)

const Highlights = ({highlights, color}) => (
    <Card style={{background: "rgba("+color.r+","+color.g+","+color.b+", 0.1)"}}>
      {highlights.map(highlight => {
        var split = highlight.split("_")
        var highlightText = split.length === 2 ? split[1] : split[0]
        var colorClass = (split.length === 2 && colors[split[0]]) ? colors[split[0]].className : colors.defaultColor.hex
        return <Chip className={"hightlight-chip " + colorClass}
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
       { highlights && <Highlights highlights={highlights} color={color} />}
     </div>
   </div>
)

export default CustomCard
