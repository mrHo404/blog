const { slugify } = require("./src/utils/util")
const path = require("path")
const authors = require("./src/utils/authors")
const _ = require("lodash")

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

exports.createPages = ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const templates = {
    singlePost: path.resolve("src/templates/single-post.js"),
    tagPosts: path.resolve("src/templates/tag-posts.js"),
    postList: path.resolve("src/templates/post-list.js")
  }

  return graphql(`
    {
      allMarkdownRemark{
        edges{
          node{
            frontmatter{
              author
              tags
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
    const posts = res.data.allMarkdownRemark.edges

    //create single blog pages
    posts.forEach(({ node }) => {
      const author = authors.find(author => author.name === node.frontmatter.author)
      const imageUrl = author ? author.imageUrl : ""
      createPage({
        path: `${node.fields.slug}`,
        component: templates.singlePost,
        context: {
          //Passing slug as path
          slug: node.fields.slug,
          //FindAuthour imageUrl and pass it to single-post template
          imageUrl: imageUrl,
        },
      })
    })

    //get all unique tags with counts
    let tags = []
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    let tagPostCounts = {}
    tags.forEach(tag => {
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
    })
    tags = _.uniq(tags)

   /* //create Tags page
    createPage({
      path: `/tags/`,
      component: templates.tagsPage,
      context: {
        tags,
        tagPostCounts
      }
    })*/

    //create Tag Post Pages
    tags.forEach(tag =>{
      createPage({
        path:`/tag/${slugify(tag)}`,
        component:templates.tagPosts,
        context: {
          tag
        }
      })
    })

    const postsPerPage = 2
    const nrOfPages = Math.ceil(posts.length / postsPerPage)

    Array.from({length: nrOfPages}).forEach((_, index) => {
      const isFirstPage = index === 0
      const currentPage = index + 1

      if(isFirstPage) return

      createPage({
        path: `/page/${currentPage}`,
        component: templates.postList,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          currentPage,
          nrOfPages
        }
      })
    })
  })
}


