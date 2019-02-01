import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../css/Footer.css';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import ButtonToolbar from "react-bootstrap/es/ButtonToolbar";

class Footer extends Component {
    render() {
        return (
            <div className="footer-common font-2 z-2">
                <div>Copyright © Design & Developed by Hyunsang Han</div>
            </div>
        );
    }
}

export default Footer;