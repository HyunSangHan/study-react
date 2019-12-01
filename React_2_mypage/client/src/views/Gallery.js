import React, { Component } from "react"
import "../App.css"
import "../css/Main.css"
import "../css/Timeline.css"
import { Grid, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import imgSrc1 from "../images/2hifive.jpg"
import imgSrc2 from "../images/3positano.jpg"
import imgSrc3 from "../images/6airplane.jpg"
import imgSrc4 from "../images/5soba.jpg"
import imgSrc5 from "../images/jongro.jpg"
import imgSrc6 from "../images/1niko.jpg"
import imgSrc7 from "../images/spain.jpg"
import imgSrc8 from "../images/dq.jpg"
import imgSrc9 from "../images/5young.jpg"

import ScrollableAnchor from "react-scrollable-anchor"
import { configureAnchors } from "react-scrollable-anchor"

configureAnchors({ offset: -140, scrollDuration: 1000 })

const imgSrcs = [
  [imgSrc1, imgSrc2, imgSrc3],
  [imgSrc4, imgSrc5, imgSrc6],
  [imgSrc7, imgSrc8, imgSrc9]
]
const galleryAlign = [
  "flex-gallery-left",
  "flex-gallery-right",
  "flex-gallery-last"
]

class Gallery extends Component {
  render() {
    return (
      <>
        <div className="bg-grey pb-9">
          <div className="bg-grey">
            <div className="title-out pt-4 pb-4">
              <div className="title-in">
                <ScrollableAnchor id={"Gallery"}>
                  <h1 className="font-5 font-new">gallery</h1>
                </ScrollableAnchor>
              </div>
            </div>
            <Grid>
              <Col xs={12} md={12}>
                <div className="top-gallery">
                  {imgSrcs.map((imgList, firstIdx) => (
                    <div className={galleryAlign[firstIdx]}>
                      {imgList.map((img, secondIdx) => (
                        <div>
                          <Link to={`/gallery/${secondIdx + 1}`}>
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
