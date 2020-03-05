import React from "react"
import PROFILES from "./../data/socialContacts";
import SocialContact from "./../components/SocialContact/SocialContact";


const Footer = () => (
  <React.Fragment>
    <footer>
      <div className='footer-gradient'>
        {PROFILES.map((PROFILE) => (
          <SocialContact key={PROFILE.id} mediaProfile={PROFILE}/>
        ))}
        <p>
          © Robert Stach, Bavarian Multirotorsquad
          <br/>Alle Logos und Bilder sind Urheberrechtlich geschützt
          <br/>Design und Umsetzung von Chi-Tin Ho
        </p>
      </div>
    </footer>
  </React.Fragment>
)

export default Footer
