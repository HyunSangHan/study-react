import React from "react"
import "../App.css"
import "../css/Main.css"
import styled from "styled-components"
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
  border: 1px solid #fafafa !important;
  background-color: #1e1e1e !important;
  color: #fff !important;
  padding: 1.5rem 1.25rem 1.25rem !important;
  h5 {
    font-size: 2rem !important;
  }
`

const ListGroupItemCustomContent = styled(ListGroupItem)`
  border: 1px solid #fafafa !important;
  background-color: #fff !important;
  padding: 2rem 1.25rem !important;
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
        title: "Fix docs.watch for the API docs(#4060)",
        uri: "https://github.com/mochajs/mocha/pull/4061",
        prStatus: "Open",
        reviewStatus: "Approved",
        releaseStatus: ""
      },
      {
        title: "Change sh to bash for code block in docs/index.md",
        uri: "https://github.com/mochajs/mocha/pull/4066",
        prStatus: "Merged",
        reviewStatus: "",
        releaseStatus: ""
      },
      {
        title: "Add script to check unit test coverage",
        uri: "https://github.com/mochajs/mocha/pull/4076",
        prStatus: "Open",
        reviewStatus: "Approved",
        releaseStatus: ""
      },
      {
        title: "Use light color scheme on Mocha API document",
        uri: "https://github.com/mochajs/mocha-docdash/pull/3",
        prStatus: "Open",
        reviewStatus: "",
        releaseStatus: ""
      },
      {
        title: "Adjust white space for view on mobile",
        uri: "https://github.com/mochajs/mocha-docdash/pull/4",
        prStatus: "Open",
        reviewStatus: "",
        releaseStatus: ""
      }
    ]
  },
  {
    repositoryName: "ReactJs / ko.reactjs.org",
    contributionSets: [
      {
        title: "Change sentence on hook-intro",
        uri: "https://github.com/reactjs/ko.reactjs.org/pull/188",
        prStatus: "Merged",
        reviewStatus: "",
        releaseStatus: "Released"
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
        <br /> {title}
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
              <ScrollableAnchor id={"contributions"}>
                <h1 className="font-5 font-new">contributions</h1>
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
