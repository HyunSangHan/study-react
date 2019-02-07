import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Contact from './Contact.js';
import Products from './Products.js';
import '../App.css';
import '../css/Main.css';
import '../css/Timeline.css';
import Timeline from '../views/Timeline.js';
import {Grid, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

configureAnchors({offset: -140, scrollDuration: 1000})

class Main extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="body-common z-0">
                    <div className="body-under">
                        <img className="fix bg-large" src="../images/sea.jpg" alt="my_photo" width="100%"/>
                        <img className="fix bg-small" src="../images/sea2.jpg" alt="my_photo" width="100%"/>
                        <div className="body-under-black fix"/>
                    </div>
                    <div className="gate font-51">Welcome to my page!
                    </div>
                    <div className="body-on z-2">

                        <div className="bg-white pb-9">
                            <div className="bg-white">
                                <div className="title-out pt-4 pb-4">
                                    <div className="title-in">
                                        <ScrollableAnchor id={'About'}>
                                            <h1 className="font-5 upper">about</h1>
                                        </ScrollableAnchor>
                                    </div>
                                </div>
                                <Grid>
                                    <Row className="h100percent mt-9">
                                        <Col xs={12} md={6}>
                                            <div className="profile-right">
                                                <img className="photo" src="../images/hal.jpg" alt="my_photo"/>
                                            </div>
                                        </Col>
                                        <Col className="skin" xs={12} md={6}>
                                            <div className="align-left ml-5 mr-5 mb-more for-mobile">
                                                <h2 className="upper">hyunsang han</h2>
                                                <h3 className="mt-3 mb-5">#Self-motivated   #Logical   #Meticulous</h3>
                                                <h4>I always try to move forward with new learning. I work as a service planner, but I take my own personal time to develop toy projects. If you have a good idea for a new try, feel free to contact me anytime.</h4>
                                                <div className="bottom">
                                                    <a href = "https://github.com/HyunSangHan" target = "_blank">
                                                        <img className ="link-icon" src="../../images/github.png" alt="github"/>
                                                    </a>
                                                    <a href = "https://www.linkedin.com/in/%ED%98%84%EC%83%81-%ED%95%9C-971604178" target = "_blank">
                                                        <img className ="link-icon" src="../../images/linkedin.png" alt="linked-in"/>
                                                    </a>
                                                    <a href = "https://www.facebook.com/gustkd3" target = "_blank">
                                                        <img className ="link-icon" src="../../images/facebook.png" alt="facebook"/>
                                                    </a>
                                                    <a href = "https://www.instagram.com/phenom_0901" target = "_blank">
                                                        <img className ="link-icon" src="../../images/instagram.png" alt="instagram"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                        </div>

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
                        <Timeline/>

                        <div className="bg-grey pb-9">
                            <div className="bg-grey">
                                <div className="title-out pt-4 pb-4">
                                    <div className="title-in">
                                        <ScrollableAnchor id={'SkillSet'}>
                                            <h1 className="font-5 upper">skill set</h1>
                                        </ScrollableAnchor>

                                    </div>
                                </div>
                                <Grid>
                                    <Row className="h100percent mt-9">
                                        <Col xs={12} md={4}>
                                            <div>
                                                <img className="skill" src="../images/React.png" alt="React"/>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <div>
                                                <img className="skill"  src="../images/Python.png" alt="Python"/>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <div>
                                                <img className="skill"  src="../images/ruby.png" alt="Ruby"/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                        </div>

                        <Products/>
                        <Contact/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Main;