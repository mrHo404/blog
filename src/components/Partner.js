import React from "react"

export default props => {
  const { title, img, link } = props.partners
  return (
    <a href={link} className="partner-background m-3">
      <img
        src={img}
        alt={title}
        className="partner-img"
      />
    </a>
  )
}
