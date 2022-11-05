import {combineReducers} from "redux";
import auth from './authReducers'
import notify from './notifyReducers'

export default combineReducers({
    auth,
    notify
})