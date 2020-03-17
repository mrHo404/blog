import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/Post"
import PaginationLinks from "../components/PaginationLinks"

const postList = props => {
  const posts = props.data.allMarkdownRemark.edges
  const { currentPage, nrOfPages } = props.pageContext

  return (
    <Layout pageTitle={`Seite: ${currentPage}`}>
      {posts.map(({ node }) => (
        <Post
          key={node.id}
          slug={node.fields.slug}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          body={node.excerpt}
          tags={node.frontmatter.tags}
          fluid={node.frontmatter.image.childImageSharp.fluid}
        />
      ))}
      <PaginationLinks currentPage={currentPage} nrOfPages={nrOfPages} />
    </Layout>
  )
}

export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
          tags
            title
            date(formatString: "dddd, Do MMM YYYY", locale: "de")
            image {
              childImageSharp {
                fluid(maxWidth: 650, maxHeight: 300) {
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

export default postList
