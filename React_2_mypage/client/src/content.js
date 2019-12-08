import logoReact from "./images/React.png"
import logoDjango from "./images/Django.png"
import logoSinatra from "./images/Sinatra.png"
import logoGithub from "./images/github.png"
import logoLinkedIn from "./images/linkedin.png"
import logoFacebook from "./images/facebook.png"
import logoInsta from "./images/instagram.png"
import galleryImgSrc1 from "./images/2hifive.jpg"
import galleryImgSrc2 from "./images/3positano.jpg"
import galleryImgSrc3 from "./images/6airplane.jpg"
import galleryImgSrc4 from "./images/5soba.jpg"
import galleryImgSrc5 from "./images/jongro.jpg"
import galleryImgSrc6 from "./images/1niko.jpg"
import galleryImgSrc7 from "./images/spain.jpg"
import galleryImgSrc8 from "./images/dq.jpg"
import galleryImgSrc9 from "./images/5young.jpg"
import prodThumbnail1 from "./images/mypage.png"
import prodThumbnail2 from "./images/calculator.png"
import prodThumbnail3 from "./images/meeting.png"
import prodThumbnail4 from "./images/fish.png"
import prodThumbnail5 from "./images/finedust.png"
import prodThumbnail6 from "./images/blackjack.png"

export const menuNames = [
  "about",
  "gallery",
  "timeline",
  "skill-set",
  "products",
  "contributions",
  "contact"
]

export const baseInfo = {
  name: "hyunsang han",
  job: "Developer",
  introduceMyself:
    "I always try to move forward with new learning. I work as a product manager, but I take my own personal time to develop toy projects and to contribute to open source projects. If you have a good idea for a new try, feel free to contact me anytime.",
  snsLinks: [
    { name: "github", logo: logoGithub, uri: "https://github.com/HyunSangHan" },
    {
      name: "linked-in",
      logo: logoLinkedIn,
      uri: "https://www.linkedin.com/in/%ED%98%84%EC%83%81-%ED%95%9C-971604178"
    },
    {
      name: "facebook",
      logo: logoFacebook,
      uri: "https://www.facebook.com/gustkd3"
    },
    {
      name: "instagram",
      logo: logoInsta,
      uri: "https://www.instagram.com/phenom_0901"
    }
  ]
}

export const galleryInfos = [
  {
    srcs: [galleryImgSrc1, galleryImgSrc2, galleryImgSrc3],
    align: "flex-gallery-left"
  },
  {
    srcs: [galleryImgSrc4, galleryImgSrc5, galleryImgSrc6],
    align: "flex-gallery-right"
  },
  {
    srcs: [galleryImgSrc7, galleryImgSrc8, galleryImgSrc9],
    align: "flex-gallery-last"
  }
]

export const historyInfos = [
  {
    from: "MAR 2016",
    to: "PRESENT",
    link: "https://www.navercorp.com/en",
    title: "NAVER Corp.",
    details: [
      {
        subTitle: "Shopping Search (APR 2018 - PRESENT)",
        description: "Service & strategy planning for @Naver Shopping@",
        refUri: "https://shopping.naver.com"
      },
      {
        subTitle: "Service Support (MAR 2016 - MAR 2018)",
        description:
          "HR(compensation, recruiting) of Service Committee\nCEO support for Naver services"
      }
    ]
  },
  {
    from: "MAR 2014",
    to: "FEB 2016",
    link: "http://www.rokmc.mil.kr/index.do",
    title: "R.O.K. Marine Corps",
    details: [
      {
        subTitle: "2nd Infantry Division",
        description: "Platoon leader and Operation officer (First Lieutenant)"
      }
    ]
  },
  {
    from: "MAR 2010",
    to: "FEB 2014",
    link: null,
    title: "Seoul National Univ.",
    details: [
      {
        subTitle: "Rural System Engineering",
        description: "Bachelor of Engineering"
      },
      {
        subTitle: "SNU American Football Team, Green Terrors",
        description: "Tight end, Defensive end"
      },
      {
        subTitle: "101 ROTC",
        description: "Military cadet"
      },
      {
        subTitle: "@LIKELION@ (* after graduation)",
        description: "Web programming",
        refUri: "https://likelion.net/"
      }
    ]
  },
  {
    from: "MAR 1998",
    to: "FEB 2010",
    link: null,
    title: "Public education",
    details: [
      {
        subTitle: "Pungmu High School (MAR 2007 - FEB 2010)",
        description: "Student body president"
      },
      {
        subTitle: "Pungmu Middle School (MAR 2004 - FEB 2007)",
        description: null
      },
      {
        subTitle: "Pungmu Elementary School (DEC 2002 - FEB 2004)",
        description: null
      },
      {
        subTitle: "Geonji Elementary School (MAR 1998 - DEC 2002)",
        description: null
      }
    ]
  },
  {
    from: "SEP 1991",
    to: null,
    link: null,
    title: "Born in Incheon",
    details: []
  }
]

