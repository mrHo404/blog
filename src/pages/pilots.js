import PILOTS from "./../data/pilots"
import React from "react"
import Pilot from "./../components/Pilot/Pilot"
import { RANKS_ENUM } from "./../data/enums"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardBody, CardTitle, CardHeader } from "reactstrap"

let pilotsSorted = [[], [], [], [], [], []]

const sortPilotArray = () => {
  if (pilotsSorted[0].length === 0) {
    PILOTS.map(PILOT => {
      switch (PILOT.rank) {
        case RANKS_ENUM.ONE:
          return pilotsSorted[0].push(PILOT)
        case RANKS_ENUM.TWO:
          return pilotsSorted[1].push(PILOT)
        case RANKS_ENUM.THREE:
          return pilotsSorted[2].push(PILOT)
        case RANKS_ENUM.FOUR:
          return pilotsSorted[3].push(PILOT)
        case RANKS_ENUM.FIVE:
          return pilotsSorted[4].push(PILOT)
        case RANKS_ENUM.SIX:
          return pilotsSorted[5].push(PILOT)
        default:
          return null
      }
    })
  }
  return null
}

const buildPilotsPerRank = rankArr => {
  return rankArr.length > 0 ? (
    <Card>
      <CardBody>
        <div key={rankArr[0].rank}>
          {rankArr[0].rank === RANKS_ENUM.FIVE ||
          rankArr[0].rank === RANKS_ENUM.SIX ? (
            <React.Fragment>
              <h1>Co-Cospiratores:</h1>
            </React.Fragment>
          ) : null}
          {rankArr[0].rank === RANKS_ENUM.ONE ? (
            <CardHeader>
              <CardTitle>
                <h1>{rankArr[0].rank}</h1>
              </CardTitle>
            </CardHeader>
          ) : (
            <CardHeader>
              <CardTitle>
                <h3>{rankArr[0].rank}</h3>
              </CardTitle>
            </CardHeader>
          )}
          {rankArr.map(pilot => (
            <Pilot key={pilot.id} profile={pilot} />
          ))}
        </div>
      </CardBody>
    </Card>
  ) : null
}

export default () => {
  sortPilotArray()
  return (
    <Layout pageTitle="Die BMR Mafia">
      <SEO title="BMR Piloten" />
      {pilotsSorted.map(rankArr => buildPilotsPerRank(rankArr))}
    </Layout>
  )
}
