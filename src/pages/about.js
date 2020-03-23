import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardBody, CardTitle, CardHeader } from "reactstrap"
import { SIDEBAR_CONTENTS } from "./../data/sidebarContents"

export default () => (
  <Layout pageTitle="Wir sind BMR!" sidebarContent={SIDEBAR_CONTENTS.ABOUT}>
    <SEO title="Wir sind BMR!" />
    <Card>
      <CardBody>
        <CardHeader>
          <CardTitle className="mb-3">
            <h2>Sei auch Du dabei und flieg mit uns!</h2>
          </CardTitle>
        </CardHeader>
        <p>
          Wir sind eine wachsende Gemeinde von FPV Piloten aus dem Raum München
          die sich im FPV-Racing-Forum.de kennengelernt haben. Seit 2016 gab es
          zahlreiche gemeinsame Flugtreffen an vielen wunderbaren Plätzen in und
          um München. Seit den ersten Treffen ist diese Gruppe stetig weiter
          gewachsen. So sind wir sind bisher circa 35 Mann die via dieser
          website und über das FPV-Racing- Forum vernetzt sind und fast
          wöchentlich werden es mehr. Geflogen werden bisher Racequads aller
          Klassen, aber auch andere Copter sind gern gesehen. Ob Freestyle oder
          Racing, hier ist für alle eine Plattform geboten.
        </p>
        <h3>Jeder ist Willkommen!</h3>
        <hr />
        <p>
          Ob jung, alt, Anfänger, Fortgeschrittener, Profi, Freestyler oder
          Racer. Über neue Gesichter auf Flugtreffen freuen wir uns immer. Wenn
          ihr also lust habt mit netten Leuten aus der Region zu fliegen und zu
          fachsimpeln und ihr Kontakt mit uns aufnehmen wollt, tut dies am
          besten über das FPV-Racing-forum.de. Oder hier über unsere
          Konversation. Dort kannst du du einfach eine Nachricht hinterlassen
          und wir schalten dich frei.
        </p>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardHeader>
          <CardTitle className="mb-3">
            <h2>
              Ein Paar wichtige Regeln gibt es allerdings bevor es losgehen
              kann.
            </h2>
          </CardTitle>
        </CardHeader>
        <h4>
          Bevor ihr im Freien fliegen geht, oder zu einem Flugtreffen mitkommen
          wollt sind ein paar sehr wichtige Punkte zu erfüllen:
        </h4>
        <ul className="bullet-list">
          <li>
            <span>Die Drohnenverordnung</span> und die damit verbundene
            Gesetzgebung muss eingehalten werden. Bitte informiert euch oder
            fragt bei uns und wir leiten alle offiziellen Informationen gerne
            weiter.
          </li>
          <li>
            <span>Eine Haftpflichtversicherung.</span> Unfälle und Sachschäden
            werden durch umsichtiges Fliegen vermieden allerdings ist eine
            Haftpflichtversicherung wichtig und unumgänglich.
          </li>
          <li>
            <span>Informiert euch ob ihr fliegen dürft. </span>
            Flugtreffen finden nur an Orten statt an denen wir legal fliegen
            dürfen und
            <span> niemanden damit stören.</span> Failsafe und Killswitch, der
            Kopter muss in jedem Notfall automatisch aus der luft fallen oder
            abgeschaltet werden können. Lieber einmal mehr basten als zu großes
            Risiko eingehen.
          </li>
        </ul>
        <h3>Was erwartet mich?</h3>
        <p>
          Erstmal viel Spass, coole Flugtreffen und nette Leute. Wir fliegen
          relativ häufig in immer wechselnder zusammenstellung. Bei guten Wetter
          findet man eigendlich immer wen um gemeinsam zu fliegen und auch in
          größeren Gruppen geht häufig was zusammen.
        </p>
        <h3>Alle Bayer unter einem Dach?</h3>
        <p>
          Das ist vielleicht ein gewagtes Ziel aber zumindest möchten wir hier
          mit diesem Portal einen Ort schaffen an dem alle Quad Piloten
          miteinander kommunizieren können. Unabhängig davon ob sie Facebook
          nutzen oder WhatsApp oder auch vielleicht gar kein Smartphone haben.
          Deswegen sind alle Münchner herzlich eingeladen sich hier in der
          Konversation zu registrieren. herzlich eingeladen sich hier in der
          Konversation zu registrieren.
        </p>
        <h3>Noch in eigener Sache</h3>
        <p>
          Die Freiheit des Einen endet dort wo die Freiheit des Anderen
          eingeschränkt wird. Wir wollen ein positives Bild in der
          Öffentlichkeit abgeben, für alle die dieses Hobby betreiben. Auch die
          Sicherheit spielt hier eine sehr große Rolle:
        </p>
        <ul className="bullet-list">
          <li>
            <span>Unwissen schützt nicht vor Schaden! </span>
            Flugkenntnisse und technisches know-how sind wichtig. Es ist sehr
            ratsam seine Komponenten zu kennen und die Grundzüge der Fliegerei
            zu verstehen. Die beste Empfehlung ist es immernoch mit
            Wohnzimmerkoptern und Simulatoren zu üben.
          </li>
          <li>
            <span>Stay Safe!</span> Passt eure und unsere Gesundheit auf. Fliegt
            nicht zu nah in die Zone in der wir aufbauen, kündigt das aktivieren
            eines Kopters immer erst an. Bevor wir fliegen werden frequenzen
            verteilt und festgelegt. Es wird nur gearmt wenn dies möglich ist
            ohne den anderen aus der luft zu holen order zu verletzen. Wenn ihr
            euch unsicher seit schaltet ab und wartet. Wenn ihr euch nicht
            sicher seit ob es jemanden stört wenn ihr an einem Erlaubten Ort
            fliegt, redet mit den leuten. Seit freundlich und umgänglich denn es
            ist mehr als nur verständlich das dieses hobby positive wie auch
            negative Aufmerksamkeit auf sich zieht. Lieber wechselt man schnell
            nochmal den spot als die Mitmenschen zu verärgern denn mit
            freundlichem und verständnissvollem auftreten können viele leute
            positiv von unserer Community beeindruckt werden. Also lasst sie
            lieber einmal mehr durch die brille schauen, vielleicht sind
            darunter die nechsten racer zu finden.
          </li>
        </ul>
      </CardBody>
    </Card>
  </Layout>
)
