import React from "react"
import { Card, CardBody, CardText, CardTitle } from "reactstrap"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import SidebarTags from "./SidebarTags"

export default ({ authorImageFluid, postAuthor }) => (
  <div>
    {postAuthor ? (
      <PostAuthorCard
        authorImageFluid={authorImageFluid}
        postAuthor={postAuthor}
      />
    ) : null}
    <SidebarTags/>
    <AdvertisementCard />
    <RecentPostsCard />
  </div>
)

export const PostAuthorCard = (authorImageFluid, postAuthor) => (
  <Card>
    <Img className="card-img-top" fluid={authorImageFluid} />
    <CardBody>
      <CardTitle className="text-center text-uppercase mb-3">
        {postAuthor.name}
      </CardTitle>
      <CardText>{postAuthor.bio}</CardText>
    </CardBody>
  </Card>
)

export const AdvertisementCard = () => (
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
)

export const RecentPostsCard = () => (
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
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  </CardTitle>
                 {/* <ul>
                    {node.frontmatter.tags.map((tag) => (
                      <li key={tag}>
                        <Link to={`/tag/${slugify(tag)}`}>
                          <Badge color='primary' className='text-uppercase'>{tag}</Badge>
                        </Link>
                      </li>
                    ))}
                  </ul>*/}
                </CardBody>
              </Card>
            ))}
          </div>
        )}
      />
    </CardBody>
  </Card>
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
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 300 maxHeight: 200) {
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
