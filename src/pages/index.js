import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <h1>Servus Page</h1>
    <StaticQuery query={indexQuery} render={data => {
      return (
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post title={node.frontmatter.title} author={node.frontmatter.author} date={node.frontmatter.date} path={node.frontmatter.path} body={node.excerpt}/>
          ))}
        </div>
      )
    }} />
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
        }
        excerpt
      }
    }
  }
}
`
export default IndexPage
