import React, { Component } from 'react';
import '../App.css';
import '../css/Header.css'
import '../css/Main.css'
import MaterialIcon from 'material-icons-react';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
          openMenubar : false
        }
    }
    clickMenu =() =>() =>{
        this.setState({
            openMenubar : !this.state.openMenubar
        });
    }

    clickBlackBG =() =>() =>{
        this.setState({
            openMenubar : false
        });
    }

    render() {
        return (
            <div className="header-common font-3 z-4">
                <div className="header-logo ml-3 z-4">
                    <a href = "/" target="_self">
                        <img src = "../images/hea.png" alt = "home" height={"20px;"}/>
                    </a>
                </div>
                <div className="header-menus mr-3">
                    <a className="none" href='#About'><div className="upper">about</div></a>
                    <a className="none" href='#Gallery'><div className="upper">gallery</div></a>
                    <a className="none" href='#Timeline'><div className="upper">timeline</div></a>
                    <a className="none" href='#SkillSet'><div className="upper">skill set</div></a>
                    <a className="none" href='#Products'><div className="upper">products</div></a>
                    <a className="none" href='#Contact'><div className="upper">contact</div></a>
                </div>

                <div className="header-hamburger mr-3 z-4">
                    <div className="z-4" onClick={this.clickMenu()}>
                        <MaterialIcon icon="menu" size="medium" color="white"/>
                    </div>
                </div>
                {this.state.openMenubar &&
                <div className="for-hamburger">
                    <div className="header-hamburger-open z-4">
                        <div className="header-hamburger-limit z-4">
                            <div className="header-hamburger-menus z-4">
                                <a className="none" href='#About'><div className="upper" onClick={this.clickMenu()}>about</div></a>
                                <a className="none" href='#Gallery'><div className="upper" onClick={this.clickMenu()}>gallery</div></a>
                                <a className="none" href='#Timeline'><div className="upper" onClick={this.clickMenu()}>timeline</div></a>
                                <a className="none" href='#SkillSet'><div className="upper" onClick={this.clickMenu()}>skill set</div></a>
                                <a className="none" href='#Products'><div className="upper" onClick={this.clickMenu()}>products</div></a>
                                <a className="none" href='#Contact'><div className="upper" onClick={this.clickMenu()}>contact</div></a>
                            </div>
                        </div>
                    </div>
                    <div className="body-under-black fix z-2" onClick={this.clickBlackBG()}/>
                </div>
                }
            </div>

        );
    }
}

export default Header;