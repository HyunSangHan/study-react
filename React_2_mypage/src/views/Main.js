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
                </div>
                <div className="gate font-4">이 페이지는 아직 공사중입니다!
                </div>
                <div className="body-on font-2 z-3">
                    <div className="bg-white font-4">
                        <div className="title-out1 pt-3">
                            <div className="title-in1">
                                <h1>ABOUT</h1>
                            </div>
                        </div>
                        <Grid>
                            <Row className="h100percent mt-5">
                                <Col xs={12} md={5} mdOffset={1}>
                                    <div>
                                        <img className="photo" src="../images/Me.jpg" alt="my_photo"/>
                                    </div>
                                </Col>
                                <Col xsOffset={1} mdHidden>
                                </Col>
                                <Col xs={11} md={6}>
                                    <div className="mt-5 align-left ml-5 mr-5">
                                        <h2>한현상</h2>
                                        <h3 className="upper mt-3 mb-5">hyunsang han</h3>
                                        <h4><p>가나다라 마바사아 자차카타 파하 가 나다라 마바사아 자차 카타파하~ 간장 공장 공장장 가나다라 마바사아 자차카타 파하 가 나다라 마바사아 자차 카타파하~ 간장 공장 공장장 가나다라 마바사아 자차카타 파하 가 나다라 마바사아 자차 카타파하~ 간장 공장 공장장 </p><p>블라블라</p></h4>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                    <div className="bg-grey">
                        <Grid>
                            <Row className="h100percent">
                                <Col className="rest" xs={12} md={12}>
                                    스킬셋
                                </Col>
                            </Row>
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
                            <Row className="h100percent">
                                <Col className="rest" xs={12} md={12}>
                                    갤러리
                                </Col>
                            </Row>
                            <Row className="h100percent">
                                <Col className="rest" xs={12} md={12}>
                                    프로덕트
                                </Col>
                            </Row>
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