import React from "react"
//import svaLogo from "./../assets/logos/sva_logo_wings.png"
import { FaRegLaughWink } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardBody, CardTitle, CardHeader } from "reactstrap"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { SIDEBAR_CONTENTS } from "./../data/sidebarContents"

export default ({ data }) => (
  <Layout
    pageTitle="Drone Racing beim SV Adelsried"
    sidebarContent={SIDEBAR_CONTENTS.SVA}
  >
    <SEO title="Drone Racing beim SV Adelsried" />
    <Card>
      <CardBody>
        <CardHeader>
          <Img className="card-img" fluid={data.file.childImageSharp.fluid} />
          <CardTitle className="mb-3">
            <h2>Einmalig in Bayern - Die Abteilung Drone Racing</h2>
          </CardTitle>
        </CardHeader>
        <p>
          Am 8.5.2019 wurde beim SV Adelsried die Abteilung „Drone Racing“
          gegründet. Die Gründungsmitglieder sind hier 10 Mann des BMR Teams.
          Wir freuen uns sehr über die moderne Aufstellung und Offenheit für
          neue Sportarten des SV Adelsried.Das heißt im Klartext: Drone Racing
          ist hier nun eine offizielle Sportart und es finden ab sofort
          Trainings und Wettkämpfe auf dem Gelände des Vereins in Adelsried
          statt.Lasst uns also der Welt zeigen, was Drone Racing ist und wie
          spannend dieser Sport sein kann.
        </p>
        <h3>Jeder ist Willkommen! Steigt ein beim SV Adelsried</h3>
        <hr />
        <p>
          Werde Mitglied beim SV Adelsried und profitiere von allen Angeboten
          und der Gemeinschaft des Vereins. Ob jung, alt, Anfänger,
          Fortgeschrittner oder Profi, über neue Gesichter freuen wir uns immer.
        </p>
        <h3>Was ist geboten?</h3>
        <hr />
        <ul className="bullet-list">
          <li>
            <span>Voll bewirtschaftetes Vereinsheim: </span>Jederzeit gutes Bier
            und leckeres Essen. Der SV Adelsried hat eine tolle Wirtschaft mit
            fairen Preisen und allem was das Herz begehrt.
          </li>
          <li>
            <span>Professioneller Fußballplatz: </span>Der 60m x 100m große
            Platz bietet ideale Voraussetzungen für Racing.
          </li>
          <li>
            <span>Tracks mit Profi-Material: </span>Ein großer Vorrat an
            Track-material und Sicherheitsequipment vorhanden. Es können
            gewaltige Tracks mit Pilotensicherung (Netze) gebaut werden.
          </li>
          <li>
            <span>Monatliche Rennen: </span>Wir werden monatlich Rennen
            veranstalten auf denen sich Piloten aus allen Regionen /
            Gemeinschaften miteinander messen können.
          </li>
          <li>
            <span>Offizielles Vereinsgelände: </span>Keine lange Suche nach
            abgelegenen Geländen um Passanten nicht zu Stören.
          </li>
          <li>
            <span>Gepflegter Platz: </span> Kein suchen von Coptern in Büschen
            und hohem Graß und dazu noch ein geringeres Risiko eure Komponenten
            zu zerstören.
          </li>
          <li>
            <span>BMR: </span>Eine freundliche und offene Atmosphäre mit
            erfahrenen Leuten.
          </li>
          <li>
            <span>Notdurft: </span>Strom, Toiletten und Duschen
            <span>. . . </span> In dieser Reihenfolge. <FaRegLaughWink />
          </li>
        </ul>
        <h3>Warum sollte ich Mitglied werden?</h3>
        <hr />
        <p>
          Mitglieder können natürlich all die oben genannten Vorteile in vollem
          Umfang nutzen und auch alle anderen Vorteile des Vereins. Checkt ab ob
          der Platz frei ist und trainiert. Gerade wenn ihr aus der Region kommt
          lohnt es sich besonders, denn ihr habt ein neues Zuhause für Drone
          Racing gefunden. Auf den monatlichen Races sind natürlich alle Piloten
          eingeladen auch Nichtmitglieder. Hier geht es ja schließlich darum das
          sich ALLE Piloten von Überall gegeneinander messen können und im
          fairen Wettstreit gegeneinander antreten und miteinander trainieren.
          Nur müssen wir natürlich für Nichtmitglieder eine kleine Gebühr
          verlangen wenn sie an den monatlichen Rennen teilnehmen wollen oder
          mal mit trainieren. Es lohnt sich also Mitglied zu werden.
        </p>
        <h3>BMR und SV Adelsried-Drone Racing</h3>
        <hr />
        <p>
          <span>BMR Bleibt natürlich BMR: </span>Eine Interessensgemeinschaft
          für FPV Piloten in ganz Bayern, besonders konzentriert in der Region
          München/Augsburg. Es finden auch weiterhin wöchentlich Treffen an
          verschiedensten Orten statt. Aber zusätzlich gibt es jetzt noch SV
          Adelsried Drone Racing. Eine offizielle Heimat für Drohnenpiloten in
          einem eingetragenen Verein. Um mitzumachen müsst ihr kein BMR Mitglied
          sein! SV Adelsried Droneracing handelt eigenständig und ist eine
          offizielle Abteilung des Vereins SV Adelsried. BMR stellt der neuen
          Abteilung die volle Unterstützung und alles Material zur Seite! Und
          die meisten BMR Vertreter sind natürlich Mitglied.
        </p>
      </CardBody>
    </Card>
  </Layout>
)

export const svaLogoQuery = graphql`
  query svaLogoQuery {
    file(relativePath: { eq: "sva_logo_wings.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
