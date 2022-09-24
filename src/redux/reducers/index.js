import loggedReducer from './isNotLoggedIn'
import { combineReducers } from 'redux'
import usesrInfoReduser from './userInfo';

const allReducers = combineReducers({
    isLogedIn: loggedReducer,
    userInfo: usesrInfoReduser
})

export default allReducers;