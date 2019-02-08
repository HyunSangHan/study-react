import React, { Component } from 'react';
import '../App.css';
import '../css/Main.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor'
import axios from "axios";


class Contact extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()

        const { name, email, phone, message } = this.state
        await axios.post('api/form', {
            name,
            email,
            phone,
            message
        })
    }

    render() {
        return (
            <div className="bg-grey pb-9">
                <div className="bg-grey">

                    <Grid>
                        <Row className="h100percent mt-4">
                            <Col className="pb-5" xs={12} md={5}>
                                <div className="title-out pb-4">
                                    <div>
                                        <div className="title-in">
                                            <ScrollableAnchor id={'Contact'}>
                                                <h1 className="font-5 upper">contact</h1>
                                            </ScrollableAnchor>
                                        </div>
                                        {/*<div className="font-2 mt-6">*/}
                                        {/*<div className="mt-3">*/}
                                        {/*<MaterialIcon icon="place" color="black"/>*/}
                                        {/*<a href = "https://goo.gl/maps/AVxk24wM6P92" target = "_blank">*/}
                                        {/*<div className="ml-3">*/}
                                        {/*NAVER Green Factory*/}
                                        {/*</div>*/}
                                        {/*</a>*/}
                                        {/*</div>*/}
                                        {/*<div className="mt-3">*/}
                                        {/*<MaterialIcon icon="phone_iphone" color="black"/>*/}
                                        {/*<div className="ml-3">*/}
                                        {/*+82)10-4377-6423*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="mt-3">*/}
                                        {/*<MaterialIcon icon="email" color="black"/>*/}
                                        {/*<div className="ml-3">*/}
                                        {/*gustkd3@gmail.com*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>

                            </Col>
                            <Col xs={10} md={5}>
                                <div className="align-left">
                                    <Form onSubmit={this.handleSubmit} className="font-3 ml-4 mr-4">
                                        <FormGroup className="mb-4">
                                            <Label for="name">Name</Label>
                                            <Input className="contact-line" type="text" name="name" id="name" bsSize="lg" placeholder="Your Name" onChange={this.handleChange} />
                                        </FormGroup>
                                        <FormGroup className="mb-4">
                                            <Label for="email">Email</Label>
                                            <Input className="contact-line" type="email" name="email" id="email" bsSize="lg" placeholder="Your Email Address" onChange={this.handleChange} />
                                        </FormGroup>
                                        <FormGroup className="mb-4">
                                            <Label for="phone">Phone</Label>
                                            <Input className="contact-line" type="text" name="phone" id="phone" bsSize="lg" placeholder="Your Phone Number" onChange={this.handleChange} />
                                        </FormGroup>
                                        <FormGroup className="mb-4">
                                            <Label for="message">Message</Label>
                                            <Input className="contact-line" type="textarea" name="text" id="exampleText" bsSize="lg" placeholder="Your Message" onChange={this.handleChange} />
                                        </FormGroup>
                                        <Button className="font-2" color="primary" size="lg" >Submit</Button>
                                    </Form>
                                </div>
                            </Col>
                        </Row>

                    </Grid>
                </div>
            </div>
        );
    }
}

export default Contact;