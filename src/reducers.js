import { reducer as firstReducer } from "./reducers/first-reducer";
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    firstReducer
});

export default rootReducer