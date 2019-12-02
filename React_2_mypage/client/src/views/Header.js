import React, { Component } from "react"
import "../App.css"
import "../css/Header.css"
import "../css/Main.css"
import MaterialIcon from "material-icons-react"
import photoHome from "../images/hea.png"

const menuName = [
  "about",
  "gallery",
  "timeline",
  "skill-set",
  "products",
  "contact"
]

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openMenubar: false
    }
  }

  clickMenu = () => {
    this.setState({
      openMenubar: !this.state.openMenubar
    })
  }

  clickBlackBG = () => {
    this.setState({
      openMenubar: false
    })
  }

  render() {
    return (
      <div className="header-common font-3 z-4">
        <div className="header-logo ml-4 mb-1 z-4">
          <a href="/" target="_self">
            <img src={photoHome} alt="home" height={"14px;"} />
          </a>
        </div>
        <div className="header-menus mr-3">
          {" "}
          {/* TODO: contribution 추가 필요 */}
          <a className="none" href="#About">
            <div className="font-new font-white">about</div>
          </a>
          <a className="none" href="#Gallery">
            <div className="font-new font-white">gallery</div>
          </a>
          <a className="none" href="#Timeline">
            <div className="font-new font-white">timeline</div>
          </a>
          <a className="none" href="#SkillSet">
            <div className="font-new font-white">skill-set</div>
          </a>
          <a className="none" href="#Products">
            <div className="font-new font-white">products</div>
          </a>
          <a className="none" href="#Contact">
            <div className="font-new font-white">contact</div>
          </a>
        </div>

        <div className="header-hamburger mr-3 z-4">
          <div className="z-4 mt-2" onClick={this.clickMenu}>
            <MaterialIcon icon="menu" size="medium" color="white" />
          </div>
        </div>
        {this.state.openMenubar && (
          <div className="for-hamburger">
            <div className="header-hamburger-open z-4">
              <div className="header-hamburger-limit z-4">
                <div className="header-hamburger-menus z-4">
                  <a className="none" href="#about">
                    <div
                      className="font-new font-white"
                      onClick={this.clickMenu}
                    >
                      about
                    </div>
                  </a>
                  <a className="none" href="#gallery">
                    <div
                      className="font-new font-white"
                      onClick={this.clickMenu}
                    >
                      gallery
                    </div>
                  </a>
                  <a className="none" href="#timeline">
                    <div
                      className="font-new font-white"
                      onClick={this.clickMenu}
                    >
                      timeline
                    </div>
                  </a>
                  <a className="none" href="#skill-set">
                    <div
                      className="font-new font-white"
                      onClick={this.clickMenu}
                    >
                      skill-set
                    </div>
                  </a>
                  <a className="none" href="#products">
                    <div
                      className="font-new font-white"
                      onClick={this.clickMenu}
                    >
                      products
                    </div>
                  </a>
                  <a className="none" href="#contact">
                    <div
                      className="font-new font-white"
                      onClick={this.clickMenu}
                    >
                      contact
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="body-under-black fix z-2"
              onClick={this.clickBlackBG}
            />
          </div>
        )}
      </div>
    )
  }
}

export default Header
