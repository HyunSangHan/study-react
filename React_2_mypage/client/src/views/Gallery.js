import React, { Component } from 'react';
import '../App.css';
import '../css/Main.css';
import '../css/Timeline.css';
import {Grid, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'


configureAnchors({offset: -140, scrollDuration: 1000})

class Gallery extends Component {
    render() {
        return (
            <div className="App">
                <div className="bg-grey pb-9">
                    <div className="bg-grey">
                        <div className="title-out pt-4 pb-4">
                            <div className="title-in">
                                <ScrollableAnchor id={'Gallery'}>
                                    <h1 className="font-5 upper">gallery</h1>
                                </ScrollableAnchor>
                            </div>
                        </div>
                        <Grid>
                            <Col xs={12} md={12}>
                                <div className="top-gallery">
                                    <div className="flex-gallery-left">
                                        <div>
                                            <Link to = "/gallery/1">
                                                <img className="each-gallery" src="../images/2hifive.jpg" alt="gal1"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to = "/gallery/2">
                                                <img className="each-gallery" src="../images/3positano.jpg" alt="gal2"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to = "/gallery/3">
                                                <img className="each-gallery" src="../images/6airplane.jpg" alt="gal3"/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex-gallery-right">
                                        <div>
                                            <Link to = "/gallery/4">
                                                <img className="each-gallery" src="../images/5soba.jpg" alt="gal4"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to = "/gallery/5">
                                                <img className="each-gallery" src="../images/jongro.jpg" alt="gal5"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to = "/gallery/6">
                                                <img className="each-gallery" src="../images/1niko.jpg" alt="gal6"/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex-gallery-last">
                                        <div>
                                            <Link to = "/gallery/7">
                                                <img className="each-gallery" src="../images/spain.jpg" alt="gal7"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to = "/gallery/8">
                                                <img className="each-gallery" src="../images/dq.jpg" alt="gal8"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to = "/gallery/9">
                                                <img className="each-gallery" src="../images/5young.jpg" alt="gal9"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <Link className="link-more font-3" to = "/gallery">See more > </Link>
                            </Col>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;