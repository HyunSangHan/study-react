import React, { Component } from "react"
import "../../App.css"
import "../../css/Gallery.css"
import GalleryHeader from "./GalleryHeader.js"
import { Grid, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import GalleryDetail from "./GalleryDetail"
import { mapInfos } from "../../content"

class GalleryPage extends Component {
  render() {
    const galleryId = this.props.match.params.galleryId - 1 || 0
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
              imgSrc={mapInfos[galleryId].imgSrc}
              zoomCustom={mapInfos[galleryId].zoomCustom}
              initialCenter={mapInfos[galleryId].initialCenter}
            />
          </Col>
        </Grid>
      </>
    )
  }
}

export default GalleryPage
