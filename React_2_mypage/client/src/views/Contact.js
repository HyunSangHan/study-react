import React, { Component } from "react"
import "../App.css"
import "../css/Main.css"
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap"
import { Grid, Row, Col } from "react-bootstrap"
import ScrollableAnchor from "react-scrollable-anchor"
import axios from "axios"

class Contact extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      modal: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()

    const { name, email, phone, message } = this.state
    await axios
      .post("api/form", {
        name,
        email,
        phone,
        message
      })
      .then(response => {
        this.toggle()
      })
      .catch(e => console.log(e))
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    return (
      <div
        className={this.props.bgColorGrey ? "bg-grey pb-9" : "bg-white pb-9"}
      >
        <div className={this.props.bgColorGrey ? "bg-grey" : "bg-white"}>
          <Grid>
            <Row className="h100percent mt-4">
              <Col className="pb-5" xs={12} md={5}>
                <div className="title-out pb-4">
                  <div>
                    <div className="title-in">
                      <ScrollableAnchor id={"contact"}>
                        <h1 className="font-5 font-new">contact</h1>
                      </ScrollableAnchor>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={10} md={5}>
                <div className="align-left">
                  <Form
                    onSubmit={this.handleSubmit}
                    className="font-3 ml-4 mr-4"
                  >
                    <FormGroup className="mb-4">
                      <Label for="name">Name</Label>
                      <Input
                        className="contact-line"
                        type="text"
                        name="name"
                        id="name"
                        bsSize="lg"
                        placeholder="Your Name"
                        style={
                          this.props.bgColorGrey
                            ? null
                            : { backgroundColor: "#fafafa" }
                        }
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Label for="email">Email</Label>
                      <Input
                        className="contact-line"
                        type="email"
                        name="email"
                        id="email"
                        bsSize="lg"
                        placeholder="Your Email Address"
                        style={
                          this.props.bgColorGrey
                            ? null
                            : { backgroundColor: "#fafafa" }
                        }
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Label for="phone">Phone</Label>
                      <Input
                        className="contact-line"
                        type="text"
                        name="phone"
                        id="phone"
                        bsSize="lg"
                        placeholder="Your Phone Number"
                        style={
                          this.props.bgColorGrey
                            ? null
                            : { backgroundColor: "#fafafa" }
                        }
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Label for="message">Message</Label>
                      <Input
                        className="contact-line"
                        type="textarea"
                        name="message"
                        id="message"
                        bsSize="lg"
                        placeholder="Your Message"
                        style={
                          this.props.bgColorGrey
                            ? null
                            : { backgroundColor: "#fafafa" }
                        }
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <Button
                      onClick={this.toggle}
                      className="font-2 font-bold"
                      style={{
                        backgroundColor: "#40c5ef",
                        borderColor: "#40c5ef",
                        fontWeight: "700"
                      }}
                      size="lg"
                    >
                      Send
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>

            <div>
              <Modal
                isOpen={this.state.modal}
                fade={false}
                toggle={this.toggle}
              >
                <ModalHeader toggle={this.toggle}>
                  Successfully sent
                </ModalHeader>
                <ModalBody className="h4">
                  In fact, this message is not sent to my main mail account. For
                  a quick response, please email me at the address below: &nbsp;
                  <br />
                  gustkd3@gmail.com
                </ModalBody>
                <ModalFooter>
                  <Button
                    className="font-2"
                    color="primary"
                    size="medium"
                    onClick={this.toggle}
                  >
                    OK
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Contact
