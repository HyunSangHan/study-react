import React, { Component } from "react"
import "../App.css"
import "../css/Main.css"
import { Grid, Row, Col } from "react-bootstrap"
import ScrollableAnchor from "react-scrollable-anchor"
import photoVietnam from "../images/vietnam.jpg"
import { baseInfo } from "../content"

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
                    <h2 className="upper">{baseInfo.name}</h2>
                    <h3 className="mt-3 mb-5">{baseInfo.job}</h3>
                    <h4>{baseInfo.introduceMyself}</h4>
                    <div className="bottom">
                      {baseInfo.snsLinks.map((sns, idx) => {
                        return (
                          <a
                            key={idx}
                            href={sns.uri}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <img
                              className="link-icon"
                              src={sns.logo}
                              alt={sns.name}
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
