import React, { Component } from 'react';
import './App.css';
import {colorPalette} from 'material-icons-react';
import Header from './views/Header.js';
import Footer from './views/Footer.js';
import Main from './views/Main.js';
import { BrowserRouter, Route, Router, Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Router>
                        <Route path="/" component={Main}/>
                        {/*<Main/>*/}
                    </Router>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
