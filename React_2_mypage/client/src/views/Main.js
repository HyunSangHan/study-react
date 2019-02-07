import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Contact from './Contact.js';
import '../App.css';
import '../css/Main.css';
import '../css/Timeline.css';
import Timeline from '../views/Timeline.js';
import MaterialIcon from 'material-icons-react';
import {Grid, Row, Col} from 'react-bootstrap';
import { Button, Form, FormGroup, Label, Input, Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

configureAnchors({offset: -140, scrollDuration: 1000})

class Main extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

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
                                            <div className="flex-gallery-right">
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

                        <div className="bg-white pb-9">
                            <div className="bg-white">
                                <div className="title-out pt-4 pb-4">
                                    <div className="title-except">
                                        <ScrollableAnchor id={'Products'}>
                                            <h1 className="font-5 upper">products</h1>
                                        </ScrollableAnchor>
                                    </div>
                                </div>
                                <Grid>
                                    <Row className="h100percent mt-9">
                                        <Col xs={12} md={6} lg={4} xl={3}>
                                            <div className="mb-5">
                                                <Card>
                                                    <CardBody>
                                                        <CardTitle>
                                                            <h2 className="h2">My Profile Page</h2>
                                                        </CardTitle>
                                                        <CardSubtitle>
                                                            <h3 className="h3">JAN - FEB 2019</h3>
                                                            <h4 className="h4">ReactJS / React-Bootstrap / Reactstrap</h4>
                                                        </CardSubtitle>
                                                    </CardBody>
                                                    <img width="100%" src="../images/mypage.png" alt="mypage" />
                                                    <CardBody>
                                                        <CardText>
                                                            <h4 className="h4">
                                                                My own profile page for introducing myself especially about web development. Designed and developed by myself.
                                                            </h4>
                                                        </CardText>
                                                        <CardLink className="font-3" href="/" target="_blank">Link</CardLink>
                                                        <CardLink className="font-3"  href="/" target="_blank">Github</CardLink>
                                                    </CardBody>
                                                </Card>
                                            </div>
                                        </Col>

                                        <Col xs={12} md={6} lg={4} xl={3}>
                                            <div className="mb-5">
                                                <Card>
                                                    <CardBody>
                                                        <CardTitle>
                                                            <h2 className="h2">Web Calculator</h2>
                                                        </CardTitle>
                                                        <CardSubtitle>
                                                            <h3 className="h3">JAN 2019</h3>
                                                            <h4 className="h4">ReactJS</h4>
                                                        </CardSubtitle>
                                                    </CardBody>
                                                    <img width="100%" src="../images/calculator.png" alt="calculator" />
                                                    <CardBody>
                                                        <CardText>
                                                            <h4 className="h4">
                                                                web based calculator for studying Javascript and React. It supports responsive web. Maybe you will be better to use on mobile.
                                                            </h4>
                                                        </CardText>
                                                        <CardLink className="font-3" href="http://calculator.dothome.co.kr/" target="_blank">Link</CardLink>
                                                        <CardLink className="font-3"  href="/" target="_blank">Github</CardLink>
                                                    </CardBody>
                                                </Card>
                                            </div>
                                        </Col>

                                        <Col xs={12} md={6} lg={4} xl={3}>
                                            <div className="mb-5">
                                                <Card>
                                                    <CardBody>
                                                        <CardTitle>
                                                            <h2 className="h2">Meeting Time</h2>
                                                        </CardTitle>
                                                        <CardSubtitle>
                                                            <h3 className="h3">DEC 2018 - PRESENT</h3>
                                                            <h4 className="h4">Ruby on Sinatra</h4>
                                                        </CardSubtitle>
                                                    </CardBody>
                                                    <img width="100%" src="../images/meeting.png" alt="meeting" />
                                                    <CardBody>
                                                        <CardText>
                                                            <h4 className="h4">
                                                                Meeting matching service(to be edited)
                                                            </h4>
                                                        </CardText>
                                                        <CardLink className="font-3" href="/" target="_blank">Link</CardLink>
                                                        <CardLink className="font-3"  href="/" target="_blank">Github</CardLink>
                                                    </CardBody>
                                                </Card>
                                            </div>
                                        </Col>

                                        <Col xs={12} md={6} lg={4} xl={3}>
                                            <div className="mb-5">
                                                <Card>
                                                    <CardBody>
                                                        <CardTitle>
                                                            <h2 className="h2">
                                                                GoGo Fish
                                                            </h2>
                                                        </CardTitle>
                                                        <CardSubtitle>
                                                            <h3 className="h3">SEP 2018 - PRESENT</h3>
                                                            <h4 className="h4">Ruby on Sinatra / Fuse</h4>
                                                        </CardSubtitle>
                                                    </CardBody>
                                                    <img width="100%" src="../images/fish.png" alt="fish" />
                                                    <CardBody>
                                                        <CardText>
                                                            <h4 className="h4">
                                                                Education App for kids
                                                            </h4>
                                                        </CardText>
                                                        <CardLink className="font-3" href="/" target="_blank">Link</CardLink>
                                                        <CardLink className="font-3"  href="/" target="_blank">Github</CardLink>
                                                    </CardBody>
                                                </Card>
                                            </div>
                                        </Col>

                                        <Col xs={12} md={6} lg={4} xl={3}>
                                            <div className="mb-5">
                                                <Card>
                                                    <CardBody>
                                                        <CardTitle>
                                                            <h2 className="h2">
                                                                Fine dust Bot
                                                            </h2>
                                                        </CardTitle>
                                                        <CardSubtitle>
                                                            <h3 className="h3">AUG 2018</h3>
                                                            <h4 className="h4">Ruby on Sinatra / Kakao Chatbot / API of KMA</h4>
                                                        </CardSubtitle>
                                                    </CardBody>
                                                    <img width="100%" src="../images/dustbot.jpeg" alt="dustbot" />
                                                    <CardBody>
                                                        <CardText>
                                                            <h4 className="h4">
                                                                Using API of Korea Meteorological Administration, it gave information of fine dust to kakao users.
                                                            </h4>
                                                        </CardText>
                                                        <CardLink className="font-3" href="/" target="_blank">Link</CardLink>
                                                        <CardLink className="font-3"  href="/" target="_blank">Github</CardLink>
                                                    </CardBody>
                                                </Card>
                                            </div>
                                        </Col>

                                        <Col xs={12} md={6} lg={4} xl={3}>
                                            <div className="mb-5">
                                                <Card>
                                                    <CardBody>
                                                        <CardTitle>
                                                            <h2 className="h2">BlackJack</h2>
                                                        </CardTitle>
                                                        <CardSubtitle>
                                                            <h3 className="h3">NOV - DEC 2011</h3>
                                                            <h4 className="h4">Java</h4>
                                                        </CardSubtitle>
                                                    </CardBody>
                                                    <img width="100%" src="../images/blackjack.jpg" alt="blackjack" />
                                                    <CardBody>
                                                        <CardText>
                                                            <h4 className="h4">
                                                                I made BlackJack for an assignment when I was in the university.
                                                            </h4>
                                                        </CardText>
                                                    </CardBody>
                                                </Card>
                                            </div>
                                        </Col>

                                    </Row>
                                </Grid>
                            </div>
                        </div>

                        <Contact/>

                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Main;