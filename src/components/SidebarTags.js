import React from "react"
import { Badge, Card, CardBody, CardTitle } from "reactstrap"
import { graphql, Link, StaticQuery } from "gatsby"
import { slugify } from "../utils/util"
import _ from "lodash"

export default () => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Alle Themen
        </CardTitle>
        <ul>
          <StaticQuery
            query={tagsQuery}
            render={data => {
              const tagsWithCounts = getAllTagsWithCounts(data)
              return tagsWithCounts.tag.map(tag => (
                <li key={tag}>
                  <Link
                    to={`/tag/${slugify(tag)}`}
                    className="text-uppercase"
                    style={{ fontSize: "14pt" }}
                  >
                    <Badge color="primary">
                      {tag}
                      {" -   "}
                      {tagsWithCounts.count[tag]}
                    </Badge>
                  </Link>
                </li>
              ))
            }}
          />
        </ul>
      </CardBody>
    </Card>
  )
}

const getAllTagsWithCounts = data => {
  let tags = []
  _.each(data.allMarkdownRemark.edges, edge => {
    if (_.get(edge, "node.frontmatter.tags")) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })

  let tagPostCounts = {}
  tags.forEach(tag => {
    tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
  })
  tags = _.uniq(tags)
  tags = _.orderBy(tags)
  return { tag: tags, count: tagPostCounts }
}

const tagsQuery = graphql`
  query tagsQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
