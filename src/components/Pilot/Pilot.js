import React, { Component } from "react"
import "./Pilot.scss"
import SocialContact from "./../SocialContact/SocialContact"
import { Button } from "reactstrap"
import Img from "gatsby-image"
//TODO add Adelsried Badge
//TODO Update with react hooks
export default ({ profile, img, fallback }) => (
  <div className="pilot-wrapper">
    {img && img.childImageSharp ? (
      <Img fluid={img.childImageSharp.fluid} className="pilot-background profile-pic" />
    ) : (
      <Img fluid={fallback.childImageSharp.fluid} className="pilot-background profile-pic" />
    )}
    <div className="pilot-background">
      <h4>
        {profile.callsign}
        <span>{profile.displayRealName ? " - " + profile.name : ""}</span>
      </h4>
      <p>
        Fliegt seit: {profile.quarterToAir}, {profile.yearToAir}
        <br />
        Flugstil: {profile.flightStyle}
        <br />
        {profile.multiGpURL !== "" ? (
          <a
            href={profile.multiGpURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            MultiGP Profil
          </a>
        ) : null}
      </p>
      <Equipment equipment={profile.equipment} />
      <PilotSocialLinks socialLinks={profile.socialLinks} />
    </div>
  </div>
)

class Equipment extends Component {
  state = {
    showEquipment: false,
    initLoad: true,
  }

  toggleShowEquipment = () => {
    this.setState({
      showEquipment: !this.state.showEquipment,
      initLoad: false,
    })
  }

  render() {
    const { equipment } = this.props
    return this.state.showEquipment ? (
      <div className={"text-expand-down"}>
        <Button
          onClick={this.toggleShowEquipment}
          className="btn btn-bmr ml-3 mt-4 mb-2"
        >
          Ausrüstung
        </Button>
        <div className={"text-fade-in"}>
          <p>
            Brille: {equipment.goggles}
            <br /> Fernsteuerung: {equipment.radio}
            <br /> Funkprotokoll: {equipment.controlLink}
          </p>
          <h4>
            Copter:{" "}
            {equipment.raceKwad.names !== "" ? equipment.raceKwad.names : null}
          </h4>
          <p>
            Rahmen: {equipment.raceKwad.frame}
            <br />
            Motoren: {equipment.raceKwad.motors}
            <br />
            ESCs: {equipment.raceKwad.escs}
            <br />
            Flug-Controller: {equipment.raceKwad.fc}
            <br />
            Empfänger: {equipment.raceKwad.rx}
            <br />
            Kamera: {equipment.raceKwad.cam}
            <br />
            Videosender: {equipment.raceKwad.vtx}
            <br />
            Propeller: {equipment.raceKwad.props}
            <br />
            Antenne: {equipment.raceKwad.antenna}
            <br />
            Akku: {equipment.raceKwad.lipo}
            <br />
            Abfluggewicht mit Akku: {equipment.raceKwad.auw}
          </p>
        </div>
      </div>
    ) : equipment.statedEquipment ? (
      <div className={this.state.initLoad ? null : "text-expand-up"}>
        <Button
          onClick={this.toggleShowEquipment}
          className="btn btn-bmr ml-3 mt-4 mb-2"
        >
          Ausrüstung
        </Button>
      </div>
    ) : null
  }
}

const PilotSocialLinks = props =>
  props.socialLinks.length > 0 ? (
    <div>
      {props.socialLinks.map(item => (
        <SocialContact key={item.id} mediaProfile={item} />
      ))}
    </div>
  ) : null
