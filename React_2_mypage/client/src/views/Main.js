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
                    <div className="body-under">
                        <img className="fix bg-large" src="../images/sea.jpg" alt="my_photo" width="100%"/>
                        <img className="fix bg-small" src="../images/sea2.jpg" alt="my_photo" width="100%"/>
                        <div className="body-under-black fix"/>
                    </div>
                    <div className="gate">
                        <Grid>
                            <img className="gate-img" src="../images/hsforgate.png" alt="explain" />
                            <div className="gate-txt font-3 font-white mt-5">
                                You can access this.state(.about, .gallery, .timeline, .skill-set, .products) of
                                <font color="#59d1fb"> H</font>YUN<font color="#59d1fb">S</font>ANG through this site.
                                I will update my status through this.setState
                                whenever there is a change.
                            </div>
                        </Grid>
                    </div>
                    {/*<div className="gate_on font-52">To iterate is human,*/}
                    {/*</div>*/}
                    {/*<div className="gate_under font-51">To recurse divine.*/}
                    {/*</div>*/}
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