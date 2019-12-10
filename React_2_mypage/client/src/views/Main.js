import React, { Component } from "react"
import ReactDOM from "react-dom"
import Header from "./Header.js"
import About from "./About"
import Gallery from "./Gallery"
import Timeline from "../views/Timeline.js"
import SkillSet from "./SkillSet"
import Products from "./Products.js"
import Contribution from "./Contribution.js"
import Contact from "./Contact.js"
import Footer from "./Footer.js"
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

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      devicetype: null,
      backgroundSrc: null,
      scrollPosition: null
    }
  }

  componentDidMount() {
    this.makeResponsiveBackground()
    window.addEventListener("scroll", this.onScroll)
    window.addEventListener("resize", () => {
      this.makeResponsiveBackground()
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll)
    window.removeEventListener("resize", () => {
      this.makeResponsiveBackground()
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !this.state.backgroundSrc ||
      this.state.scrollPosition !== nextState.scrollPosition
    )
  }

  onScroll = e => {
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
    console.log(this.state.scrollPosition)
    const { devicetype, backgroundSrc, scrollPosition } = this.state
    return (
      <>
        <Header scrollPosition={scrollPosition} />
        <div className="body-common z-0">
          <div className="body-under center">
            <img
              className="fix"
              src={backgroundSrc}
              alt="my_photo"
              width="100%"
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
                  ANG through this site. I will update my status through&nbsp;
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
            <div ref={"about"}></div>
            <About bgColorGrey={false} />
            <div ref={"gallery"}></div>
            <Gallery bgColorGrey={true} />
            <div ref={"timeline"}></div>
            <Timeline bgColorGrey={false} />
            <div ref={"skillset"}></div>
            <SkillSet bgColorGrey={true} />
            <div ref={"products"}></div>
            <Products bgColorGrey={false} />
            <div ref={"contribution"}></div>
            <Contribution bgColorGrey={true} />
            <div ref={"contact"}></div>
            <Contact bgColorGrey={false} />
          </div>
        </div>
        <Footer bgColorGrey={true} />
      </>
    )
  }
}

export default Main
