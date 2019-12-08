import React, { Component } from "react"
import "../App.css"
import "../css/Header.css"
import "../css/Main.css"
import MaterialIcon from "material-icons-react"
import photoHome from "../images/hea.png"
import { menuNames } from "../content"

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
          &nbsp;
          {/* TODO: contribution 추가 필요 */}
          {menuNames.map((menu, idx) => (
            <a key={idx} className="none" href={`#${menu}`}>
              <div className="font-new font-white">{menu}</div>
            </a>
          ))}
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
                  {menuNames.map((menu, idx) => (
                    <a key={idx} className="none" href={`#${menu}`}>
                      <div
                        className="font-new font-white"
                        onClick={this.clickMenu}
                      >
                        {menu}
                      </div>
                    </a>
                  ))}
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
