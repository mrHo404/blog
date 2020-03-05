import React from "react"
import svaLogo from "./../assets/logos/sva_logo_wings.png"
import { FaRegLaughWink } from "react-icons/fa"
import SocialContact from "./../components/SocialContact/SocialContact"
import Layout from "../components/layout"
import SEO from "../components/seo"

const svaMedia = [
  {
    id: "home",
    link: "https://sportverein-adelsried.de/",
  },
  {
    id: "facebook",
    link:
      "https://www.facebook.com/Drone-Racing-SV-Adelsried-2466568150286674/",
  },
]

//TODO refactor styling
const Adelsried = () => {
  return (
    <Layout pageTitle="Drone Racing beim SV Adelsried">
      <SEO title="Drone Racing beim SV Adelsried" />
      <div>
        <div className="imprint">
          <div className="adelsried-contact-info">
            <img
              src={svaLogo}
              alt={""}
              style={{ width: "100%", padding: "1px" }}
            />
            <div>
              <h2>Nimm Kontakt zu uns auf und werde Mitglied!</h2>
              <p>
                <a
                  href="https://www.sportverein-adelsried.de/"
                  className="mail-to"
                  style={{
                    fontSize: "xx-large",
                    fontFamily: "TitilliumBold",
                  }}
                >
                  www.Sportverein-Adelsried.de
                </a>
              </p>
            </div>
            <hr style={{ backgroundColor: "#d9faff" }} />
            <div>
              <h3>Abteilungsleiter:</h3>
              <p className="imprint-contact-info-contents">
                Michael Kneifl
                <br />
                E-Mail:{" "}
                <a href="mailto:Kneifl.Mic@web.de" className="mail-to">
                  Kneifl.Mic@web.de
                </a>
              </p>
              <hr style={{ backgroundColor: "#d9faff" }} />
              <h3>Stellvertreter:</h3>
              <p className="imprint-contact-info-contents">
                Ben
                <br />
                E-Mail:{" "}
                <a href="mailto:Shaneking@gmx.de" className="mail-to">
                  Shaneking@gmx.de
                </a>
              </p>

              {svaMedia.map(item => (
                <SocialContact key={item.id} mediaProfile={item} />
              ))}
            </div>
          </div>
          <div>
            <div>
              <h1 style={{ textAlign: "left" }}>
                Drone Racing beim SV Adelsried
              </h1>
              <h3 style={{ textAlign: "left" }}>
                Einmalig in Bayern - Die Abteilung Drone Racing
              </h3>
              <hr />
              <p className="imprint-disclaimer">
                Am 8.5.2019 wurde beim SV Adelsried die Abteilung „Drone Racing“
                gegründet. Die Gründungsmitglieder sind hier 10 Mann des BMR
                Teams. Wir freuen uns sehr über die moderne Aufstellung und
                Offenheit für neue Sportarten des SV Adelsried.Das heißt im
                Klartext: Drone Racing ist hier nun eine offizielle Sportart und
                es finden ab sofort Trainings und Wettkämpfe auf dem Gelände des
                Vereins in Adelsried statt.Lasst uns also der Welt zeigen, was
                Drone Racing ist und wie spannend dieser Sport sein kann.
              </p>
              <h3 style={{ textAlign: "left" }}>
                Jeder ist Willkommen! Steigt ein beim SV Adelsried
              </h3>
              <hr />
              <p className="imprint-disclaimer">
                Werde Mitglied beim SV Adelsried und profitiere von allen
                Angeboten und der Gemeinschaft des Vereins. Ob jung, alt,
                Anfänger, Fortgeschrittner oder Profi, über neue Gesichter
                freuen wir uns immer.
              </p>
            </div>
            <h2 style={{ textAlign: "left" }}>Was ist geboten?</h2>
            <hr />
            <div>
              <ul className="bullet-list">
                <li>
                  <span style={{ fontFamily: "TitilliumBold" }}>
                    Voll bewirtschaftetes Vereinsheim:{" "}
                  </span>
                  Jederzeit gutes Bier und leckeres Essen. Der SV Adelsried hat
                  eine tolle Wirtschaft mit fairen Preisen und allem was das
                  Herz begehrt.
                </li>
                <li>
                  <span style={{ fontFamily: "TitilliumBold" }}>
                    Professioneller Fußballplatz:{" "}
                  </span>
                  Der 60m x 100m große Platz bietet ideale Voraussetzungen für
                  Racing.
                </li>
                <li>
                  <span style={{ fontFamily: "TitilliumBold" }}>
                    Tracks mit Profi-Material:{" "}
                  </span>
                  Ein großer Vorrat an Track-material und Sicherheitsequipment
                  vorhanden. Es können gewaltige Tracks mit Pilotensicherung
                  (Netze) gebaut werden.
                </li>
                <li>
                  <span style={{ fontFamily: "TitilliumBold" }}>
                    Monatliche Rennen:{" "}
                  </span>
                  Wir werden monatlich Rennen veranstalten auf denen sich
                  Piloten aus allen Regionen / Gemeinschaften miteinander messen
                  können.
                </li>
                <li>
                  <span style={{ fontFamily: "TitilliumBold" }}>
                    Offizielles Vereinsgelände:{" "}
                  </span>
                  Keine lange Suche nach abgelegenen Geländen um Passanten nicht
                  zu Stören.
                </li>
                <li>
                  <span style={{ fontFamily: "TitilliumBold" }}>
                    Gepflegter Platz:{" "}
                  </span>{" "}
                  Kein suchen von Coptern in Büschen und hohem Graß und dazu
                  noch ein geringeres Risiko eure Komponenten zu zerstören.
                </li>
                <li>
                  <span style={{ fontFamily: "TitilliumBold" }}>BMR: </span>Eine
                  freundliche und offene Atmosphäre mit erfahrenen Leuten.
                </li>
                <li>
                  <span style={{ fontFamily: "TitilliumBold" }}>
                    Notdurft:{" "}
                  </span>
                  Strom, Toiletten und Duschen
                  <span style={{ fontFamily: "TitilliumBold" }}>. . . </span> In
                  dieser Reihenfolge. <FaRegLaughWink />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>Warum sollte ich Mitglied werden?</h2>
            <hr />
            <p className="imprint-disclaimer">
              Mitglieder können natürlich all die oben genannten Vorteile in
              vollem Umfang nutzen und auch alle anderen Vorteile des Vereins
              (Klick). Checkt ab ob der Platz frei ist und trainiert.
              (Ansprechpartner: Michael Kneifl). Gerade wenn ihr aus der Region
              kommt lohnt es sich besonders, denn ihr habt ein neues Zuhause für
              Drone Racing gefunden. Auf den monatlichen Races sind natürlich
              alle Piloten eingeladen auch Nichtmitglieder. Hier geht es ja
              schließlich darum das sich ALLE Piloten von Überall gegeneinander
              messen können und im fairen Wettstreit gegeneinander antreten und
              miteinander trainieren. Nur müssen wir natürlich für
              Nichtmitglieder eine kleine Gebühr verlangen wenn sie an den
              monatlichen Rennen teilnehmen wollen oder mal mit trainieren. Es
              lohnt sich also Mitglied zu werden.
            </p>
            <h2>BMR und SV Adelsried-Drone Racing</h2>
            <hr />
            <p className="imprint-disclaimer">
              <span style={{ fontFamily: "TitilliumBold" }}>
                BMR Bleibt natürlich BMR:{" "}
              </span>
              Eine Interessensgemeinschaft für FPV Piloten in ganz Bayern,
              besonders konzentriert in der Region München/Augsburg. Es finden
              auch weiterhin wöchentlich Treffen an verschiedensten Orten statt.
              Aber zusätzlich gibt es jetzt noch SV Adelsried Drone Racing. Eine
              offizielle Heimat für Drohnenpiloten in einem eingetragenen
              Verein. Um mitzumachen müsst ihr kein BMR Mitglied sein! SV
              Adelsried Droneracing handelt eigenständig und ist eine offizielle
              Abteilung des Vereins SV Adelsried. BMR stellt der neuen Abteilung
              die volle Unterstützung und alles Material zur Seite! Und die
              meisten BMR Vertreter sind natürlich Mitglied.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Adelsried
