import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import SEO from "../components/seo"

export default () => {
  const notFoundQuery = useStaticQuery(graphql`
    query notFoundQuery {
      file(relativePath: { eq: "404.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout pageTitle="404 - Oh Nein!">
      <SEO title="404 - Not found" />
      <Card>
        <CardBody>
          <CardTitle> Da ist wohl was schief gelaufen!</CardTitle>
          <CardSubtitle>
            Sorry diese Seite muss erst noch gebaut werden.
            <br />
            Wir löten so schnell wir können!
          </CardSubtitle>
          <Img fluid={notFoundQuery.file.childImageSharp.fluid} />
          <Link className=" btn btn-primary text-uppercase" to={"/"}>
            Zurück zur Hauptseite
          </Link>
        </CardBody>
      </Card>
    </Layout>
  )
}
