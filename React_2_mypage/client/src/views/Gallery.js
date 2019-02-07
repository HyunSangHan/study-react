import React, { Component } from 'react';
import '../App.css';
import '../css/Gallery.css';
import Gallery1 from '../views/Gallery1.js';
import Gallery2 from '../views/Gallery2.js';
import Gallery3 from '../views/Gallery3.js';
import Gallery4 from '../views/Gallery4.js';
import Gallery5 from '../views/Gallery5.js';
import Gallery6 from '../views/Gallery6.js';
import Gallery7 from '../views/Gallery7.js';
import Gallery8 from '../views/Gallery8.js';
import Gallery9 from '../views/Gallery9.js';
import GalleryHeader from '../views/GalleryHeader.js';
import MaterialIcon from 'material-icons-react';
import {Grid, Row, Col} from 'react-bootstrap';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Main from "./Main";

class Gallery extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <GalleryHeader/>

                    <Grid>
                        <Col xs={12} md={12}>
                            <div className="top-thumbnail">
                                <div className="flex-thumbnail">
                                    <div>
                                        <Link to = "/gallery/1">
                                            <img className="each-gallery-detail" src="../images/2hifive.jpg" alt="gal1"/>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to = "/gallery/2">
                                            <img className="each-gallery-detail" src="../images/3positano.jpg" alt="gal2"/>
                                       </Link>
                                    </div>
                                    <div>
                                        <Link to = "/gallery/3">
                                        <img className="each-gallery-detail" src="../images/6airplane.jpg" alt="gal3"/>
                                            </Link>
                                    </div>
                                    <div>
                                        <Link to = "/gallery/4">
                                            <img className="each-gallery-detail" src="../images/5soba.jpg" alt="gal4"/>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to = "/gallery/5">
                                            <img className="each-gallery-detail" src="../images/jongro.jpg" alt="gal5"/>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to = "/gallery/6">
                                            <img className="each-gallery-detail" src="../images/1niko.jpg" alt="gal6"/>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to = "/gallery/7">
                                            <img className="each-gallery-detail" src="../images/spain.jpg" alt="gal7"/>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to = "/gallery/8">
                                            <img className="each-gallery-detail" src="../images/dq.jpg" alt="gal8"/>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to = "/gallery/9">
                                            <img className="each-gallery-detail" src="../images/5young.jpg" alt="gal9"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Route exact path="/gallery" component={Gallery1}/>
                                <Route exact path="/gallery/1" component={Gallery1}/>
                                <Route exact path="/gallery/2" component={Gallery2}/>
                                <Route exact path="/gallery/3" component={Gallery3}/>
                                <Route exact path="/gallery/4" component={Gallery4}/>
                                <Route exact path="/gallery/5" component={Gallery5}/>
                                <Route exact path="/gallery/6" component={Gallery6}/>
                                <Route exact path="/gallery/7" component={Gallery7}/>
                                <Route exact path="/gallery/8" component={Gallery8}/>
                                <Route exact path="/gallery/9" component={Gallery9}/>
                            </div>
                        </Col>
                    </Grid>
                </div>
            </BrowserRouter>
        );
    }
}

export default Gallery;