import React from "react"
import { Card, CardBody, CardText, CardTitle } from "reactstrap"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Sidebar = ({ postAuthor, authorImageFluid }) => (
  <div>
    {postAuthor ? (
      <Card>
        <Img className="card-img-top" fluid={authorImageFluid} />
        <CardBody>
          <CardTitle className="text-center text-uppercase mb-3">
            {postAuthor.name}
          </CardTitle>
          <CardText>{postAuthor.bio}</CardText>
        </CardBody>
      </Card>
    ) : null}
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">Werbung</CardTitle>
        <img
          src="http://via.placeholder.com/320x200"
          alt="Advert"
          style={{ width: "100%" }}
        />
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Neuigkeiten
        </CardTitle>
        <StaticQuery
          query={sidebarQuery}
          render={data => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card key={node.id}>
                  <Link to={node.fields.slug}>
                    <Img
                      className="card-img-top"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                  </Link>
                  <CardBody>
                    <CardTitle>
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link>
                    </CardTitle>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        />
      </CardBody>
    </Card>
  </div>
)

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Sidebar
