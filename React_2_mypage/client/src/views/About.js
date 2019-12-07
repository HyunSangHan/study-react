import React, { Component } from "react"
import "../App.css"
import "../css/Main.css"
import { Grid, Row, Col } from "react-bootstrap"
import ScrollableAnchor from "react-scrollable-anchor"
import photoVietnam from "../images/vietnam.jpg"
import photoGithub from "../images/github.png"
import photoLinkedIn from "../images/linkedin.png"
import photoFacebook from "../images/facebook.png"
import photoInsta from "../images/instagram.png"

const myName = "hyunsang han"
const myJob = "Developer"
const introduceMyself =
  "I always try to move forward with new learning. I work as a product manager, but I take my own personal time to develop toy projects and to contribute to open source projects. If you have a good idea for a new try, feel free to contact me anytime."
const outLinks = [
  ["github", photoGithub, "https://github.com/HyunSangHan"],
  [
    "linked-in",
    photoLinkedIn,
    "https://www.linkedin.com/in/%ED%98%84%EC%83%81-%ED%95%9C-971604178"
  ],
  ["facebook", photoFacebook, "https://www.facebook.com/gustkd3"],
  ["instagram", photoInsta, "https://www.instagram.com/phenom_0901"]
]

class About extends Component {
  render() {
    return (
      <>
        <div
          className={this.props.bgColorGrey ? "bg-grey pb-9" : "bg-white pb-9"}
        >
          <div className={this.props.bgColorGrey ? "bg-grey" : "bg-white"}>
            <div className="title-out pt-4 pb-4">
              <div className="title-in">
                <ScrollableAnchor id={"about"}>
                  <h1 className="font-5 font-new">about</h1>
                </ScrollableAnchor>
              </div>
            </div>
            <Grid>
              <Row className="h100percent mt-9">
                <Col xs={12} md={6}>
                  <div className="profile-right">
                    <img className="photo" src={photoVietnam} alt="my_photo" />
                  </div>
                </Col>
                <Col className="skin" xs={12} md={6}>
                  <div className="align-left ml-5 mr-5 mb-more for-mobile">
                    <h2 className="upper">{myName}</h2>
                    <h3 className="mt-3 mb-5">{myJob}</h3>
                    <h4>{introduceMyself}</h4>
                    <div className="bottom">
                      {outLinks.map((outLink, idx) => {
                        return (
                          <a
                            href={outLink[2]}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <img
                              key={idx}
                              className="link-icon"
                              src={outLink[1]}
                              alt={outLink[0]}
                            />
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </>
    )
  }
}

export default About
