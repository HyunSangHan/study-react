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

class About extends Component {
  render() {
    return (
      <>
        <div className="bg-white pb-9">
          <div className="bg-white">
            <div className="title-out pt-4 pb-4">
              <div className="title-in">
                <ScrollableAnchor id={"About"}>
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
                    <h2 className="upper">hyunsang han</h2>
                    <h3 className="mt-3 mb-5">Developer</h3>
                    <h4>
                      I always try to move forward with new learning. I work as
                      a service planner, but I take my own personal time to
                      develop toy projects. If you have a good idea for a new
                      try, feel free to contact me anytime.
                    </h4>
                    <div className="bottom">
                      <a
                        href="https://github.com/HyunSangHan"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          className="link-icon"
                          src={photoGithub}
                          alt="github"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/%ED%98%84%EC%83%81-%ED%95%9C-971604178"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          className="link-icon"
                          src={photoLinkedIn}
                          alt="linked-in"
                        />
                      </a>
                      <a
                        href="https://www.facebook.com/gustkd3"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          className="link-icon"
                          src={photoFacebook}
                          alt="facebook"
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/phenom_0901"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          className="link-icon"
                          src={photoInsta}
                          alt="instagram"
                        />
                      </a>
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
