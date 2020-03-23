import React from "react"
import { Card, CardBody, CardText, CardTitle } from "reactstrap"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import SidebarTags from "./SidebarTags"
import SocialContact from "./SocialContact"

const getActions = action => {
  switch (action.type) {
    case "button":
      return (
        <Link to={action.data.ref} className="btn btn-bmr mt-3">
          {action.data.label}
        </Link>
      )
    case "link":
      return (
        <a href={action.data.ref} target="_blank" rel="noopener noreferrer">
          {action.data.label}
        </a>
      )
    case "socialContacts":
      return action.data.map(mediaProfile => (
        <SocialContact key={mediaProfile.id} mediaProfile={mediaProfile} />
      ))
    default:
      return null
  }
}

export default ({ sidebarContent }) => (
  <StaticQuery
    query={sidebarQuery}
    render={data => {
      return sidebarContent ? (
        <div>
          <SidebarContent
            sidebarContent={sidebarContent}
            logos={[
              data.bmrLogo.childImageSharp.fluid,
              data.svaLogo.childImageSharp.fluid,
            ]}
          />
          <SidebarTags />
          {/*<AdvertisementCard />*/}
          <RecentPostsCard recentPosts={data.allMarkdownRemark.edges} />
        </div>
      ) : (
        <div>
          <SidebarTags />
          {/*<AdvertisementCard />*/}
          <RecentPostsCard recentPosts={data.allMarkdownRemark.edges} />
        </div>
      )
    }}
  />
)

export const SidebarContent = ({ sidebarContent, logos }) =>
  sidebarContent.map(sidebarCard => (
    <Card key={sidebarCard.content[0].title} className="card-bmr-colors">
      {sidebarCard.img ? (
        <a
          href={sidebarCard.img.ref ? sidebarCard.img.ref : ""}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            fluid={sidebarCard.img.imgUrl === "bmrBadge" ? logos[0] : logos[1]}
          />
        </a>
      ) : null}
      <CardBody>
        {sidebarCard.content.map(bodyItem => (
          <div key={bodyItem.title}>
            <CardTitle className="text-center text-uppercase mb-3">
              <h6 className="mt-2">{bodyItem.title}</h6>
            </CardTitle>
            <div>
              {bodyItem.text.map(textItem => (
                <div className="text-center" key={textItem}>
                  {textItem}
                </div>
              ))}
            </div>
          </div>
        ))}
        {sidebarCard.action ? (
          <div className="text-center">{getActions(sidebarCard.action)}</div>
        ) : null}
      </CardBody>
    </Card>
  ))

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

export const RecentPostsCard = ({ recentPosts }) => (
  <Card>
    <CardBody>
      <CardTitle className="text-center text-uppercase mb-3">
        Neuigkeiten
      </CardTitle>
      <div>
        {recentPosts.map(({ node }) => (
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
                fluid(maxWidth: 300, maxHeight: 225) {
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
    bmrLogo: file(relativePath: { eq: "BMR_Logo_Icon_Colour4x.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    svaLogo: file(relativePath: { eq: "sva_logo.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
