import React, { Component } from 'react';
import './App.css';
import Main from './views/Main.js';
import Gallery from './views/Gallery.js';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                        <Route exact path="/" component={Main}/>
                        <Route path="/gallery" component={Gallery}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
