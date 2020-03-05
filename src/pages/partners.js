import React from 'react';
import Partner from "../components/Partner";
import PARTNERS from "./../data/partners";
import Layout from "../components/layout"
import SEO from "../components/seo"

const Partners = () => (
  <Layout pageTitle='Unsere Partner'>
    <SEO title="Unsere Partner" />
    <div style={{display: 'flex', justifyContent: 'center', paddingTop: 20, paddingBottom: 45}}>
      {PARTNERS.map((PARTNER) => (
        <Partner key={PARTNER.title} partners={PARTNER}/>))}
    </div>
  </Layout>
);


export default Partners;
