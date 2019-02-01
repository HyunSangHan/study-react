import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../css/Main.css'
import {Grid, Row, Col, Button} from 'react-bootstrap';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import ButtonToolbar from "react-bootstrap/es/ButtonToolbar";

class Main extends Component {
    render() {
        return (
            <div className="body-common z-0">
                <div className="body-under">
                    <img className="fix" src="../images/Me.jpg" alt="my_photo" width="100%"/>
                    <div className="body-under-black fix"/>
                </div>
                <div className="gate font-51">This page is still under construction!
                </div>
                <div className="body-on z-2">

                    <div className="bg-white pb-9">
                        <div className="bg-white">
                            <div className="title-out pt-4 pb-4">
                                <div className="title-in">
                                    <h1 className="font-5 upper">about</h1>
                                </div>
                            </div>
                            <Grid>
                                <Row className="h100percent mt-9">
                                    <Col xs={12} md={6}>
                                        <div>
                                            <img className="photo" src="../images/Me.jpg" alt="my_photo"/>
                                        </div>
                                    </Col>
                                    <Col className="skin" xs={12} md={6}>
                                        <div className="mt-5 align-left ml-5 mr-5 mb-more">
                                            <h2>한현상</h2>
                                            <h3 className="upper mt-3 mb-5">hyunsang han</h3>
                                            <h4><p>가나다라 마바사아 자차카타 파하 가 나다라 마바사아 자차 카타파하~ 간장 공장 공장장 가나다라 마바사아 자차카타 파하 가 나다라 마바사아 자차 카타파하~ 간장 공장 공장장 가나다라 마바사아 자차카타 파하 가 나다라 마바사아 자차 카타파하~ 간장 공장 공장장 </p><p>블라블라</p></h4>
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
                                    <h1 className="font-5 upper">gallery</h1>
                                </div>
                            </div>
                            <Grid>
                                <Col xs={12} md={12}>
                                    <div className="top_gallery">
                                        <div className="flex-gallery-left">
                                            <div>
                                                <img className="each-gallery" src="../images/Me.jpg" alt="gal"/>
                                            </div>
                                            <div>
                                                <img className="each-gallery" src="../images/Me.jpg" alt="gal"/>
                                            </div>
                                            <div>
                                                <img className="each-gallery" src="../images/Me.jpg" alt="gal"/>
                                            </div>
                                        </div>
                                        <div className="flex-gallery-right">
                                            <div>
                                                <img className="each-gallery" src="../images/Me.jpg" alt="gal"/>
                                            </div>
                                            <div>
                                                <img className="each-gallery" src="../images/Me.jpg" alt="gal"/>
                                            </div>
                                            <div>
                                                <img className="each-gallery" src="../images/Me.jpg" alt="gal"/>
                                            </div>
                                        </div>
                                        <div className="flex-gallery-last">
                                            <div>
                                                <img className="each-gallery" src="../images/Me.jpg" alt="gal"/>
                                            </div>
                                            <div>
                                                <img className="each-gallery" src="../images/Me.jpg" alt="gal"/>
                                            </div>
                                            <div>
                                                <img className="each-gallery" src="../images/Me.jpg" alt="gal"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="link-more font-3">
                                        See more >
                                    </div>
                                </Col>
                            </Grid>
                        </div>
                    </div>



                    <div className="bg-white pb-9">
                        <div className="bg-white">
                            <div className="title-out pt-4 pb-4">
                                <div className="title-in">
                                    <h1 className="font-5 upper">timeline</h1>
                                </div>
                            </div>
                            <div className="key-timeline">
                                <Grid>

                                    <Row className="for-line mt-9">
                                        <div className="vertical-line"></div>
                                        <Col className="top-timeline mb-5" xs={12} md={12}>
                                            <div className="img-timeline">
                                                이미지
                                            </div>
                                            <div className="left-timeline">
                                                왼쪽
                                            </div>
                                        </Col>
                                        <Col className="top-timeline mb-5" xs={12} md={12}>
                                            <div className="img-timeline">
                                                이미지
                                            </div>
                                            <div className="right-timeline">
                                                오른쪽
                                            </div>
                                        </Col>
                                        <Col className="top-timeline mb-5" xs={12} md={12}>
                                            <div className="img-timeline">
                                                이미지
                                            </div>
                                            <div className="left-timeline">
                                                왼쪽
                                            </div>
                                        </Col>
                                        <Col className="top-timeline" xs={12} md={12}>
                                            <div className="img-timeline">
                                                이미지
                                            </div>
                                            <div className="right-timeline">
                                                오른쪽
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                        </div>
                    </div>

                    <div className="bg-grey pb-9">
                        <div className="bg-grey">
                            <div className="title-out pt-4 pb-4">
                                <div className="title-in">
                                    <h1 className="font-5 upper">skill set</h1>
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
                                <div className="title-in">
                                    <h1 className="font-5 upper">products</h1>
                                </div>
                            </div>
                            <Grid>
                                <Row className="h100percent mt-9">
                                    <Col xs={12} md={12}>
                                        <div>
                                            여기에 들어감
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
                                    <h1 className="font-5 upper">contact</h1>
                                </div>
                            </div>
                            <Grid>
                                <Row className="h100percent mt-9">
                                    <Col xs={12} md={5}>
                                        <div>
                                            왼쪽부분
                                        </div>
                                    </Col>
                                    <Col xs={12} md={7}>
                                        <div>
                                            오른쪽부분
                                        </div>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Main;