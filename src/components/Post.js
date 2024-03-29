import React from "react"
import { Link } from "gatsby"
import { Badge, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap"
import Img from "gatsby-image"
import { slugify } from "./../utils/util"

export default ({ title, slug, date, body, tags, fluid }) => {
  return (
    <Card>
      <Link to={slug}>
        <Img className="card-img-top" fluid={fluid} />
      </Link>
      <CardBody>
        <CardTitle>
          <h4>
            <Link to={slug}>{title}</Link>
          </h4>
        </CardTitle>
        <CardSubtitle>
          <span className="text-info">{date}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <ul className="post-tags">
          {tags.map(tag => (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge color="primary" className="text-uppercase">
                  {tag}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={slug} className="btn btn-outline-primary float-right">
          Weiterlesen...
        </Link>
      </CardBody>
    </Card>
  )
}
