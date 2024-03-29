import React from "react"
import Iframe from "react-iframe"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from "reactstrap"

export default () => (
  <Layout pageTitle="Forum">
    <SEO title="Forum" />
    <Card >
        <Iframe
          className="embed-responsive-item forum"
          scrolling="no"
          importance="high"
          url="http://munichmultirotor.de/index.php?sid=11a8be97e259610625bd132004a87828"
        />
    </Card>
  </Layout>
)
