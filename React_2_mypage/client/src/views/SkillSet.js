import React, { Component } from 'react';
import '../App.css';
import '../css/Main.css';
import {Grid, Row, Col} from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor'


class SkillSet extends Component {
    render() {
        return (
            <div className="App">
                <div className="bg-grey pb-9">
                    <div className="bg-grey">
                        <div className="title-out pt-4 pb-4">
                            <div className="title-in">
                                <ScrollableAnchor id={'SkillSet'}>
                                    <h1 className="font-5 font-new">skill-set</h1>
                                </ScrollableAnchor>

                            </div>
                        </div>
                        <Grid>
                            <Row className="h100percent mt-9">
                                <Col xs={12} md={4}>
                                    <div className="flex-center h-100">
                                        <img className="skill-react" src="../images/React.png" alt="React Javascript"/>
                                    </div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <div className="flex-center h-100">
                                        <img className="skill-django"  src="../images/Django.png" alt="Django Python"/>
                                    </div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <div className="flex-center h-100">
                                        <img className="skill-sinatra"  src="../images/Sinatra.png" alt="Sinatra Ruby"/>
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

export default SkillSet;