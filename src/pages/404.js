import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle='404 - Not Found'>
    <SEO title="404 - Not found" />
    <Link className=' btn btn-primary text-uppercase' to={'/'}>Go Home</Link>
  </Layout>
)

export default NotFoundPage
