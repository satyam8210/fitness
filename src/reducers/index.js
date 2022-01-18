import getSearchElement from './search';

import {combineReducers} from "redux"

const rootReducer = combineReducers({
    search : getSearchElement 
})

export default rootReducer;