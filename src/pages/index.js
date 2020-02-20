import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import { Col, Row } from "reactstrap"


import Post from "../components/Post"
import Sidebar from "../components/Sidebar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <h1>Servus Page</h1>
    <Row>
      <Col md='8'>
        <StaticQuery query={indexQuery} render={data => {
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  date={node.frontmatter.date}
                  path={node.frontmatter.path}
                  body={node.excerpt}
                  tags={node.frontmatter.tags}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
              ))}
            </div>
          )
        }}/>
      </Col>
      <Col md='4'>
        <Sidebar/>
      </Col>
    </Row>
  </Layout>
)

const indexQuery = graphql`
query{
  allMarkdownRemark (sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "dddd, Do MMM YYYY", locale: "de")
          author
          path
          tags
          image{
            childImageSharp{
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
      }
    }
  }
}
`
export default IndexPage
