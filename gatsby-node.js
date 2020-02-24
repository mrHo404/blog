const { slugify } = require("./src/utils/util")
const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    createNodeField({
      node,
      name: "slug",
      value: slugify(node.frontmatter.title),
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const singePostTemplate = path.resolve("src/templates/single-post.js")
  await graphql(`
    {
      allMarkdownRemark{
        edges{
          node{
            frontmatter{
              author
            }
            fields{
              slug
            }
          }
        }
      }  
    }
  `).then((res) => {
    if (res.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `${node.fields.slug}`,
        component: singePostTemplate,
        context: {
          //Passing slug as path
          slug: node.fields.slug,
        },
      })
    })
  })
}
