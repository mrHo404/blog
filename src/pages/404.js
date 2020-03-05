import React from "react"
import Oops from './../assets/oops.png';
import {FaRegSadTear} from 'react-icons/fa';

import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle='404 - Not Found'>
    <SEO title="404 - Not found" />
    <underConstruction>
      <div className='construction-text'>
        <p>Sorry diese Seite muss erst noch gebaut werden </p>
        <FaRegSadTear/>
        <p>Wir löten so schnell wir können!</p>
        <Link className=' btn btn-primary text-uppercase' to={'/'}>Go Home</Link>
      </div>
      <img src={Oops} alt={''}/>
    </underConstruction>
  </Layout>
)

export default NotFoundPage
