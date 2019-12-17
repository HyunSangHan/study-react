import React, { Component } from "react"
import "../../App.css"
import "../../css/Gallery.css"
import GalleryHeader from "./GalleryHeader.js"
import { Grid, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
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

const mapInfos = [
  {
    place: "pisa",
    imgSrc: imgSrc1,
    zoomCustom: 14,
    initialCenter: { lat: 43.722984, lng: 10.396603 }
  },
  {
    place: "positano",
    imgSrc: imgSrc2,
    zoomCustom: 14,
    initialCenter: { lat: 40.62753, lng: 14.48815 }
  },
  {
    place: "pargue",
    imgSrc: imgSrc3,
    zoomCustom: 8,
    initialCenter: { lat: 49.716251, lng: 14.094804 }
  },
  {
    place: "tokyo",
    imgSrc: imgSrc4,
    zoomCustom: 10,
    initialCenter: { lat: 35.660067, lng: 139.701524 }
  },
  {
    place: "jongro",
    imgSrc: imgSrc5,
    zoomCustom: 16,
    initialCenter: { lat: 37.573391, lng: 126.98975 }
  },
  {
    place: "gangnam",
    imgSrc: imgSrc6,
    zoomCustom: 14,
    initialCenter: { lat: 37.501183, lng: 127.025603 }
  },
  {
    place: "barcelona",
    imgSrc: imgSrc7,
    zoomCustom: 14,
    initialCenter: { lat: 41.234305, lng: 1.808081 }
  },
  {
    place: "coex",
    imgSrc: imgSrc8,
    zoomCustom: 17,
    initialCenter: { lat: 37.508696, lng: 127.061004 }
  },
  { place: "studio", imgSrc: imgSrc9, zoomCustom: null, initialCenter: null }
]
class GalleryPage extends Component {
  render() {
    const { galleryId } = this.props.match.params
    return (
      <>
        <GalleryHeader />
        <Grid>
          <Col xs={12} md={12}>
            <div className="top-thumbnail">
              <div className="flex-thumbnail">
                {mapInfos.map((info, idx) => (
                  <div key={idx}>
                    <Link to={`/gallery/${idx + 1}`}>
                      <img
                        className="each-gallery"
                        src={info.imgSrc}
                        alt={`gal${idx + 1}`}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <GalleryDetail
              key={galleryId}
              idx={galleryId}
              imgSrc={mapInfos[galleryId - 1].imgSrc}
              zoomCustom={mapInfos[galleryId - 1].zoomCustom}
              initialCenter={mapInfos[galleryId - 1].initialCenter}
            />
          </Col>
        </Grid>
      </>
    )
  }
}

export default GalleryPage
