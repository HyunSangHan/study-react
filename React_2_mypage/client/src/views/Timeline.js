import React, { Component } from "react"
import "../App.css"
import "../css/Main.css"
import "../css/Timeline.css"
import { Grid, Row, Col } from "react-bootstrap"
import ScrollableAnchor from "react-scrollable-anchor"

const historyInfos = [
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

const MakeChangeLine = ({ txt }) => {
  const [upper, under] = txt.split("\n")
  if (under) {
    return (
      <>
        {upper}
        <br />
        {under}
      </>
    )
  }
  return txt
}

const MakeLink = ({ txt, uri }) => {
  const [normalLeft, linkTarget, normalRight] = txt.split("@")
  console.log(normalLeft, linkTarget, normalRight)
  if (linkTarget) {
    return (
      <>
        {normalLeft}
        <a href={uri} target="_blank" rel="noopener noreferrer">
          {linkTarget}
        </a>
        {normalRight}
      </>
    )
  }
  return txt
}

const ArrangedText = ({ txt, uri }) => {
  let component = txt
  if (uri) {
    component = <MakeLink txt={txt} uri={uri} />
  } else {
    component = <MakeChangeLine txt={txt} />
  }
  return component
}

class Timeline extends Component {
  render() {
    return (
      <div
        className={this.props.bgColorGrey ? "bg-grey pb-9" : "bg-white pb-9"}
      >
        <div className={this.props.bgColorGrey ? "bg-grey" : "bg-white"}>
          <div className="title-out pt-4 pb-4">
            <div className="title-in">
              <ScrollableAnchor id={"timeline"}>
                <h1 className="font-5 font-new">timeline</h1>
              </ScrollableAnchor>
            </div>
          </div>
          <div className="key-timeline font-1">
            <Grid>
              <Row className="skin mt-9">
                <div className="for-line">
                  <div className="vertical-line"></div>
                </div>
                {historyInfos.map((history, idx) => {
                  return (
                    <Col
                      key={idx}
                      className="top-timeline timeline-margin"
                      xs={12}
                      md={12}
                    >
                      <div className="img-timeline">
                        {history.from}
                        {history.to && (
                          <>
                            <br />-<br />
                          </>
                        )}
                        {history.to}
                      </div>
                      <div
                        className={
                          idx % 2 === 0 ? "right-timeline" : "left-timeline"
                        }
                      >
                        <div
                          className={
                            idx % 2 === 0 ? "align-left" : "align-right"
                          }
                        >
                          <h2 className="h2 mb-5">
                            {history.link ? (
                              <a
                                href={history.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {history.title}
                              </a>
                            ) : (
                              history.title
                            )}
                          </h2>
                          {history.details.map((detailHistory, idx) => {
                            return (
                              <div key={idx}>
                                <h3 className="h3 mt-4">
                                  {detailHistory.subTitle && (
                                    <ArrangedText
                                      txt={detailHistory.subTitle}
                                      uri={detailHistory.refUri}
                                    />
                                  )}
                                </h3>
                                <h4 className="h4 mb-5">
                                  {detailHistory.description && (
                                    <ArrangedText
                                      txt={detailHistory.description}
                                      uri={detailHistory.refUri}
                                    />
                                  )}
                                </h4>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </Col>
                  )
                })}
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}

export default Timeline
