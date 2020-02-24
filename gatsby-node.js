const { slugify } = require("./src/utils/util")
const path = require("path")
const authors = require("./src/utils/authors")

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
      const author = authors.find(author => author.name === node.frontmatter.author)
      const imageUrl = author ? author.imageUrl : ''
      createPage({
        path: `${node.fields.slug}`,
        component: singePostTemplate,
        context: {
          //Passing slug as path
          slug: node.fields.slug,
          //FindAuthour imageUrl and pass it to single-post template
          imageUrl: imageUrl,
        },
      })
    })
  })
}


