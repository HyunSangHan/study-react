import React, { Component } from 'react';
import '../App.css';
import '../css/Gallery.css';
import GalleryContent from '../views/GalleryContent.js';
import GalleryHeader from '../views/GalleryHeader.js';
import MaterialIcon from 'material-icons-react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";

class Gallery extends Component {
    render() {
        return (
            <div className="App">
                <GalleryHeader/>

             <Grid>
                 <Col xs={12} md={12}>
                     <div className="top-thumbnail">
                        <div className="flex-thumbnail">
                            <div>
                                <img className="each-gallery" src="../images/2hifive.jpg" alt="gal1"/>
                            </div>
                            <div>
                                <img className="each-gallery" src="../images/3positano.jpg" alt="gal2"/>
                            </div>
                            <div>
                                <img className="each-gallery" src="../images/6airplane.jpg" alt="gal3"/>
                            </div>
                            <div>
                                <img className="each-gallery" src="../images/5soba.jpg" alt="gal4"/>
                            </div>
                            <div>
                                <img className="each-gallery" src="../images/jongro.jpg" alt="gal5"/>
                            </div>
                            <div>
                                <img className="each-gallery" src="../images/1niko.jpg" alt="gal6"/>
                            </div>
                            <div>
                                <img className="each-gallery" src="../images/spain.jpg" alt="gal7"/>
                            </div>
                            <div>
                                <img className="each-gallery" src="../images/dq.jpg" alt="gal8"/>
                            </div>
                            <div>
                                <img className="each-gallery" src="../images/5young.jpg" alt="gal9"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <GalleryContent />
                    </div>
                </Col>
             </Grid>
        </div>
        );
    }
}

export default Gallery;