import React from "react"
import Img from "gatsby-image"

export default ({ partner, img }) => {
  console.log("img", partner.imgUrl)

  return !!img ? (
    <a href={partner.link} className="partner-background m-3 p-3">
      <Img
        fluid={img.childImageSharp.fluid}
        className="m-4"
      />
    </a>
  ) : null
}
