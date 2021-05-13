import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

const Children = () => {
    // return (
    //     <h1>Children</h1>
    // )
    return (
        <Switch>
            <Route path="/product/children/medicin">
                <Medicin />
            </Route>
            <Route path="/product/children/healthsupply">
                <HealthSupply />
            </Route>
            <Redirect to="/product/children/medicin" />
        </Switch>
    )
}

const Medicin = () => (
    <h2>Medicin</h2>
)

const HealthSupply = () => (
    <h2>HealthSupply</h2>
)

export default Children