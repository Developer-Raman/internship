import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Children from "./Children"

const Products = () => {
    return (
        <Switch>
            <Route path="/product/children">
                <Children />
            </Route>
            <Route path="/product/adults">
                <h1>Adults</h1>
            </Route>
            <Route path="/product/elder-old">
                <h1>elder</h1>
            </Route>
        </Switch>
    )
}

export default Products