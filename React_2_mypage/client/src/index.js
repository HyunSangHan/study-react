import "react-app-polyfill/ie11"
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import "bootstrap/dist/css/bootstrap.css"
import ReactGA from "react-ga"
ReactGA.initialize("UA-167500844-1")
ReactGA.pageview(window.location.pathname + window.location.search)

ReactDOM.render(<App />, document.getElementById("root"))

serviceWorker.unregister()
