import React, { Component, Fragment } from "react";
import compose from "recompose/compose"
import "./App.css";
import { connect } from "react-redux";

import { Routes } from "./routes";

class AppComponent extends Component {

    render() {
        return (
            <Fragment>
                <Routes />
            </Fragment>
        );
    }
}


const mapStateToProps = state => ({
    location: state.router.location
});
const mapDispatchToProps = dispatch => {}

export const App = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
)(AppComponent)
