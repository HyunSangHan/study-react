import React, { Component } from "react"
import "../../App.css"
import "../../css/Gallery.css"
import GalleryHeader from "./GalleryHeader.js"
import { Grid, Col } from "react-bootstrap"
import { Link, Route } from "react-router-dom"
import imgSrc1 from "../../images/2hifive.jpg"
import imgSrc2 from "../../images/3positano.jpg"
import imgSrc3 from "../../images/6airplane.jpg"
import imgSrc4 from "../../images/5soba.jpg"
import imgSrc5 from "../../images/jongro.jpg"
import imgSrc6 from "../../images/1niko.jpg"
import imgSrc7 from "../../images/spain.jpg"
import imgSrc8 from "../../images/dq.jpg"
import imgSrc9 from "../../images/5young.jpg"
import GalleryDetail from "./GalleryDetail"

const imgSrcs = [
  imgSrc1,
  imgSrc2,
  imgSrc3,
  imgSrc4,
  imgSrc5,
  imgSrc6,
  imgSrc7,
  imgSrc8,
  imgSrc9
]
const mapInfos = [
  {
    place: "pisa",
    zoomCustom: 14,
    initialCenter: { lat: 43.722984, lng: 10.396603 }
  },
  {
    place: "positano",
    zoomCustom: 14,
    initialCenter: { lat: 40.62753, lng: 14.48815 }
  },
  {
    place: "pargue",
    zoomCustom: 8,
    initialCenter: { lat: 49.716251, lng: 14.094804 }
  },
  {
    place: "tokyo",
    zoomCustom: 10,
    initialCenter: { lat: 35.660067, lng: 139.701524 }
  },
  {
    place: "jongro",
    zoomCustom: 16,
    initialCenter: { lat: 37.573391, lng: 126.98975 }
  },
  {
    place: "gangnam",
    zoomCustom: 14,
    initialCenter: { lat: 37.501183, lng: 127.025603 }
  },
  {
    place: "barcelona",
    zoomCustom: 14,
    initialCenter: { lat: 41.234305, lng: 1.808081 }
  },
  {
    place: "coex",
    zoomCustom: 17,
    initialCenter: { lat: 37.508696, lng: 127.061004 }
  },
  { place: "studio", zoomCustom: null, initialCenter: null }
]
class GalleryPage extends Component {
  render() {
    return (
      <>
        <GalleryHeader />
        <Grid>
          <Col xs={12} md={12}>
            <div className="top-thumbnail">
              <div className="flex-thumbnail">
                {imgSrcs.map((img, idx) => (
                  <div key={idx}>
                    <Link to={`/gallery/${idx + 1}`}>
                      <img
                        className="each-gallery"
                        src={img}
                        alt={`gal${idx + 1}`}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Route
                exact
                path={`/gallery`}
                render={() => (
                  <GalleryDetail
                    idx={1}
                    imgSrc={imgSrc1}
                    zoomCustom={mapInfos[0].zoomCustom}
                    initialCenter={mapInfos[0].initialCenter}
                  />
                )}
              />
              {imgSrcs.map((img, idx) => (
                <Route
                  exact
                  path={`/gallery/${idx + 1}`}
                  key={idx}
                  render={() => (
                    <GalleryDetail
                      idx={idx + 1}
                      imgSrc={img}
                      zoomCustom={mapInfos[idx].zoomCustom}
                      initialCenter={mapInfos[idx].initialCenter}
                    />
                  )}
                />
              ))}
            </div>
          </Col>
        </Grid>
      </>
    )
  }
}

export default GalleryPage
