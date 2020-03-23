import React from "react"
import mailIconLight from "./../assets/icons/At-Light.svg"
import mailIconDark from "./../assets/icons/At-Dark.svg"
import facebookIconLight from "./../assets/icons/Facebook-Light.svg"
import facebookIconDark from "./../assets/icons/Facebook-Dark.svg"
import houseIconLight from "./../assets/icons/House-Light.svg"
import houseIconDark from "./../assets/icons/House-Dark.svg"
import instagramIconLight from "./../assets/icons/Instagram-Light.svg"
import instagramIconDark from "./../assets/icons/Instagram-Dark.svg"
import snapchatIconLight from "./../assets/icons/Snapchat-Light.svg"
import snapchatIconDark from "./../assets/icons/Snapchat-Dark.svg"
import twitterIconLight from "./../assets/icons/Twitter-Light.svg"
import twitterIconDark from "./../assets/icons/Twitter-Dark.svg"
import youtubeIconLight from "./../assets/icons/Youtube-Light.svg"
import youtubeIconDark from "./../assets/icons/Youtube-Dark.svg"

function getIcon(id) {
  switch (id) {
    case "mail":
      return { light: mailIconLight, dark: mailIconDark }
    case "facebook":
      return { light: facebookIconLight, dark: facebookIconDark }
    case "home":
      return { light: houseIconLight, dark: houseIconDark }
    case "instagram":
      return { light: instagramIconLight, dark: instagramIconDark }
    case "snapchat":
      return { light: snapchatIconLight, dark: snapchatIconDark }
    case "twitter":
      return { light: twitterIconLight, dark: twitterIconDark }
    case "youtube":
      return { light: youtubeIconLight, dark: youtubeIconDark }
    default:
      return null
  }
}

export default props => {
  const { id, link } = props.mediaProfile
  const icons = getIcon(id)

  return link !== "" ? (
    <div className="social-contact-icon">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={icons.light} alt="socialIconLight"/>
        <img src={icons.dark} alt="socialIconDark" className="top" />
      </a>
    </div>
  ) : null
}
