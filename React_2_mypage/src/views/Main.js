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
                </div>
                <div className="gate font-4">이 페이지는 아직 공사중입니다!
                </div>
                <div className="body-on z-3">
                    <div className="bg-white pb-9">
                        <div className="bg-white">
                            <div className="title-out pt-4 pb-4">
                                <div className="title-in">
                                    <h1 className="font-5">ABOUT</h1>
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
                                                    <img className ="link-icon" src="../../images/Me.jpg" />
                                                </a>
                                                <a href = "https://www.linkedin.com/in/%ED%98%84%EC%83%81-%ED%95%9C-971604178" target = "_blank">
                                                    <img className ="link-icon" src="../../images/Me.jpg" />
                                                </a>
                                                <a href = "https://www.facebook.com/gustkd3" target = "_blank">
                                                    <img className ="link-icon" src="../../images/Me.jpg" />
                                                </a>
                                                <a href = "https://www.instagram.com/phenom_0901" target = "_blank">
                                                    <img className ="link-icon" src="../../images/Me.jpg" />
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
                                    <h1 className="font-5">SKILL SET</h1>
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

                    <div className="bg-white">
                        <Grid>
                            <Row className="h100percent">
                                <Col className="timeline" xs={6} md={4}>
                                    TIMELINE 설명1(왼쪽)
                                </Col>
                                <Col className="timeline" xs={6} md={4}>
                                    TIMELINE 가운데
                                </Col>
                                <Col className="timeline" xs={6} md={4}>
                                    TIMELINE 설명2(오른쪽)
                                </Col>
                            </Row>
                        </Grid>


                            <div className="bg-grey pb-9">
                                <div className="bg-grey">
                                    <div className="title-out pt-4 pb-4">
                                        <div className="title-in">
                                            <h1 className="font-5">GALLERY</h1>
                                        </div>
                                    </div>
                                    <Grid>
                                        <Col xs={4} md={12}>
                                            <div className="top_gallery">
                                                <div className="flex-gallery">
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
                                                <div className="flex-gallery">
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
                                                <div className="flex-last">
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
                                            <div className="more font-3">
                                                See more >
                                            </div>
                                        </Col>
                                    </Grid>
                                </div>
                            </div>


                        <Grid>
                            <Row className="h100percent">
                                <Col className="rest" xs={12} md={12}>
                                    프로덕트
                                </Col>
                            </Row>
                        </Grid>

                        <Grid>
                            <Row className="h100percent">
                                <Col className="rest" xs={12} md={12}>
                                    컨택
                                </Col>
                            </Row>
                        </Grid>

                    </div>
                </div>
            </div>
        );
    }
}

export default Main;