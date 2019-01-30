import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../css/Header.css'
import {Grid, Row, Col, Button} from 'react-bootstrap';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import ButtonToolbar from "react-bootstrap/es/ButtonToolbar";

class Header extends Component {
    render() {
        return (
            <div className="header-common font-2 z-4">
                <div className="header-logo ml-3">
                    <img src ={logo} alt = "home" height={"40px;"}/>
                </div>
                <div className="header-menus mr-3">
                    <div>ABOUT</div>
                    <div>SKILL SET</div>
                    <div>TIMELINE</div>
                    <div>GALLERY</div>
                    <div>PRODUCT</div>
                    <div>CONTACT</div>
                </div>

                <div className="header-hamburger mr-3">
                    <div>
                        <MaterialIcon icon="menu" size="medium" color="white"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;