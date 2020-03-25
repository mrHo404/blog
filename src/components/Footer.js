import React from "react"
import PROFILES from "./../data/socialContacts"
import SocialContact from "./SocialContact"
import { Link } from "gatsby"
import { GiBoatPropeller } from "react-icons/gi"

export default () => (
  <footer>
    <div className="footer-gradient">
      {PROFILES.map((PROFILE) => (
        <SocialContact key={PROFILE.id} mediaProfile={PROFILE} />
      ))}
      <p>
        © Robert Stach,{" "}
        <a
          href="https://ko-fi.com/C0C71JJTE"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chi-Tin Ho
        </a>
        , Bavarian MultiRotor
        <br />
        Alle Logos und Bilder sind Urheberrechtlich geschützt
        <br />© Niklas Solle, Pics by Niklas Solle
        <br />
        <Link to="https://ko-fi.com/C0C71JJTE" className="btn btn-kofi m-2">
          <GiBoatPropeller /> Kauf mir Props <GiBoatPropeller />
        </Link>
      </p>
    </div>
  </footer>
)
