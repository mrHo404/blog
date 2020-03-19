import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/Post"

const tagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const pageHeader = `${totalCount} ${
    totalCount === 1 ? "Beitrag" : "Beiträge"
  } zum Thema: ${tag.toUpperCase()}`

  return (
    <Layout pageTitle={pageHeader}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
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
    </Layout>
  )
}

export const tagQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
                fluid(maxWidth: 645, maxHeight: 485) {
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

export default tagPosts
