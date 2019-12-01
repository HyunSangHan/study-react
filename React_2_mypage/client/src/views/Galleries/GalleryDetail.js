import React, { Component } from "react"
import "../../App.css"
import "../../css/Gallery.css"
import { Grid, Col } from "react-bootstrap"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"

class GalleryDetail extends Component {
  render() {
    const { idx, imgSrc, zoomCustom, initialCenter } = this.props
    return (
      <Grid>
        <Col xs={12} md={12}>
          <div className="top-content">
            <div className="top-img">
              <img className="each-img" src={imgSrc} alt={`gal${idx + 1}`} />
            </div>
            {zoomCustom && initialCenter ? (
              <div>
                <Map
                  className="top-map"
                  google={this.props.google}
                  zoom={zoomCustom}
                  initialCenter={initialCenter}
                >
                  <Marker />
                </Map>
              </div>
            ) : (
              <div className="forgot">
                Actually..
                <br />I forgot where it was taken!
              </div>
            )}
          </div>
        </Col>
      </Grid>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
})(GalleryDetail)
