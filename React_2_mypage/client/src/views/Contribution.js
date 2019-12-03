import React, { Component } from "react"
import "../App.css"
import "../css/Main.css"
import { Grid, Row, Col } from "react-bootstrap"
import ScrollableAnchor from "react-scrollable-anchor"
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Badge
} from "reactstrap"

class Contribution extends Component {
  render() {
    return (
      <>
        <div className="bg-grey pb-9">
          <div className="bg-grey">
            <div className="title-out pt-4 pb-4">
              <div className="title-except">
                <ScrollableAnchor id={"Contribution"}>
                  <h1 className="font-5 font-new">contribution</h1>
                </ScrollableAnchor>
              </div>
            </div>
            <Grid>
              <Row className="h100percent mt-9">
                <Col xs={12} md={12} lg={6} xl={6}>
                  <ListGroup className="mt-3">
                    <ListGroupItem style={{ backgroundColor: "#40c5ef" }}>
                      <ListGroupItemHeading>
                        List group item heading
                      </ListGroupItemHeading>
                      <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus.
                        Maecenas sed diam eget risus varius blandit.
                        <Badge color="primary">Primary</Badge>
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>
                        List group item heading
                      </ListGroupItemHeading>
                      <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus.
                        Maecenas sed diam eget risus varius blandit.
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>
                        List group item heading
                      </ListGroupItemHeading>
                      <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus.
                        Maecenas sed diam eget risus varius blandit.
                      </ListGroupItemText>
                    </ListGroupItem>
                  </ListGroup>{" "}
                </Col>
                <Col xs={12} md={12} lg={6} xl={6}>
                  <ListGroup className="mt-3">
                    <ListGroupItem style={{ backgroundColor: "#40c5ef" }}>
                      <ListGroupItemHeading>
                        List group item heading
                      </ListGroupItemHeading>
                      <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus.
                        Maecenas sed diam eget risus varius blandit.
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>
                        List group item heading
                      </ListGroupItemHeading>
                      <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus.
                        Maecenas sed diam eget risus varius blandit.
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>
                        List group item heading
                      </ListGroupItemHeading>
                      <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus.
                        Maecenas sed diam eget risus varius blandit.
                      </ListGroupItemText>
                    </ListGroupItem>
                  </ListGroup>{" "}
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </>
    )
  }
}

export default Contribution