export const skillSets = [
  { name: "React", logo: logoReact, className: "skill-react" },
  { name: "Django", logo: logoDjango, className: "skill-django" },
  { name: "Ruby for Sinatra", logo: logoSinatra, className: "skill-sinatra" }
]

export const productInfos = [
  {
    thumbnail: prodThumbnail1,
    name: "this.state.",
    period: "JAN - FEB 2019",
    skill: "ReactJS",
    description:
      "My own profile page for introducing myself especially related to web development. designed and developed by myself.",
    alt: "mypage",
    outlinks: [{ type: "Link", uri: "/" }]
  },
  {
    thumbnail: prodThumbnail2,
    name: "Web Calculator",
    period: "JAN 2019",
    skill: "ReactJS",
    description:
      "Web based calculator for studying React and HTML+CSS. Optimized for mobile.",
    alt: "calculator",
    outlinks: [{ type: "Link", uri: "http://calculator.dothome.co.kr/" }]
  },
  {
    thumbnail: prodThumbnail3,
    name: "Meeting Time",
    period: "DEC 2018 - PRESENT",
    skill: "Ruby for Sinatra",
    description:
      "Meeting matching service on a first-come-first-served basis only for workers.",
    alt: "meeting-time",
    outlinks: [
      { type: "Github", uri: "https://github.com/HyunSangHan/BRGG_Meeting-App" }
    ]
  },
  {
    thumbnail: prodThumbnail4,
    name: "GoGo Fish",
    period: "SEP 2018 - PRESENT",
    skill: "Ruby for Sinatra / Fuse",
    description: "Kid's habits formation helper service.",
    alt: "gogo-fish",
    outlinks: [
      { type: "Link", uri: "https://bomin.myportfolio.com/invalid" },
      { type: "Github", uri: "https://github.com/zzokokeic/barogagi1gibateam" }
    ]
  },
  {
    thumbnail: prodThumbnail5,
    name: "Fine dust Bot ",
    period: "AUG 2018",
    skill: "Ruby for Sinatra / Kakao Chatbot / API of KMA",
    description:
      "Chatbot about fine dust in Kakaotalk using openAPI of Korea Meteorological Administration.",
    alt: "dustbot",
    outlinks: []
  },
  {
    thumbnail: prodThumbnail6,
    name: "BlackJack",
    period: "NOV - DEC 2011",
    skill: "Java",
    description: "Card game for an assignment when I was in the university.",
    alt: "blackjack",
    outlinks: [
      { type: "Github", uri: "https://github.com/HyunSangHan/BlackJack" }
    ]
  }
]

export const contributionInfos = [
  {
    repositoryName: "MochaJS",
    contributionSets: [
      {
        title:
          "Add a description for installing GraphicsMagick or ImageMagick in docs/README.md",
        uri: "https://github.com/mochajs/mocha/pull/4045",
        prStatus: "Merged",
        reviewStatus: "",
        releaseStatus: ""
      },
      {
        title: "Fix docs.watch for the API docs(#4060)",
        uri: "https://github.com/mochajs/mocha/pull/4061",
        prStatus: "Open",
        reviewStatus: "Approved",
        releaseStatus: ""
      },
      {
        title: "Change sh to bash for code block in docs/index.md",
        uri: "https://github.com/mochajs/mocha/pull/4066",
        prStatus: "Merged",
        reviewStatus: "",
        releaseStatus: ""
      },
      {
        title: "Add script to check unit test coverage",
        uri: "https://github.com/mochajs/mocha/pull/4076",
        prStatus: "Open",
        reviewStatus: "Approved",
        releaseStatus: ""
      },
      {
        title: "Use light color scheme on Mocha API document",
        uri: "https://github.com/mochajs/mocha-docdash/pull/3",
        prStatus: "Open",
        reviewStatus: "",
        releaseStatus: ""
      },
      {
        title: "Adjust white space for view on mobile",
        uri: "https://github.com/mochajs/mocha-docdash/pull/4",
        prStatus: "Open",
        reviewStatus: "",
        releaseStatus: ""
      }
    ]
  },
  {
    repositoryName: "ReactJs / ko.reactjs.org",
    contributionSets: [
      {
        title: "Change sentence on hook-intro",
        uri: "https://github.com/reactjs/ko.reactjs.org/pull/188",
        prStatus: "Merged",
        reviewStatus: "",
        releaseStatus: "Released"
      }
    ]
  }
]
