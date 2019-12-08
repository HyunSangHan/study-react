import React, { Component } from "react"
import "../App.css"
import "../css/Main.css"
import { Grid, Row, Col } from "react-bootstrap"
import ScrollableAnchor from "react-scrollable-anchor"
import { skillSets } from "../content"

class SkillSet extends Component {
  render() {
    return (
      <>
        <div
          className={this.props.bgColorGrey ? "bg-grey pb-9" : "bg-white pb-9"}
        >
          <div className={this.props.bgColorGrey ? "bg-grey" : "bg-white"}>
            <div className="title-out pt-4 pb-4">
              <div className="title-in">
                <ScrollableAnchor id={"skill-set"}>
                  <h1 className="font-5 font-new">skill-set</h1>
                </ScrollableAnchor>
              </div>
            </div>
            <Grid>
              <Row className="h100percent mt-9">
                {skillSets.map((skill, idx) => (
                  <Col key={idx} xs={12} md={4}>
                    <div className="flex-center h-100">
                      <img
                        alt={skill.name}
                        src={skill.logo}
                        className={skill.className}
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Grid>
          </div>
        </div>
      </>
    )
  }
}

export default SkillSet
