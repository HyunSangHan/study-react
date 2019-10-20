import React, { Component } from 'react';
import '../../App.css';
import '../../css/Gallery.css';
import {Grid, Col} from 'react-bootstrap';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

// const mapStyles = {
//     width: '100%',
//     height: '100%'
// };

class Gallery3 extends Component {

    render() {
        return (
            <Grid>
                <Col xs={12} md={12}>
                    <div className="top-content">
                        <div className="top-img">
                            <img className="each-img" src="../images/6airplane.jpg" alt="gal1"/>
                        </div>
                        <div>
                            <Map className="top-map"
                                google={this.props.google}
                                zoom={8}
                                // style={mapStyles}
                                initialCenter={{
                                    lat: 49.716251,
                                    lng: 14.094804
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
    apiKey: (process.env.REACT_APP_GOOGLE_MAP_API_KEY)
})(Gallery3)