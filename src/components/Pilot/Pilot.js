import React, { Component } from "react"
import "./Pilot.scss"
import SocialContact from "../SocialContact/SocialContact"
import { Button } from "reactstrap"
//TODO add Adelsried Badge
//TODO Update with react hooks
export default props => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <img
          src={props.profile.profilePicURL}
          alt="profile"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "15px",
            padding: "10px",
          }}
        />
        <div className={"pilot-background"}>
          <p style={{ fontWeight: "bolder", fontSize: "26px" }}>
            {props.profile.callsign}
            <span style={{ fontStyle: "italic" }}>
              {props.profile.displayRealName ? " - " + props.profile.name : ""}
            </span>
          </p>
          <p>
            Fliegt seit: {props.profile.quarterToAir}, {props.profile.yearToAir}
            <br />
            Flugstil: {props.profile.flightStyle}
            <br />
            {props.profile.multiGpURL !== "" ? (
              <a href={props.profile.multiGpURL} className="mail-to">
                {props.profile.multiGpURL}
              </a>
            ) : null}
          </p>
          <div>
            <PilotSocialLinks socialLinks={props.profile.socialLinks} />
            <Equipment equipment={props.profile.equipment} />
          </div>
        </div>
      </div>
    </div>
  )
}

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
        <Button onClick={this.toggleShowEquipment} className={"button-small"}>
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
          <p style={{ paddingLeft: 20 }}>
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
        <Button onClick={this.toggleShowEquipment} className={"button-small"}>
          Ausrüstung
        </Button>
      </div>
    ) : null
  }
}

const PilotSocialLinks = props =>
  props.socialLinks.length > 0 ? (
    <div style={{ textAlign: "center" }}>
      {props.socialLinks.map(item => (
        <SocialContact key={item.id} mediaProfile={item} />
      ))}
    </div>
  ) : null

