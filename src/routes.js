import React, { Fragment } from "react"
import { Switch, Route } from "react-router-dom"
import {MainPage} from "./pages/main-page"

export function Routes() {
    return (
        <Fragment>
            <Switch>
                <Route path="/" exact component={MainPage}/>
            </Switch>

        </Fragment>
    )
}