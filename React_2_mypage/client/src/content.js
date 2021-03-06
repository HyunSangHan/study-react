import logoReact from "./images/skillset/React.png"
import logoDjango from "./images/skillset/Django.png"
import logoMongoDB from "./images/skillset/mongodb.png"
import logoNode from "./images/skillset/Node.png"
import logoJQuery from "./images/skillset/JQuery.png"
import logoSpring from "./images/skillset/spring.png"
import iconGithub from "./images/icons/github.png"
import iconLinkedIn from "./images/icons/linkedin.png"
import iconFacebook from "./images/icons/facebook.png"
import iconInsta from "./images/icons/instagram.png"
import galleryImgSrc1 from "./images/gallery/2hifive.jpg"
import galleryImgSrc2 from "./images/gallery/3positano.jpg"
import galleryImgSrc3 from "./images/gallery/6airplane.jpg"
import galleryImgSrc4 from "./images/gallery/5soba.jpg"
import galleryImgSrc5 from "./images/gallery/jongro.jpg"
import galleryImgSrc6 from "./images/gallery/1niko.jpg"
import galleryImgSrc7 from "./images/gallery/spain.jpg"
import galleryImgSrc8 from "./images/gallery/dq.jpg"
import galleryImgSrc9 from "./images/gallery/5young.jpg"
import prodThumbnail1 from "./images/products/browser-sync.png"
import prodThumbnail2 from "./images/products/corona.png"
import prodThumbnail3 from "./images/products/aorb.png"
import prodThumbnail4 from "./images/products/mypage.png"
import prodThumbnail5 from "./images/products/meeting-time.png"
import prodThumbnail6 from "./images/products/finedust.png"

export const menuNames = [
  "about",
  "gallery",
  "timeline",
  "skillSet",
  "toyProjects",
  "contributions",
  "contact",
  "blog"
]

