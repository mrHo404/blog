import React from "react"
import Iframe from "react-iframe"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Forum = () => {
  return (
    <Layout pageTitle='Forum'>
      <SEO title="Forum" />
      <div className="embed-responsive embed-responsive-16by9">
        <Iframe
          className="embed-responsive-item"
          scrolling="no"
          importance="high"
          url="http://munichmultirotor.de/index.php?sid=11a8be97e259610625bd132004a87828"
        />
      </div>
    </Layout>
  )
}
export default Forum
