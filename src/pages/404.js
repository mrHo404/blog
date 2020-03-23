import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Card, CardBody, CardTitle, CardSubtitle, CardHeader } from "reactstrap"
import SEO from "../components/seo"

export default () => {
  const notFoundQuery = useStaticQuery(graphql`
    query notFoundQuery {
      file(relativePath: { eq: "404.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 832, maxHeight: 624) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout pageTitle="404 - OH NEIN!">
      <SEO title="404 - Not found" />
      <Card>
        <CardBody>
          <CardHeader>
            <CardTitle className="text-uppercase mb-3">
              <h1>Da ist wohl was schief gelaufen!</h1>
            </CardTitle>
            <CardSubtitle className="text-center mb-3">
            <span>Sorry diese Seite muss erst noch gebaut werden.
            <br />
              Wir löten so schnell wir können!</span>
            </CardSubtitle>
          </CardHeader>
          <Img
            className="card-img"
            fluid={notFoundQuery.file.childImageSharp.fluid}
          />
          <Link className=" btn btn-primary text-uppercase mt-3 w-100" to={"/"}>
            Zurück zur Hauptseite
          </Link>
        </CardBody>
      </Card>
    </Layout>
  )
}
