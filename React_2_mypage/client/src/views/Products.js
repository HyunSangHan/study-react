import React, { Component } from 'react';
import '../App.css';
import '../css/Main.css';
import '../css/Timeline.css';
import {Grid, Row, Col} from 'react-bootstrap';
import {colorPalette} from 'material-icons-react';
import ScrollableAnchor from 'react-scrollable-anchor'
import {Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle, Collapse, Button} from "reactstrap";

class Products extends Component {


    constructor(props) {
        super(props);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.toggle4 = this.toggle4.bind(this);
        this.toggle5 = this.toggle5.bind(this);
        this.toggle6 = this.toggle6.bind(this);
        this.state = {
            collapse1: false,
            collapse2: false,
            collapse3: false,
            collapse4: false,
            collapse5: false,
            collapse6: false };
    }

    toggle1() {
        this.setState({ collapse1: !this.state.collapse1 });
    }

    toggle2() {
        this.setState({ collapse2: !this.state.collapse2 });
    }

    toggle3() {
        this.setState({ collapse3: !this.state.collapse3 });
    }

    toggle4() {
        this.setState({ collapse4: !this.state.collapse4 });
    }

    toggle5() {
        this.setState({ collapse5: !this.state.collapse5 });
    }

    toggle6() {
        this.setState({ collapse6: !this.state.collapse6 });
    }

    render() {
        return (
            <div className="App">

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
                                            <Button className="toggle" color="info" onClick={this.toggle1} style={{ marginBottom: '1rem' }}>More info</Button>
                                            <Collapse isOpen={this.state.collapse1}>
                                                <CardBody>
                                                    <CardText>
                                                        <h4 className="h4">
                                                            My own profile page for introducing myself especially about web development. Designed and developed by myself.
                                                        </h4>
                                                    </CardText>
                                                    <CardLink className="font-3" href="/" target="_blank">Link</CardLink>
                                                </CardBody>
                                            </Collapse>
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
                                            <Button className="toggle" color="info" onClick={this.toggle2} style={{ marginBottom: '1rem' }}>More info</Button>
                                            <Collapse isOpen={this.state.collapse2}>
                                                <CardBody>
                                                    <CardText>
                                                        <h4 className="h4">
                                                            web based calculator for studying Javascript and React. It supports responsive web. Maybe you will be better to use on mobile.
                                                        </h4>
                                                    </CardText>
                                                    <CardLink className="font-3" href="http://calculator.dothome.co.kr/" target="_blank">Link</CardLink>
                                                </CardBody>
                                            </Collapse>
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
                                            <Button className="toggle" color="info" onClick={this.toggle3} style={{ marginBottom: '1rem' }}>More info</Button>
                                            <Collapse isOpen={this.state.collapse3}>
                                                <CardBody>
                                                    <CardText>
                                                        <h4 className="h4">
                                                            Meeting matching service(to be edited)
                                                        </h4>
                                                    </CardText>
                                                    <CardLink className="font-3"  href="https://github.com/HyunSangHan/BRGG_Meeting-App" target="_blank">Github</CardLink>
                                                </CardBody>
                                            </Collapse>
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
                                            <Button className="toggle" color="info" onClick={this.toggle4} style={{ marginBottom: '1rem' }}>More info</Button>
                                            <Collapse isOpen={this.state.collapse4}>
                                                <CardBody>
                                                    <CardText>
                                                        <h4 className="h4">
                                                            Education App for kids
                                                        </h4>
                                                    </CardText>
                                                    <CardLink className="font-3"  href="https://github.com/zzokokeic/barogagi1gibateam" target="_blank">Github</CardLink>
                                                </CardBody>
                                            </Collapse>
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
                                            <Button className="toggle" color="info" onClick={this.toggle5} style={{ marginBottom: '1rem' }}>More info</Button>
                                            <Collapse isOpen={this.state.collapse5}>
                                                <CardBody>
                                                    <CardText>
                                                        <h4 className="h4">
                                                            Using API of Korea Meteorological Administration, it gave information of fine dust to kakao users.
                                                        </h4>
                                                    </CardText>
                                                </CardBody>
                                            </Collapse>
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
                                            <Button className="toggle" color="info" onClick={this.toggle6} style={{ marginBottom: '1rem' }}>More info</Button>
                                            <Collapse isOpen={this.state.collapse6}>
                                                <CardBody>
                                                    <CardText>
                                                        <h4 className="h4">
                                                            I made BlackJack for an assignment when I was in the university.
                                                        </h4>
                                                    </CardText>
                                                </CardBody>
                                            </Collapse>
                                        </Card>
                                    </div>
                                </Col>

                            </Row>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;