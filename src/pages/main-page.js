import React, { Component } from "react"
import connect from "react-redux/es/connect/connect";
import {compose} from "redux"


export class MainPageContainer extends Component {


    render() {

        return (
           <div>
               runs !
           </div>
        )
    }


}

const mapStateToProps =function(state, props) {
    return {

    }
}
const mapDispatchToProps = {}

export const MainPage = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(MainPageContainer);