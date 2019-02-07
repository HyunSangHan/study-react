import React, { Component } from 'react';
import '../App.css';
import '../css/Gallery.css';
import {Grid, Col} from 'react-bootstrap';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

// const mapStyles = {
//     width: '100%',
//     height: '100%'
// };

class Gallery4 extends Component {

    render() {
        return (
            <Grid>
                <Col xs={12} md={12}>
                    <div className="top-content">
                        <div className="top-img">
                            <img className="each-img" src="../images/5soba.jpg" alt="gal4"/>
                        </div>
                        <div>
                            <Map className="top-map"
                                google={this.props.google}
                                zoom={10}
                                // style={mapStyles}
                                initialCenter={{
                                    lat: 35.660067,
                                    lng: 139.701524
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
})(Gallery4)