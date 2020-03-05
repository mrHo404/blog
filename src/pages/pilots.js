import PILOTS from "./../data/pilots"
import React from "react"
import Pilot from "./../components/Pilot/Pilot"
import { RANKS_ENUM } from "./../data/enums"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
    <div key={rankArr[0].rank}>
      {rankArr[0].rank === RANKS_ENUM.FIVE ? (
        <React.Fragment>
          <hr />
          <hr />
          <h1>Co-Cospiratores</h1>
        </React.Fragment>
      ) : null}
      <hr />
      {rankArr[0].rank === RANKS_ENUM.ONE ? (
        <h2>{rankArr[0].rank}</h2>
      ) : (
        <h3 style={{ paddingTop: 15 }}>{rankArr[0].rank}</h3>
      )}
      {rankArr.map(pilot => (
        <Pilot key={pilot.id} profile={pilot} />
      ))}
    </div>
  ) : null
}

export default () => {
  sortPilotArray()
  return (
    <Layout pageTitle="Die BMR Mafia">
      <SEO title="BMR Piloten" />
      <div style={{ paddingBottom: 20 }}>
        {pilotsSorted.map(rankArr => buildPilotsPerRank(rankArr))}
      </div>
    </Layout>
  )
}
