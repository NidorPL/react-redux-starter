import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux"
import { connectRouter, routerMiddleware } from "connected-react-router"
import {  ConnectedRouter } from "connected-react-router";
import thunk from "redux-thunk"
import "./index.css";
import rootReducer from "./reducers"
import { App } from "./App";


const history = createBrowserHistory();


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancer(
        applyMiddleware(
            routerMiddleware(history),
        ),
        applyMiddleware(thunk)
    ),
)


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    ,

    document.getElementById("root")
);

// registerServiceWorker();
