import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { Badge, Card, CardBody, CardSubtitle } from "reactstrap"
import Img from "gatsby-image"
import { slugify } from "./../utils/util"
import Layout from "./../components/layout"
import authors from "./../utils/authors"
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DiscussionEmbed } from "disqus-react"

const TWITTER_HANDLE = ""

const SinglePost = ({ data, pageContext }) => {
  const post = data.markdownRemark.frontmatter
  const author = authors.find(author => author.name === post.author)
  const authorImageFluid = data.file && data.file.childImageSharp ? data.file.childImageSharp.fluid : ""
  const baseUrl = "http://bavarian-multirotor.de/"
  const disqusShortName = 'bavarian-multirotor'
  const disqusConfig = {
    identifier: data.markdownRemark.id,
    title: post.title,
    url: baseUrl + pageContext.slug
  }
  return (
    <Layout pageTitle={post.title} postAuthor={author} authorImageFluid={authorImageFluid}>
      <SEO title={post.title}/>
      <Card>
        <Img className='card-img-top' fluid={post.image.childImageSharp.fluid}/>
        <CardBody>
          <CardSubtitle>
            <span className='text-info'>{post.date}</span> von {" "}
            <span className='text-info'>{post.author}</span>
          </CardSubtitle>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
          <ul className='post-tags'>
            {post.tags.map((tag) => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>
                  <Badge color='primary' className='text-uppercase'>{tag}</Badge>
                </Link>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
      <h3 className='text-center'>
        Teile diesen Post
      </h3>
      <div className='text-center social-share-links'>
        <ul>
          <li><a href={"https://www.facebook.com/sharer/sharer.php?u=" + baseUrl + pageContext.slug}
                 className='facebook' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faFacebookF} className='fab fa-2x'/></a>
          </li>
          <li><a
            href={"https://twitter.com/share?url=" + baseUrl + pageContext.slug + "&text=" + post.title + "&via" + TWITTER_HANDLE}
            className='twitter' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faTwitter} className='fab fa-2x'/></a>
          </li>
        </ul>
      </div>
      <DiscussionEmbed shortname={disqusShortName} config={disqusConfig}/>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!){
    markdownRemark(fields: { slug: { eq: $slug }}){
      id
      html
      frontmatter{
        title
        author
        date(formatString: "dddd, Do MMM YYYY", locale: "de")
        tags
        image{
          childImageSharp{
            fluid(maxWidth: 700 maxHeight: 600){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }  
    }
  }
`

export default SinglePost
