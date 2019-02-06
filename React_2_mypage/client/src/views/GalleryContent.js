import React, { Component } from 'react';
import '../App.css';
import '../css/GalleryContent.css';
import {Grid, Row, Col} from 'react-bootstrap';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

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
                        지도 들어갈 곳
                        {/*<Map google={this.props.google} zoom={14}>*/}

                            {/*<Marker onClick={this.onMarkerClick}*/}
                                    {/*name={'Current location'} />*/}

                            {/*<InfoWindow onClose={this.onInfoWindowClose}>*/}
                                {/*/!*<div>*!/*/}
                                    {/*/!*<h1>{this.state.selectedPlace.name}</h1>*!/*/}
                                {/*/!*</div>*!/*/}
                            {/*</InfoWindow>*/}
                        {/*</Map>*/}
                    </div>
                </div>
                </Col>
            </Grid>
        );
    }
}

export default GalleryContent;

// export default GoogleApiWrapper({
//     apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
// })(GalleryContent)