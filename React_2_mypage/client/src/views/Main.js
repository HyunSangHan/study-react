import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Contact from './Contact.js';
import Products from './Products.js';
import '../App.css';
import '../css/Main.css';
import '../css/Timeline.css';
import Timeline from '../views/Timeline.js';
import { configureAnchors } from 'react-scrollable-anchor'
import SkillSet from "./SkillSet";
import About from "./About";
import Gallery from "./Gallery";
import {Grid} from 'react-bootstrap';

configureAnchors({offset: -140, scrollDuration: 1000})

class Main extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="body-common z-0">
                    <div className="body-under center">
                        <img className="fix bg-large" src="../images/sea.jpg" alt="my_photo" width="100%"/>
                        <img className="fix bg-medium" src="../images/sea1.jpg" alt="my_photo" width="100%"/>
                        <img className="fix bg-small" src="../images/sea2.jpg" alt="my_photo" width="100%"/>
                        <div className="body-under-black fix"/>
                    </div>
                    <div className="gate center">
                        <div>

                        <Grid>
                                <img className="gate-img" src="../images/hsforgate.png" alt="explain" />
                                <div className="gate-txt font-3 font-white mt-5">
                                    You can access <i>this.state(.about, .gallery, .timeline, .skill-set, .products) </i>of
                                    <font color="#59d1fb"> <b>H</b></font>YUN<font color="#59d1fb"><b>S</b></font>ANG through this site.
                                    I will update my status through <i>this.setState </i>
                                    whenever there is a change.
                                </div>
                        </Grid>
                        </div>
                    </div>
                    <a href='#About'>
                        <div className="arrow center">
                            <img src="../images/arrow-down.png" alt="arrow-down" />
                        </div>
                    </a>
                    <div className="body-on z-2">
                        <About/>
                        <Gallery/>
                        <Timeline/>
                        <SkillSet/>
                        <Products/>
                        <Contact/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Main;