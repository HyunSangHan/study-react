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
import styled from "styled-components"

const ListGroupItemCustomTitle = styled(ListGroupItem)`
  border: 2px solid #fafafa !important;
  background-color: #1e1e1e !important;
  color: #fff !important;
  padding: 1.5rem 1.25rem 1.25rem !important;
  h5 {
    font-size: 2rem !important;
  }
`

const ListGroupItemCustomContent = styled(ListGroupItem)`
  border: 2px solid #fafafa !important;
  background-color: #fff !important;
  padding: 1.5rem 1.25rem !important;
  h5 {
    font-size: 1.5rem !important;
  }
  p {
    text-decoration: underline;
  }
`

const BadgeMerged = styled(Badge)`
  margin-left: 4px !important;
  background-color: #6f42c1 !important;
  color: #fff !important;
`

const BadgeOpen = styled(Badge)`
  margin-left: 4px !important;
  background-color: #2cbe4e !important;
  color: #fff !important;
`

const BadgeClosed = styled(Badge)`
  margin-left: 4px !important;
  background-color: #cb2431 !important;
  color: #fff !important;
`

class Contribution extends Component {
  render() {
    return (
      <>
        <div className="bg-grey pb-9">
          <div className="bg-grey">
            <div className="title-out pt-4 pb-4">
              <div className="title-except">
                <ScrollableAnchor id={"contribution"}>
                  <h1 className="font-5 font-new">contribution</h1>
                </ScrollableAnchor>
              </div>
            </div>
            <Grid>
              <Row className="h100percent mt-9">
                <Col xs={12} md={12} lg={6} xl={6}>
                  <ListGroup className="mt-3">
                    <ListGroupItemCustomTitle>
                      <ListGroupItemHeading>MochaJs</ListGroupItemHeading>
                    </ListGroupItemCustomTitle>
                    <ListGroupItemCustomContent>
                      <ListGroupItemHeading>
                        Add a description for installing GraphicsMagick or
                        ImageMagick in docs/README.md
                        <BadgeMerged>Merged</BadgeMerged>
                      </ListGroupItemHeading>
                      <ListGroupItemText>
                        <a
                          href="https://github.com/mochajs/mocha/pull/4045"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          view it on github
                        </a>
                      </ListGroupItemText>
                    </ListGroupItemCustomContent>
                    <ListGroupItemCustomContent>
                      <ListGroupItemHeading>
                        Change sh to bash for code block in docs/index.md
                        <BadgeMerged>Merged</BadgeMerged>
                      </ListGroupItemHeading>
                      <ListGroupItemText>
                        <a
                          href="https://github.com/mochajs/mocha/pull/4066"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          view it on github
                        </a>
                      </ListGroupItemText>
                    </ListGroupItemCustomContent>
                  </ListGroup>
                  &nbsp;
                </Col>
                <Col xs={12} md={12} lg={6} xl={6}>
                  <ListGroup className="mt-3">
                    <ListGroupItemCustomTitle>
                      <ListGroupItemHeading>
                        Reactjs / ko.reactjs.org
                      </ListGroupItemHeading>
                    </ListGroupItemCustomTitle>
                    <ListGroupItemCustomContent>
                      <ListGroupItemHeading>
                        Change sentence on hook-intro
                        <BadgeMerged>Merged</BadgeMerged>
                      </ListGroupItemHeading>
                      <ListGroupItemText>
                        <a
                          href="https://github.com/reactjs/ko.reactjs.org/pull/188"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          view it on github
                        </a>
                      </ListGroupItemText>
                    </ListGroupItemCustomContent>
                  </ListGroup>
                  &nbsp;
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
