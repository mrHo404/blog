import React from "react"
import Partner from "../components/Partner"
import PARTNERS from "./../data/partners"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardBody, CardTitle, CardHeader } from "reactstrap"
import { PARTNER_TYPES_ENUM } from "../data/enums"

let partnersSorted = [[], [], [], []]

const sortPartnerArray = () => {
  if (partnersSorted[0].length === 0) {
    PARTNERS.map(PARTNER => {
      switch (PARTNER.type) {
        case PARTNER_TYPES_ENUM.CLUB:
          return partnersSorted[0].push(PARTNER)
        case PARTNER_TYPES_ENUM.SHOP:
          return partnersSorted[1].push(PARTNER)
        case PARTNER_TYPES_ENUM.LEAGUE:
          return partnersSorted[2].push(PARTNER)
        case PARTNER_TYPES_ENUM.TEAM:
          return partnersSorted[3].push(PARTNER)
        default:
          return null
      }
    })
  }
  return null
}

const buildPartnersPerType = partnerArr => {
  return partnerArr.length > 0 ? (
    <Card>
      <CardBody>
        <CardHeader>
          <CardTitle>
            <h4>
              {partnerArr[0].type}
            </h4>
          </CardTitle>
        </CardHeader>
        {partnerArr.map(partner => (
          <Partner key={partner} partners={partner} />
        ))}
      </CardBody>
    </Card>
  ) : null
}

export default () => {
  sortPartnerArray()
  return (
    <Layout pageTitle="Unsere Partner">
      <SEO title="Unsere Partner" />
      {partnersSorted.map(partnerArr => buildPartnersPerType(partnerArr))}
    </Layout>
  )
}
