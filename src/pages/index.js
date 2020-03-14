import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import PaginationLinks from "../components/PaginationLinks"

import Post from "../components/Post"

const IndexPage = () => {
  const postsPerPage = 2
  let nrOfPages
  return (
    <Layout pageTitle="Servus bei Bavarian-MultiRotor">
      <SEO title="Home"/>
      <StaticQuery
        query={indexQuery}
        render={data => {
          nrOfPages = Math.ceil(
            data.allMarkdownRemark.totalCount / postsPerPage,
          )
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                  key={node.id}
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  slug={node.fields.slug}
                  body={node.excerpt}
                  tags={node.frontmatter.tags}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
              ))}
              <PaginationLinks currentPage={1} nrOfPages={nrOfPages}/>
            </div>
          )
        }}
      />
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "dddd, Do MMM YYYY", locale: "de")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
export default IndexPage
