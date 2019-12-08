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
import thumbnail1 from "../images/mypage.png"
import thumbnail2 from "../images/calculator.png"
import thumbnail3 from "../images/meeting.png"
import thumbnail4 from "../images/fish.png"
import thumbnail5 from "../images/finedust.png"
import thumbnail6 from "../images/blackjack.png"

const productInfos = [
  {
    thumbnail: thumbnail1,
    name: "this.state.",
    period: "JAN - FEB 2019",
    skill: "ReactJS",
    description:
      "My own profile page for introducing myself especially related to web development. designed and developed by myself.",
    alt: "mypage",
    outlinks: [{ type: "Link", uri: "/" }]
  },
  {
    thumbnail: thumbnail2,
    name: "Web Calculator",
    period: "JAN 2019",
    skill: "ReactJS",
    description:
      "Web based calculator for studying React and HTML+CSS. Optimized for mobile.",
    alt: "calculator",
    outlinks: [{ type: "Link", uri: "http://calculator.dothome.co.kr/" }]
  },
  {
    thumbnail: thumbnail3,
    name: "Meeting Time",
    period: "DEC 2018 - PRESENT",
    skill: "Ruby for Sinatra",
    description:
      "Meeting matching service on a first-come-first-served basis only for workers.",
    alt: "meeting-time",
    outlinks: [
      { type: "Github", uri: "https://github.com/HyunSangHan/BRGG_Meeting-App" }
    ]
  },
  {
    thumbnail: thumbnail4,
    name: "GoGo Fish",
    period: "SEP 2018 - PRESENT",
    skill: "Ruby for Sinatra / Fuse",
    description: "Kid's habits formation helper service.",
    alt: "gogo-fish",
    outlinks: [
      { type: "Link", uri: "https://bomin.myportfolio.com/invalid" },
      { type: "Github", uri: "https://github.com/zzokokeic/barogagi1gibateam" }
    ]
  },
  {
    thumbnail: thumbnail5,
    name: "Fine dust Bot ",
    period: "AUG 2018",
    skill: "Ruby for Sinatra / Kakao Chatbot / API of KMA",
    description:
      "Chatbot about fine dust in Kakaotalk using openAPI of Korea Meteorological Administration.",
    alt: "dustbot",
    outlinks: []
  },
  {
    thumbnail: thumbnail6,
    name: "BlackJack",
    period: "NOV - DEC 2011",
    skill: "Java",
    description: "Card game for an assignment when I was in the university.",
    alt: "blackjack",
    outlinks: [
      { type: "Github", uri: "https://github.com/HyunSangHan/BlackJack" }
    ]
  }
]

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
                            alt={product.alt}
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
                                    className="font-3"
                                    href={link.uri}
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
