import React from 'react'
import { Card, Chip } from 'react-materialize';

const CardTitle = ({label, extra}) => (
  <span>
    <b>{label}</b><span className="light-color">{extra && " - " + extra}</span>
  </span>
)

const Highlights = ({highlights, color}) => (
    <Card style={{background: "rgba("+color.r+","+color.g+","+color.b+", 0.1)"}}>
      {highlights.map(highlight => (
        <Chip>{highlight}</Chip>
      ))}
    </Card>
)

const CustomCard = ({children, title, extraTitle, highlights, color}) => {
  return <Card className="work-card"
            style={{background: "rgba("+color.r+","+color.g+","+color.b+", 0.1)"}}
            title={<CardTitle label={title} extra={extraTitle}/>}>
      { children }
      { highlights && <Highlights highlights={highlights} color={color} />}
  </Card>
}

export default CustomCard
