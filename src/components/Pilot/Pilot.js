import React, { Component } from "react"
import "./Pilot.scss"
import SocialContact from "../SocialContact/SocialContact"
import { Button } from "reactstrap"
//TODO add Adelsried Badge
//TODO Update with react hooks
export default props => (
  <pilot className="pilot-wrapper">
    <img src={props.profile.profilePicURL} alt="profile" />
    <div className={"pilot-background"}>
      <h4>
        {props.profile.callsign}
        <span>
          {props.profile.displayRealName ? " - " + props.profile.name : ""}
        </span>
      </h4>
      <p>
        Fliegt seit: {props.profile.quarterToAir}, {props.profile.yearToAir}
        <br />
        Flugstil: {props.profile.flightStyle}
        <br />
        {props.profile.multiGpURL !== "" ? (
          <a href={props.profile.multiGpURL}>MultiGP Profil</a>
        ) : null}
      </p>
      <PilotSocialLinks socialLinks={props.profile.socialLinks} />
      <Equipment equipment={props.profile.equipment} />
    </div>
  </pilot>
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
    return this.state.showEquipment ? (
      <div className={"text-expand-down"}>
        <Button
          onClick={this.toggleShowEquipment}
          className="btn ml-3 mt-4 mb-2"
        >
          Ausrüstung
        </Button>
        <div className={"text-fade-in"}>
          <p>
            Brille: {this.props.equipment.goggles}
            <br /> Fernsteuerung: {this.props.equipment.radio}
            <br /> Funkprotokoll: {this.props.equipment.controlLink}
          </p>
          <h4>
            Copter:{" "}
            {this.props.equipment.raceKwad.names !== ""
              ? this.props.equipment.raceKwad.names
              : null}
          </h4>
          <p>
            Rahmen: {this.props.equipment.raceKwad.frame}
            <br />
            Motoren: {this.props.equipment.raceKwad.motors}
            <br />
            ESCs: {this.props.equipment.raceKwad.escs}
            <br />
            Flug-Controller: {this.props.equipment.raceKwad.fc}
            <br />
            Empfänger: {this.props.equipment.raceKwad.rx}
            <br />
            Kamera: {this.props.equipment.raceKwad.cam}
            <br />
            Videosender: {this.props.equipment.raceKwad.vtx}
            <br />
            Propeller: {this.props.equipment.raceKwad.props}
            <br />
            Antenne: {this.props.equipment.raceKwad.antenna}
            <br />
            Akku: {this.props.equipment.raceKwad.lipo}
            <br />
            Abfluggewicht mit Akku: {this.props.equipment.raceKwad.auw}
          </p>
        </div>
      </div>
    ) : this.props.equipment.statedEquipment ? (
      <div className={this.state.initLoad ? null : "text-expand-up"}>
        <Button
          onClick={this.toggleShowEquipment}
          className="btn ml-3 mt-4 mb-2"
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
