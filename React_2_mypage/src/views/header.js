import React, { Component } from 'react';
import logo from '../logo.svg';
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

    render() {
        return (
            <div className="header-common font-3 z-4">
                <div className="header-logo ml-3 z-4">
                    <img src ={logo} alt = "home" height={"40px;"}/>
                </div>
                <div className="header-menus mr-3">
                    <div className="upper">about</div>
                    <div className="upper">gallery</div>
                    <div className="upper">timeline</div>
                    <div className="upper">skill set</div>
                    <div className="upper">products</div>
                    <div className="upper">contact</div>
                </div>

                <div className="header-hamburger mr-3 z-4" onClick={this.clickMenu()}>
                    <div className="z-4">
                        <MaterialIcon icon="menu" size="medium" color="white"/>
                    </div>
                </div>
                {this.state.openMenubar &&
                <div className="for-hamburger">
                    <div className="header-hamburger-open z-4">
                        <div className="header-hamburger-limit z-4">
                            <div className="header-hamburger-menus z-4">
                                <div className="upper">about</div>
                                <div className="upper">gallery</div>
                                <div className="upper">timeline</div>
                                <div className="upper">skill set</div>
                                <div className="upper">products</div>
                                <div className="upper">contact</div>
                            </div>
                        </div>
                    </div>
                    <div className="body-under-black fix z-2"/>
                </div>
                }
            </div>

        );
    }
}

export default Header;