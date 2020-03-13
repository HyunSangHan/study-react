import React, { Component } from "react"
import "../../App.css"
import "../../css/Header.css"
import "../../css/Main.css"
import { Link } from "react-router-dom"
import icArrowBack from "../../images/icons/arrow-back.png"

class GalleryHeader extends Component {
  render() {
    return (
      <div className="header-common z-4" style={{ backgroundColor: "#1e1e1e" }}>
        <div className="header-logo ml-3 z-4">
          <Link to="/">
            <img
              src={icArrowBack}
              alt="back"
              height={"40px;"}
              color={"white"}
            />
          </Link>
        </div>
        <div className={"upper g-header"}>Gallery</div>
      </div>
    )
  }
}

export default GalleryHeader
