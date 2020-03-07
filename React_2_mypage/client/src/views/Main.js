import React, { Component, Fragment } from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import About from "./About"
import Gallery from "./Gallery"
import Timeline from "../views/Timeline"
import SkillSet from "./SkillSet"
import Products from "./Products"
import Contribution from "./Contribution"
import Contact from "./Contact"
import Footer from "./Footer"
import VisitBlog from "./VisitBlog"
import "../App.css"
import "../css/Main.css"
import "../css/Timeline.css"
import { configureAnchors } from "react-scrollable-anchor"
import { Grid } from "react-bootstrap"
import photoBackgroundLarge from "../images/sea.jpg"
import photoBackgroundMedium from "../images/sea1.jpg"
import photoBackgroundSmall from "../images/sea2.jpg"
import photoGate from "../images/hsforgate.png"
import icArrowDown from "../images/arrow-down.png"

configureAnchors({ offset: -140, scrollDuration: 1000 })

const renders = [
  { refName: "about", component: About },
  { refName: "gallery", component: Gallery },
  { refName: "timeline", component: Timeline },
  { refName: "skillset", component: SkillSet },
  { refName: "products", component: Products },
  { refName: "contribution", component: Contribution },
  { refName: "contact", component: Contact }
]

const agent = navigator.userAgent.toLowerCase()

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      devicetype: null,
      backgroundSrc: null,
      scrollPosition: null,
      isLastScroll: false
    }
  }

  componentDidMount() {
    this.makeResponsiveBackground()
    window.addEventListener("scroll", this.onScroll)
    window.addEventListener("resize", () => {
      this.makeResponsiveBackground()
    })

    if (
      (navigator.appName === "Netscape" && agent.indexOf("trident") !== -1) ||
      agent.indexOf("msie") !== -1
    ) {
      this.isExplorer = true
    } else {
      this.isExplorer = false
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.isLastScroll !== prevState.isLastScroll) {
  //     this.foo();
  //   }
  // }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll)
    window.removeEventListener("resize", () => {
      this.makeResponsiveBackground()
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !this.state.backgroundSrc ||
      this.state.scrollPosition !== nextState.scrollPosition ||
      this.state.backgroundSrc !== nextState.backgroundSrc ||
      this.state.isLastScroll !== nextState.isLastScroll
    )
  }

  onScroll = e => {
    if (
      document.documentElement.offsetHeight ===
      window.pageYOffset + window.innerHeight
    ) {
      this.setState({
        isLastScroll: true
      })
    }
    const documentMarginTop = 60
    const elementsTop = {
      aboutTop:
        ReactDOM.findDOMNode(this.refs.about).getBoundingClientRect().top -
        documentMarginTop,
      galleryTop:
        ReactDOM.findDOMNode(this.refs.gallery).getBoundingClientRect().top -
        documentMarginTop,
      timelineTop:
        ReactDOM.findDOMNode(this.refs.timeline).getBoundingClientRect().top -
        documentMarginTop,
      skillSetTop:
        ReactDOM.findDOMNode(this.refs.skillset).getBoundingClientRect().top -
        documentMarginTop,
      productsTop:
        ReactDOM.findDOMNode(this.refs.products).getBoundingClientRect().top -
        documentMarginTop,
      contributionTop:
        ReactDOM.findDOMNode(this.refs.contribution).getBoundingClientRect()
          .top - documentMarginTop,
      contactTop:
        ReactDOM.findDOMNode(this.refs.contact).getBoundingClientRect().top -
        documentMarginTop
    }

    if (elementsTop.aboutTop > 0) {
      this.setState({ scrollPosition: null })
    } else if (elementsTop.galleryTop > 0) {
      this.setState({ scrollPosition: "about" })
    } else if (elementsTop.timelineTop > 0) {
      this.setState({ scrollPosition: "gallery" })
    } else if (elementsTop.skillSetTop > 0) {
      this.setState({ scrollPosition: "timeline" })
    } else if (elementsTop.productsTop > 0) {
      this.setState({ scrollPosition: "skill-set" })
    } else if (elementsTop.contributionTop > 0) {
      this.setState({ scrollPosition: "products" })
    } else if (elementsTop.contactTop > 100) {
      this.setState({ scrollPosition: "contributions" })
    } else {
      this.setState({ scrollPosition: "contact" })
    }
  }

  makeResponsiveBackground = () => {
    if (window.innerWidth <= 767) {
      this.setState({
        devicetype: "mobile",
        backgroundSrc: photoBackgroundSmall
      })
    } else if (window.innerWidth <= 991) {
      this.setState({
        devicetype: "tablet",
        backgroundSrc: photoBackgroundMedium
      })
    } else {
      this.setState({
        devicetype: "desktop",
        backgroundSrc: photoBackgroundLarge
      })
    }
  }

  render() {
    const {
      devicetype,
      backgroundSrc,
      scrollPosition,
      isLastScroll
    } = this.state
    return (
      <>
        {this.isExplorer ? (
          <div>Browser not supported!</div>
        ) : (
          <>
            <Header scrollPosition={scrollPosition} devicetype={devicetype} />
            <div className="body-common z-0">
              <div className="body-under center">
                <img
                  className="fix"
                  src={backgroundSrc}
                  alt="my_photo"
                  style={{ width: "100%", minWidth: "100%", minHeight: "100%" }}
                  devicetype={devicetype}
                />
                <div className="body-under-black fix" />
              </div>
              <div className="gate center">
                <div>
                  <Grid>
                    <img className="gate-img" src={photoGate} alt="explain" />
                    <div className="gate-txt font-sub font-white">
                      You can access&nbsp;
                      <i>
                        this.state(.about, .gallery, .timeline, .skill-set,
                        .products, .contributions)&nbsp;
                      </i>
                      of&nbsp;
                      <font color="#59d1fb">
                        <b>H</b>
                      </font>
                      YUN
                      <font color="#59d1fb">
                        <b>S</b>
                      </font>
                      ANG through this site. I will update my status
                      through&nbsp;
                      <i>this.setState </i>
                      whenever there is some change.
                    </div>
                  </Grid>
                </div>
              </div>
              <a href="#about">
                <div className="arrow center">
                  <img src={icArrowDown} alt="arrow-down" />
                </div>
              </a>
              <div className="body-on z-2">
                {renders.map((render, idx) => {
                  const Component = render.component
                  return (
                    <Fragment key={idx}>
                      <div ref={render.refName}></div>
                      <Component bgColorGrey={idx % 2 !== 0} />
                    </Fragment>
                  )
                })}
              </div>
            </div>
            <VisitBlog
              id="visit-blog"
              className={isLastScroll ? "ad-on" : "ad-off"}
            />
            <Footer ref="last" bgColorGrey={renders.length % 2 !== 0} />
          </>
        )}
      </>
    )
  }
}

export default Main
