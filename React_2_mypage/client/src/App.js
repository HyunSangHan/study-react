import React, { Component } from "react"
import "./App.css"
import Main from "./views/Main.js"
import GalleryPage from "./views/Galleries/GalleryPage.js"
import Calculator from "./views/Projects/Calculator"
import { BrowserRouter, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Main} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/calculator" component={Calculator} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
