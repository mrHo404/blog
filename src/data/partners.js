import fpvCopter from "./../assets/partners/FPV-Copter-Shop-FPVCopter-Racer-Shop.jpg"
import aircrashers from "../assets/partners/csm_AirCrasherLogo_big_beb2f4b411.png"
import multiGP from "./../assets/partners/multigp-logo-vertical-light-backgrounds-300x300.png"
import svaBadge from "./../assets/logos/sva_logo.png"
import { PARTNER_TYPES_ENUM } from "./enums";

const PARTNERS = [
  {
    title: "FPVCopter",
    link: "http://www.fpvcopter.de/",
    type: PARTNER_TYPES_ENUM.SHOP,
    img: fpvCopter,
  },
  {
    title: "Aircrasher",
    link: "https://www.aircrasher.de/home/",
    type: PARTNER_TYPES_ENUM.LEAGUE,
    img: aircrashers,
  },
  {
    title: "MultiGP",
    link: "https://www.multigp.com/",
    type: PARTNER_TYPES_ENUM.LEAGUE,
    img: multiGP,
  },
  {
    title: "SV. Adelsried",
    link: "https://www.multigp.com/",
    type: PARTNER_TYPES_ENUM.CLUB,
    img: svaBadge,
  },
]

export default PARTNERS
