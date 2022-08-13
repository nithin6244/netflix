import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import Layout from './pages/Layout'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Layout />
            </Route>
            <Route exact path="/search">
                <div>Hello</div>
            </Route>
        </Switch>
    );
};

export default Routes;
