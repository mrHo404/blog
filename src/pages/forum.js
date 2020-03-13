import React from "react"
import Iframe from "react-iframe"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from "reactstrap"

export default () => (
  <Layout pageTitle="Forum">
    <SEO title="Forum" />
    <Card className="h-100">
      <div className="embed-responsive h-100">
        <Iframe
          className="embed-responsive-item"
          scrolling="no"
          importance="high"
          url="http://munichmultirotor.de/index.php?sid=11a8be97e259610625bd132004a87828"
        />
      </div>
    </Card>
  </Layout>
)
