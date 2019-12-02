import React, { Component } from "react"
import styled from "styled-components"
import "../App.css"

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 40px;
  color: grey;
  font-size: 1.3rem;
  z-index: 2;
`

class Footer extends Component {
  render() {
    return (
      <FooterDiv className={this.props.bgColorGrey ? "bg-grey" : "bg-white"}>
        <div>Copyright © Designed & Developed by Hyunsang Han</div>
      </FooterDiv>
    )
  }
}

export default Footer
