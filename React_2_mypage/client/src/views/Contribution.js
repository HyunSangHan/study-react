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
import { contributionInfos } from "../content"

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

const ContentWrapper = ({ repositoryName, contributionSets }) => {
  return (
    <Col xs={12} md={12} lg={6} xl={6}>
      <ListGroup className="mt-6">
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
          View it on github
        </a>
      </ListGroupItemText>
    </ListGroupItemCustomContent>
  )
}

const Contribution = ({ bgColorGrey }) => {
  return (
    <>
      <div className={bgColorGrey ? "bg-grey pb-9" : "bg-white pb-9"}>
        <div className={bgColorGrey ? "bg-grey" : "bg-white"}>
          <div className="title-out pt-4 mb--5">
            <div className="title-except">
              <ScrollableAnchor id={"contributions"}>
                <h1 className="font-5 font-new">contributions</h1>
              </ScrollableAnchor>
            </div>
          </div>
          <Grid>
            <Row className="h100percent mt-9">
              <div>
                {contributionInfos.map((datum, idx) => (
                  <ContentWrapper
                    key={idx}
                    repositoryName={datum.repositoryName}
                    contributionSets={datum.contributionSets}
                  />
                ))}
              </div>
            </Row>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default Contribution
