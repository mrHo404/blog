import React from "react"

const Partner = props => {
  const { title, img, link } = props.partners
  return (
    <a href={link} className="partner-background">
      <img
        src={img}
        alt={title}
        style={{ maxWidth: 350, maxHeight: 250, opacity: "80%" }}
      />
    </a>
  )
}

export default Partner
