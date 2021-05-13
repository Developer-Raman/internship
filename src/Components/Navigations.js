import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Navsection from "./Navsection";
import Home from "./Home.jsx";
import Feedback from "./Feedback.jsx";
import Products from "./Products/Products.js";

const Navigations = () => {
    return (
        <Router>
            
            <Navsection />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/company">
                    <h1>This is our Company.</h1>
                </Route>
                <Route exact path="/contacts">
                    <Feedback />
                </Route>
                <Route path="/product">
                    <Products />
                </Route>
            </Switch>

        </Router>
    )
}

export default Navigations