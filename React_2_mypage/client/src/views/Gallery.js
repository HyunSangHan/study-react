import React, { Component } from "react"
import "../App.css"
import "../css/Main.css"
import "../css/Timeline.css"
import { Grid, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { galleryInfos } from "../content"

import ScrollableAnchor from "react-scrollable-anchor"
import { configureAnchors } from "react-scrollable-anchor"

configureAnchors({ offset: -140, scrollDuration: 1000 })

class Gallery extends Component {
  render() {
    return (
      <>
        <div
          className={this.props.bgColorGrey ? "bg-grey pb-9" : "bg-white pb-9"}
        >
          <div className={this.props.bgColorGrey ? "bg-grey" : "bg-white"}>
            <div className="title-out pt-4 pb-4">
              <div className="title-in">
                <ScrollableAnchor id={"gallery"}>
                  <h1 className="font-5 font-new">gallery</h1>
                </ScrollableAnchor>
              </div>
            </div>
            <Grid>
              <Col xs={12} md={12}>
                <div className="top-gallery">
                  {galleryInfos.map((infoList, firstIdx) => (
                    <div
                      key={firstIdx}
                      className={galleryInfos[firstIdx].align}
                    >
                      {infoList.srcs.map((img, secondIdx) => (
                        <div key={secondIdx}>
                          <Link to={`/gallery/${firstIdx * 3 + secondIdx + 1}`}>
                            <img
                              className="each-gallery"
                              src={img}
                              alt={`gal${secondIdx + 1}`}
                            />
                          </Link>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <Link className="link-more font-3" to="/gallery">
                  &nbsp;See more >&nbsp;
                </Link>
              </Col>
            </Grid>
          </div>
        </div>
      </>
    )
  }
}

export default Gallery
