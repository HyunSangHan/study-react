import React, { Component } from "react"
import "../App.css"
import "../css/Main.css"
import "../css/Timeline.css"
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
//import Calculator from './Projects/Calculator';
import { productInfos } from "../content"

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapse: 0
    }
  }

  toggle = idx => () => {
    const prevCollapse = this.state.collapse
    if (prevCollapse & Math.pow(2, idx)) {
      this.setState({ collapse: prevCollapse - Math.pow(2, idx) })
    } else {
      this.setState({ collapse: prevCollapse + Math.pow(2, idx) })
    }
  }

  render() {
    return (
      <>
        <div
          className={this.props.bgColorGrey ? "bg-grey pb-9" : "bg-white pb-9"}
        >
          <div className={this.props.bgColorGrey ? "bg-grey" : "bg-white"}>
            <div className="title-out pt-4 pb-4">
              <div className="title-except">
                <ScrollableAnchor id={"products"}>
                  <h1 className="font-5 font-new">products</h1>
                </ScrollableAnchor>
              </div>
            </div>
            <Grid>
              <Row className="h100percent mt-9">
                {productInfos.map((product, idx) => {
                  return (
                    <Col xs={12} md={6} lg={4} xl={3} key={idx}>
                      <div className="mb-5">
                        <Card>
                          <CardBody>
                            <CardTitle>
                              <h2 className="h2">{product.name}</h2>
                            </CardTitle>
                            <CardSubtitle>
                              <h3 className="h3">{product.period}</h3>
                              <h4 className="h4">{product.skill}</h4>
                            </CardSubtitle>
                          </CardBody>
                          <img
                            width="100%"
                            src={product.thumbnail}
                            alt={product.name}
                          />
                          <Button
                            className="toggle"
                            color="secondary"
                            onClick={this.toggle(idx)}
                            style={{ marginBottom: "1rem" }}
                          >
                            More info
                          </Button>
                          <Collapse
                            isOpen={Boolean(
                              this.state.collapse & Math.pow(2, idx)
                            )}
                          >
                            <CardBody>
                              <CardText className="h4">
                                {product.description}
                              </CardText>
                              {product.outlinks.map((link, idx) => {
                                return (
                                  <CardLink
                                    key={idx}
                                    className={
                                      link.uri ? "font-3" : "font-3 font-grey"
                                    }
                                    href={link.uri ? link.uri : null}
                                    target="_blank"
                                  >
                                    <strong>{link.type}</strong>
                                  </CardLink>
                                )
                              })}
                            </CardBody>
                          </Collapse>
                        </Card>
                      </div>
                    </Col>
                  )
                })}
              </Row>
            </Grid>
          </div>
        </div>
      </>
    )
  }
}

export default Products
