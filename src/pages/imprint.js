import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardBody, CardTitle, CardHeader } from "reactstrap"

const sidebarContents = [
  {
    action: {
      type: "link",
      data: {
        label: "r.stach.muc@gmail.com",
        ref: "mailto:r.stach.muc@gmail.com",
      },
    },
    content: [
      {
        title: "Angaben gemäß §5 TMG:",
        text: ["Robert Stach", "Krautheimstr. 27a", "80997 München"],
      },
      {
        title: "Kontakt:",
        text: ["Telefon: +49 (0) 170 18 88 82 5"],
      },
    ],
    img: null,
  },
  {
    action: {
      type: "link",
      data: {
        label: "www.e-recht24.de",
        ref: "https://www.e-recht24.de",
      },
    },
    content: [
      {
        title: "Verantwortlich für den Inhalt nach §55 Abs. 2 RStV:",
        text: ["Robert Stach", "Krautheimstr. 27a", "80997 München"],
      },
      {
        title: "Quelle:",
        text: [],
      },
    ],
    img: null,
  },
  {
    action: {
      type: "link",
      data: {
        label: "ho.chi-tin@gmx.de",
        ref: "mailto:ho.chi-tin@gmx.de",
      },
    },
    content: [
      {
        title: "Webdesign:",
        text: ["Chi-Tin Ho"],
      },
    ],
    img: null,
  },
  {
    action: {
      type: "link",
      data: {
        label: "Niklas Solle",
        ref: "https://www.facebook.com/revomotionmedia/",
      },
    },
    content: [
      {
        title: "Bilder von:",
        text: [],
      },
    ],
    img: null,
  },
  {
    action: {
      type: "link",
      data: {
        label: "www.flaticon.com",
        ref: "https://www.flaticon.com/authors/freepik",
      },
    },
    content: [
      {
        title: "Icons von:",
        text: [],
      },
    ],
    img: null,
  },
]

export default () => (
  <Layout pageTitle="Impressum" sidebarContents={sidebarContents}>
    <SEO title="Impressum" />
    <Card>
      <CardBody>
        <CardHeader>
          <CardTitle>
            <h2>Haftungsausschluss (Disclaimer)</h2>
          </CardTitle>
        </CardHeader>
        <h3>Haftung für Inhalte</h3>
        <hr />
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
          hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
        </p>
        <h3>Haftung für Links</h3>
        <hr />
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
        <h3> Urheberrecht</h3>
        <hr />
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardHeader>
          <CardTitle>
            <h2>Datenschutzerklärung</h2>
          </CardTitle>
        </CardHeader>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung. Die Nutzung unserer Webseite ist in der Regel
          ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-
          Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf
          freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass
          die Datenübertragung im Internet (z.B. bei der Kommunikation per
          E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
          Daten vor dem Zugriff durch Dritte ist nicht möglich
        </p>
      </CardBody>
    </Card>
  </Layout>
)
