import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Badge, Button } from "reactstrap"
import { slugify } from "../utils/util"

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout pageTitle='Alle Themen'>
      <SEO title='all-tags' keywords={["tags", "topics"]}/>
      <ul>
        {tags.map(tag => (
          <li key={tag} style={{ marginBottom: "10px" }}>
            <Button color='primary' href={`/tag/${slugify(tag)}`}>
              {tag} <Badge color='light'>{tagPostCounts[tag]}</Badge>
            </Button>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default tagsPage
