import React, { Component } from 'react';
import '../App.css';
import '../css/GalleryContent.css';
import {Grid, Row, Col} from 'react-bootstrap';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

class GalleryContent extends Component {

    render() {
        return (
            <Grid>
                <Col xs={12} md={12}>
                    <div className="top-content">
                        <div className="top-img">
                            <img className="each-img" src="../images/2hifive.jpg" alt="gal1"/>
                        </div>
                        <div className="top-map">
                            {/*지도 들어갈 곳*/}
                            <Map className="top-map"
                                google={this.props.google}
                                zoom={14}
                                style={mapStyles}
                                initialCenter={{
                                    lat: 43.722984,
                                    lng: 10.396603
                                }}
                            />
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
})(GalleryContent)