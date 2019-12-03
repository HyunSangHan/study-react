import React from "react"
import "../App.css"
import "../css/Main.css"
import styled, { css } from "styled-components"
import { Grid, Row, Col } from "react-bootstrap"
import ScrollableAnchor from "react-scrollable-anchor"
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Badge
} from "reactstrap"

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

const BadgeCustom = styled(Badge)`
  margin: 0 0.25rem 0.5rem !important;

  &.Merged {
    background-color: #6f42c1 !important;
    color: #fff !important;
  }
  &.Open {
    background-color: #2cbe4e !important;
    color: #fff !important;
  }
  &.Closed {
    background-color: #cb2431 !important;
    color: #fff !important;
  }
  &.Approved {
    background-color: #fff !important;
    color: #6f42c1 !important;
    border: 1px solid #6f42c1 !important;
  }
  &.Released {
    background-color: #fff !important;
    color: #1e1e1e !important;
    border: 1px solid #1e1e1e !important;
  }
  &.ChangesRequested {
    background-color: #fff !important;
    color: #cb2431 !important;
    border: 1px solid #cb2431 !important;
  }
`

const data = [
  {
    repositoryName: "MochaJS",
    contributionSets: [
      {
        title:
          "Add a description for installing GraphicsMagick or ImageMagick in docs/README.md",
        uri: "https://github.com/mochajs/mocha/pull/4045",
        prStatus: "Merged",
        reviewStatus: "",
        releaseStatus: ""
      },
      {
        title: "Change sh to bash for code block in docs/index.md",
        uri: "https://github.com/mochajs/mocha/pull/4066",
        prStatus: "Merged",
        reviewStatus: "",
        releaseStatus: ""
      }
    ]
  },
  {
    repositoryName: "Reactjs / ko.reactjs.org",
    contributionSets: [
      {
        title: "Change sentence on hook-intro",
        uri: "https://github.com/reactjs/ko.reactjs.org/pull/188",
        prStatus: "Merged",
        reviewStatus: "",
        releaseStatus: ""
      }
    ]
  }
]

const ContentWrapper = ({ repositoryName, contributionSets }) => {
  return (
    <Col xs={12} md={12} lg={6} xl={6}>
      <ListGroup className="mt-3">
        <ListGroupItemCustomTitle>
          <ListGroupItemHeading>{repositoryName}</ListGroupItemHeading>
        </ListGroupItemCustomTitle>

        {contributionSets.map((contribution, idx) => {
          return (
            <ContributionContent
              key={idx}
              title={contribution.title}
              uri={contribution.uri}
              prStatus={contribution.prStatus}
              reviewStatus={contribution.reviewStatus}
              releaseStatus={contribution.releaseStatus}
            />
          )
        })}
      </ListGroup>
    </Col>
  )
}

const ContributionContent = props => {
  const { title, uri, reviewStatus, prStatus, releaseStatus } = props
  console.log(prStatus)
  return (
    <ListGroupItemCustomContent>
      <ListGroupItemHeading>
        {prStatus && <BadgeCustom className={prStatus}>{prStatus}</BadgeCustom>}
        {reviewStatus && (
          <BadgeCustom className={reviewStatus}>{reviewStatus}</BadgeCustom>
        )}
        {releaseStatus && (
          <BadgeCustom className={releaseStatus}>{releaseStatus}</BadgeCustom>
        )}
        <br />
        {title}
      </ListGroupItemHeading>
      <ListGroupItemText>
        <a href={uri} target="_blank" rel="noopener noreferrer">
          view it on github
        </a>
      </ListGroupItemText>
    </ListGroupItemCustomContent>
  )
}

const Contribution = props => {
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
              {data.map((datum, idx) => (
                <ContentWrapper
                  key={idx}
                  repositoryName={datum.repositoryName}
                  contributionSets={datum.contributionSets}
                />
              ))}
            </Row>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default Contribution
