export const SIDEBAR_CONTENTS = {
  SVA: [
    {
      action: {
        type: "socialContacts",
        data: [
          {
            id: "home",
            link: "https://sportverein-adelsried.de/",
          },
          {
            id: "facebook",
            link:
              "https://www.facebook.com/Drone-Racing-SV-Adelsried-2466568150286674/",
          },
        ],
      },
      content: [
        {
          title: "Nimm Kontakt zu uns auf und werde Mitglied!",
          text: [],
        },
      ],
      img: {
        imgUrl: "svaBadge",
        ref: "https://www.sportverein-adelsried.de/",
      },
    },
    {
      action: {
        type: "link",
        data: {
          label: "Michael Kneifl",
          ref: "mailto:Kneifl.Mic@web.de",
        },
      },
      content: [
        {
          title: "Abteilungsleiter:",
          text: [],
        },
      ],
      img: null,
    },
    {
      action: {
        type: "link",
        data: {
          label: "Benjamin Lorenz",
          ref: "mailto:Shaneking@gmx.de",
        },
      },
      content: [
        {
          title: "Stellvertreter:",
          text: [],
        },
      ],
      img: null,
    },
  ],
  ABOUT: [
    {
      action: {
        type: "button",
        data: {
          label: "Zum Forum",
          ref: "/forum",
        },
      },
      content: [
        {
          title: "Nimm Kontakt zu uns auf",
          text: [
            "Quatsch mit uns, wir beissen nicht.",
            "Einfach in unserem Forum eine kleine Nachricht hinterlassen und wir schalten dich so schnell wie möglich frei.",
          ],
        },
      ],
      img: {
        imgUrl: "bmrBadge",
        ref: null,
      },
    },
  ],
  IMPRINT: [
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
          text: ["+49 (0) 170 18 88 82 5"],
        },
      ],
      img: null,
    },
    {
      action: {
        type: "link",
        data: {
          label: "e-recht24.de",
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
          label: "Chi-Tin Ho",
          ref: "mailto:ho.chi-tin@gmx.de",
        },
      },
      content: [
        {
          title: "Webdesign:",
          text: [],
        },
      ],
      img: null,
    },
    {
      action: {
        type: "link",
        data: {
          label: "flaticon.com",
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
  ],
}
