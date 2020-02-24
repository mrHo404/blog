import React from "react"
import { Card, CardBody, CardText, CardTitle, Form, FormGroup, Input } from "reactstrap"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Sidebar = ({ postAuthor, authorImageFluid }) => (
  <div>
    {
      postAuthor ?
        <Card>
          <Img className='card-img-top' fluid={authorImageFluid}/>
          <CardBody>
            <CardTitle className='text-center text-uppercase mb-3'>
              {postAuthor.name}
            </CardTitle>
            <CardText>
              {postAuthor.bio}
            </CardText>
            <div className='author-social-links text-center'>
              <ul>
                <li>
                  <a href={postAuthor.facebook} target='_blank' rel='noopener noreferrer' className='facebook'>
                    <FontAwesomeIcon icon={faFacebookF} className='fab fa-2x'/>
                  </a>
                </li>
                <li>
                  <a href={postAuthor.instagram} target='_blank' rel='noopener noreferrer' className='instagram'>
                    <FontAwesomeIcon icon={faInstagram} className='fab fa-2x'/>
                  </a>
                </li>
                <li>
                  <a href={postAuthor.twitter} target='_blank' rel='noopener noreferrer' className='twitter'>
                    <FontAwesomeIcon icon={faTwitter} className='fab fa-2x'/>
                  </a>
                </li>
                <li>
                  <a href={postAuthor.linkedIn} target='_blank' rel='noopener noreferrer' className='linkedin'>
                    <FontAwesomeIcon icon={faLinkedin} className='fab fa-2x'/>
                  </a>
                </li>
              </ul>
            </div>
          </CardBody>
        </Card>
        : null
    }
    <Card>
      <CardBody>
        <CardTitle className='text-center text-uppercase mb-3'>
          NewsLetter
        </CardTitle>
        <Form>
          <FormGroup>
            <Input type='email' name='email' placeholder='Your E-Mail here...'/>
          </FormGroup>
          <button className='btn btn-outline-success text-uppercase'>Subscribe</button>
        </Form>
      </CardBody>
    </Card>

    <Card>
      <CardBody>
        <CardTitle className='text-center text-uppercase'>Advertisement</CardTitle>
        <img src='http://via.placeholder.com/320x200' alt='Advert' style={{ width: "100%" }}/>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className='text-center text-uppercase mb-3'>
          Recent Posts
        </CardTitle>
        <StaticQuery query={sidebarQuery} render={(data) => (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Card key={node.id}>
                <Link to={node.fields.slug}>
                  <Img className='card-img-top' fluid={node.frontmatter.image.childImageSharp.fluid}/>
                </Link>
                <CardBody>
                  <CardTitle>
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  </CardTitle>
                </CardBody>
              </Card>
            ))}
          </div>
        )}/>
      </CardBody>
    </Card>
  </div>
)

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC}
      limit: 3
    ){
      edges{
        node{
          id
          frontmatter{
            title
            image{
              childImageSharp{
                fluid(maxWidth: 300){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields{
            slug
          }
        }
      }
    }
  }
`

export default Sidebar
