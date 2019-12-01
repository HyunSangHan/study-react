import React, { Component } from "react"
import "../../App.css"
import "../../css/Gallery.css"
import { Grid, Col } from "react-bootstrap"

class Gallery9 extends Component {
  render() {
    return (
      <Grid>
        <Col xs={12} md={12}>
          <div className="top-content">
            <div className="top-img">
              <img className="each-img" src="../images/5young.jpg" alt="gal9" />
            </div>
            <div className="forgot">
              Actually..
              <br />I forgot where it was taken!
            </div>
          </div>
        </Col>
      </Grid>
    )
  }
}

export default Gallery9