export const baseInfo = {
  name: "hyunsang han",
  job: "Software Engineer",
  introduceMyself:
    "I am a software engineer, who\n• Likes new learning and has no fear of challenges.\n• Enjoys simplifying and organizing complex problems.\n• Can consider not only technology, but also business and user experience of the product.\n• Has multiple perspectives, so collaborates and communicates smoothly with managers, designers, and engineers.",
  snsLinks: [
    { name: "github", logo: iconGithub, uri: "https://github.com/HyunSangHan" },
    {
      name: "linked-in",
      logo: iconLinkedIn,
      uri: "https://www.linkedin.com/in/%ED%98%84%EC%83%81-%ED%95%9C-971604178"
    },
    {
      name: "facebook",
      logo: iconFacebook,
      uri: "https://www.facebook.com/gustkd3"
    },
    {
      name: "instagram",
      logo: iconInsta,
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

export const mapInfos = [
  {
    place: "pisa",
    imgSrc: galleryImgSrc1,
    zoomCustom: 14,
    initialCenter: { lat: 43.722984, lng: 10.396603 }
  },
  {
    place: "positano",
    imgSrc: galleryImgSrc2,
    zoomCustom: 14,
    initialCenter: { lat: 40.62753, lng: 14.48815 }
  },
  {
    place: "pargue",
    imgSrc: galleryImgSrc3,
    zoomCustom: 8,
    initialCenter: { lat: 49.716251, lng: 14.094804 }
  },
  {
    place: "tokyo",
    imgSrc: galleryImgSrc4,
    zoomCustom: 10,
    initialCenter: { lat: 35.660067, lng: 139.701524 }
  },
  {
    place: "jongro",
    imgSrc: galleryImgSrc5,
    zoomCustom: 16,
    initialCenter: { lat: 37.573391, lng: 126.98975 }
  },
  {
    place: "gangnam",
    imgSrc: galleryImgSrc6,
    zoomCustom: 14,
    initialCenter: { lat: 37.501183, lng: 127.025603 }
  },
  {
    place: "barcelona",
    imgSrc: galleryImgSrc7,
    zoomCustom: 14,
    initialCenter: { lat: 41.234305, lng: 1.808081 }
  },
  {
    place: "coex",
    imgSrc: galleryImgSrc8,
    zoomCustom: 17,
    initialCenter: { lat: 37.508696, lng: 127.061004 }
  },
  {
    place: "studio",
    imgSrc: galleryImgSrc9,
    zoomCustom: null,
    initialCenter: null
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
        subTitle: "Shopping Search Dev.(JUN 2020 - PRESENT)",
        description: "Web development for @Naver Shopping@",
        bullets: [
          "Develop a web frontend using React.js and Node.js",
          "Manage and serve data using MongoDB and Redis",
          "Develop API using Spring MVC and Node.js",
          "Build batch systems using Spring Batch and Jenkins",
          "Create administration tools so that operators can directly control the service"
        ],
        refUri: "https://shopping.naver.com"
      },
      {
        subTitle: "Shopping Search Service(APR 2018 - JUN 2020)",
        description: "Product management for @Naver Shopping@",
        bullets: [
          "Worked on brand shopping search project",
          "Launched a new shopping search advertisement for big brands only.",
          "The click rate has increased more than doubles compared to existing ads.",
          "Established strategies and managed KPIs for Naver Shopping's search business."
        ],
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
        description: "Bachelor of Engineering\nCum laude (GPA: 3.61/4.3)"
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
  { name: "Node", logo: logoNode, className: "skill-node" },
  { name: "MongoDB", logo: logoMongoDB, className: "skill-mongodb" },
  { name: "Spring Framework", logo: logoSpring, className: "skill-spring" },
  { name: "jQuery", logo: logoJQuery, className: "skill-jquery" },
  { name: "Django", logo: logoDjango, className: "skill-django" }
]

export const productInfos = [
  {
    thumbnail: prodThumbnail1,
    name: "Browser Sync",
    period: "FEB 2020",
    skill: "TypeScript / Browser API",
    description:
      "Whale Browser Extension to view the UI of mobile and pc on one screen",
    outlinks: [
      {
        type: "Store",
        uri:
          "https://store.whale.naver.com/detail/oebpjpinlkhmpegobkdfgojbngjhjgbg?hl=kos"
      },
      { type: "Github", uri: "https://github.com/HyunSangHan/WhaleBrowserSync" }
    ]
  },
  {
    thumbnail: prodThumbnail2,
    name: "MBC Corona 19",
    period: "FEB 2020",
    skill: "Django(DRF) / MySQL / Javascript",
    description:
      "Alerts for real-time information about Corona 19. Powered by MBC. Service ends on April 20.",
    outlinks: [
      { type: "Link", uri: null },
      {
        type: "Github",
        uri: "https://github.com/HyunSangHan/MBC-corona19-archive"
      }
    ]
  },
  {
    thumbnail: prodThumbnail3,
    name: "A or B",
    period: "APR - AUG 2019",
    skill: "Django / jQuery / Javascript",
    description:
      "User-generated content platform for alternative voting as 1-person side project with Django",
    outlinks: [
      { type: "Link", uri: null },
      {
        type: "Github",
        uri: "https://github.com/HyunSangHan/a-or-b-ugc"
      }
    ]
  },
  {
    thumbnail: prodThumbnail4,
    name: "this.state",
    period: "JAN - FEB 2019",
    skill: "React / Google Maps API",
    description:
      "My own profile page for introducing myself especially related to web development. designed and developed by myself.",
    outlinks: [
      { type: "Link", uri: "/" },
      {
        type: "Github",
        uri:
          "https://github.com/HyunSangHan/study-react/tree/master/React_2_mypage"
      }
    ]
  },
  {
    thumbnail: prodThumbnail5,
    name: "Meeting Time",
    period: "JUN 2019 - JUN 2020",
    skill: "React / Redux / Redux-thunk / Django(DRF)",
    description:
      "Meeting matching service on a first-come-first-served basis only for workers.",
    outlinks: [
      { type: "Demo", uri: "http://testbyhs.dothome.co.kr" },
      { type: "Github", uri: "https://github.com/HyunSangHan/MeetingTime" }
    ]
  },
  {
    thumbnail: prodThumbnail6,
    name: "Fine dust Bot",
    period: "AUG 2018",
    skill: "Ruby for Sinatra / KMA API",
    description:
      "Chatbot about fine dust in Kakaotalk using openAPI of Korea Meteorological Administration.",
    outlinks: [{ type: "Link", uri: null }]
  }
]

export const contributionInfos = [
  {
    repositoryName: "MochaJS",
    contributionSets: [
      {
        title: "Drop mkdirp and replace it with fs.mkdirSync",
        uri: "https://github.com/mochajs/mocha/pull/4200",
        prStatus: "Merged",
        reviewStatus: "",
        releaseStatus: "Released",
        semver: "v8.0.0"
      },
      {
        title:
          "Add a description for installing GraphicsMagick or ImageMagick in README",
        uri: "https://github.com/mochajs/mocha/pull/4045",
        prStatus: "Merged",
        reviewStatus: "",
        releaseStatus: "Released",
        semver: "v7.0.0"
      },
      {
        title: "Fix warning for running docs by Eleventy",
        uri: "https://github.com/mochajs/mocha/pull/4066",
        prStatus: "Merged",
        reviewStatus: "",
        releaseStatus: "Released",
        semver: "v7.0.0"
      },
      {
        title: "Add async setup with --delay",
        uri: "https://github.com/mochajs/mocha-examples/pull/27",
        prStatus: "Merged",
        reviewStatus: "",
        releaseStatus: ""
      },
      {
        title: "Use light color scheme on Mocha API document",
        uri: "https://github.com/mochajs/mocha-docdash/pull/3",
        prStatus: "Merged",
        reviewStatus: "",
        releaseStatus: "Released",
        semver: "v2.1.3"
      },
      {
        title: "Adjust white space for view on mobile",
        uri: "https://github.com/mochajs/mocha-docdash/pull/4",
        prStatus: "Merged",
        reviewStatus: "",
        releaseStatus: "Released",
        semver: "v2.1.3"
      },
      {
        title: "Add script to check unit test coverage",
        uri: "https://github.com/mochajs/mocha/pull/4076",
        prStatus: "Open",
        reviewStatus: "Approved",
        releaseStatus: ""
      },
      {
        title: "Fix docs.watch for the API docs",
        uri: "https://github.com/mochajs/mocha/pull/4061",
        prStatus: "Closed",
        reviewStatus: "Approved",
        releaseStatus: ""
      }
    ]
  },
  {
    repositoryName: "ReactJS(KOR)",
    contributionSets: [
      {
        title: "Change incorrect sentence on hook-intro",
        uri: "https://github.com/reactjs/ko.reactjs.org/pull/188",
        prStatus: "Merged",
        reviewStatus: "",
        releaseStatus: ""
      }
    ]
  },
  {
    repositoryName: "Javascript-tutorial(KOR)",
    contributionSets: [
      {
        title: "Translate assignment about 'Method and this'",
        uri:
          "https://github.com/javascript-tutorial/ko.javascript.info/pull/464",
        prStatus: "Merged",
        reviewStatus: "",
        releaseStatus: ""
      },
      {
        title: "Fix awkward UI and sentence about 'Arrow function'",
        uri:
          "https://github.com/javascript-tutorial/ko.javascript.info/pull/467",
        prStatus: "Merged",
        reviewStatus: "",
        releaseStatus: ""
      }
    ]
  },
  {
    repositoryName: "TypeScript-website",
    contributionSets: [
      {
        title: "Suggest an alternative link for Starter Kits",
        uri: "https://github.com/microsoft/TypeScript-Website/pull/226",
        prStatus: "Merged",
        reviewStatus: "",
        releaseStatus: ""
      }
    ]
  },
  {
    repositoryName: "MomentJS",
    contributionSets: [
      {
        title: "Support ss for locale/en-li",
        uri: "https://github.com/moment/moment/pull/5399",
        prStatus: "Merged",
        reviewStatus: "",
        releaseStatus: "Released",
        semver: "v2.25.0"
      },
      {
        title: "Fix the duration test message",
        uri: "https://github.com/moment/moment/pull/5400",
        prStatus: "Merged",
        reviewStatus: "",
        releaseStatus: "Released",
        semver: "v2.25.0"
      }
    ]
  }
]
