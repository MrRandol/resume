import React from 'react'

const CardTitle = ({label, extra}) => (
  <span>
    <b>{label}</b><span className="light-color">{extra && " - " + extra}</span>
  </span>
)

export default CardTitle
