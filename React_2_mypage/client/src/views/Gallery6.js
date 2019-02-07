import React, { Component } from 'react';
import '../App.css';
import '../css/Gallery.css';
import {Grid, Row, Col} from 'react-bootstrap';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// const mapStyles = {
//     width: '100%',
//     height: '100%'
// };

class Gallery6 extends Component {

    render() {
        return (
            <Grid>
                <Col xs={12} md={12}>
                    <div className="top-content">
                        <div className="top-img">
                            <img className="each-img" src="../images/1niko.jpg" alt="gal6"/>
                        </div>
                        <div>
                            <Map className="top-map"
                                google={this.props.google}
                                zoom={14}
                                // style={mapStyles}
                                initialCenter={{
                                    lat: 37.501183,
                                    lng: 127.025603
                                }}>
                                <Marker />
                            </Map>

                        </div>
                    </div>
                </Col>
            </Grid>
        );
    }
}

// export default GalleryContent;

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDJklcIhJmX18ByesK5wa-teBvRITPlL4Q")
})(Gallery6)