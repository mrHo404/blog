import React from "react"
import PROFILES from "./../data/socialContacts";
import SocialContact from "./SocialContact";


export default () => (
    <footer>
      <div className='footer-gradient'>
        {PROFILES.map((PROFILE) => (
          <SocialContact key={PROFILE.id} mediaProfile={PROFILE}/>
        ))}
        <p>
          © Robert Stach, Chi-Tin Ho, Bavarian MultiRotor
          <br/>Alle Logos und Bilder sind Urheberrechtlich geschützt
          <br/>© Niklas Solle, Pics by Niklas Solle
        </p>
      </div>
    </footer>
)
