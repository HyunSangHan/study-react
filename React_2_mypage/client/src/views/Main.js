import React, { Component } from "react"
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

//import Typing from 'react-typing-animation';

configureAnchors({ offset: -140, scrollDuration: 1000 })

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      devicetype: null,
      backgroundSrc: null
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

  componentDidMount() {
    this.makeResponsiveBackground()
    window.addEventListener("resize", () => {
      this.makeResponsiveBackground()
    })
  }

  render() {
    const { devicetype, backgroundSrc } = this.state
    return (
      <>
        <Header />
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
                  {/*<Typing loop>*/}
                  {/*<span className={"left"}>This span will get typed, then erased.</span>*/}
                  {/*<Typing.Backspace count={10} />*/}
                  {/*with ease.*/}
                  {/*</Typing>*/}
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
            <About bgColorGrey={false} />
            <Gallery bgColorGrey={true} />
            <Timeline bgColorGrey={false} />
            <SkillSet bgColorGrey={true} />
            <Products bgColorGrey={false} />
            <Contribution bgColorGrey={true} />
            <Contact bgColorGrey={false} />
          </div>
        </div>
        <Footer bgColorGrey={true} />
      </>
    )
  }
}

export default Main
