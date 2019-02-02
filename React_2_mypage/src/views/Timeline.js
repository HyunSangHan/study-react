import React, { Component } from 'react';
import '../App.css';
import '../css/Main.css';
import '../css/Timeline.css';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import MaterialIcon, {colorPalette} from 'material-icons-react';


class Timeline extends Component {
    render() {
        return (
            <div className="bg-white pb-9">
                <div className="bg-white">
                    <div className="title-out pt-4 pb-4">
                        <div className="title-in">
                            <h1 className="font-5 upper">timeline</h1>
                        </div>
                    </div>
                    <div className="key-timeline font-1">
                        <Grid>
                            <Row className="skin mt-9">
                                <div className="for-line">
                                    <div className="vertical-line"></div>
                                </div>
                                {/*<Col className="top-timeline timeline-margin" xs={12} md={12}>*/}
                                    {/*<div className="img-timeline">*/}
                                        {/*AUG 2018<br/>-<br/>PRESENT*/}
                                    {/*</div>*/}
                                    {/*<div className="left-timeline">*/}
                                        {/*<div className="align-right">*/}
                                            {/*<h2 className="h2 upper">Freelance</h2>*/}
                                            {/*<h3 className="h3 mt-4">Web Developer</h3>*/}
                                            {/*<h4 className="h4">Front-end and Back-end Dev.</h4>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</Col>*/}
                                <Col className="top-timeline timeline-margin" xs={12} md={12}>
                                    <div className="img-timeline">
                                        MAR 2016<br/>-<br/>PRESENT
                                    </div>
                                    <div className="right-timeline">
                                        <div className="align-left">
                                            <h2 className="h2 mb-5">NAVER Corp.</h2>
                                            <h3 className="h3 mt-4">Shopping Search&Display (APR 2018 - PRESENT)</h3>
                                            <h4 className="h4 mb-5">Service planning&Strategy for Naver shopping search</h4>
                                            <h3 className="h3 mt-4">Service Support (MAR 2016 - MAR 2018)</h3>
                                            <h4 className="h4">Managing HR(compensation, recruiting) of Service Committee<br/>Supporting CEO and growth</h4>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="top-timeline timeline-margin" xs={12} md={12}>
                                    <div className="img-timeline">
                                        MAR 2014<br/>-<br/>FEB 2016
                                    </div>
                                    <div className="left-timeline">
                                        <div className="align-right">
                                            <h2 className="h2"> R.O.K. Marine Corps</h2>
                                            <h3 className="h3 mt-4">2nd Infantry Division</h3>
                                            <h4 className="h42">Platoon leader and Operation officer (First Lieutenant)</h4>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="top-timeline timeline-margin" xs={12} md={12}>
                                    <div className="img-timeline">
                                        MAR 2010<br/>-<br/>FEB 2014
                                    </div>
                                    <div className="right-timeline">
                                        <div className="align-left">
                                            <h2 className="h2 mb-5">Seoul National Univ.</h2>
                                            <h3 className="h3 mt-4">Rural Systems Engineering</h3>
                                            <h4 className="h4 mb-5">Bachelor of Engineering</h4>
                                            <h3 className="h3 mt-4">SNU American Football Team, Green Terrors</h3>
                                            <h4 className="h4 mb-5">Tight end, Defensive end</h4>
                                            <h3 className="h3 mt-4">101 ROTC</h3>
                                            <h4 className="h4">Military cadet</h4>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="top-timeline timeline-margin" xs={12} md={12}>
                                    <div className="img-timeline">
                                        MAR 1998<br/>-<br/>FEB 2010
                                    </div>
                                    <div className="left-timeline">
                                        <div className="align-right">
                                            <h2 className="h2 mb-5">In public education</h2>
                                            <h3 className="h3 mt-4">Pungmu High School (MAR 2007 - FEB 2010)</h3>
                                            <h4 className="h4 mb-5">Student body president</h4>
                                            <h3 className="h3 mt-4">Pungmu Middle School (MAR 2004 - FEB 2007)</h3>
                                            <h3 className="h3 mt-4">Pungmu Elementary School (DEC 2002 - FEB 2004)</h3>
                                            <h3 className="h3 mt-4">Geonji Elementary School (MAR 1998 - DEC 2002)</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="top-timeline" xs={12} md={12}>
                                    <div className="img-timeline">
                                        SEP 1991
                                    </div>
                                    <div className="right-timeline">
                                        <div className="align-left">
                                            <h2 className="h2 mt-4">Born in Incheon</h2>
                                        </div>
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

export default Timeline;