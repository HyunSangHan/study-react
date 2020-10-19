import React, { Component } from "react"
import "../App.css"
import "../css/Main.css"
import "../css/Timeline.css"
import { Grid, Row, Col } from "react-bootstrap"
import ScrollableAnchor from "react-scrollable-anchor"
import { historyInfos } from "../content"

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
                                  {detailHistory.bullets &&
                                    detailHistory.bullets.map((val, idx) => (
                                      <div key={idx}>• {val}</div>
                                    ))}
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
