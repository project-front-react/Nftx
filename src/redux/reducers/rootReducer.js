import changeTheme from './changeTheme'
import {combineReducers} from 'redux'
import swapreducer from './swapreducer';
const rootReducer = combineReducers({
    changeTheme,  swapreducer


})


export default rootReducer;