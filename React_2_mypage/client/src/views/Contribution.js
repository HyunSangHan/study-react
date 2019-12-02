import React, { Component } from "react"
import "../App.css"
import "../css/Main.css"
import { Grid, Row, Col } from "react-bootstrap"
import ScrollableAnchor from "react-scrollable-anchor"
import {
  Card,
  CardBody,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
  Collapse,
  Button
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
                <Col xs={12} md={6} lg={4} xl={3}>
                  오픈소스 컨트리뷰션
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
