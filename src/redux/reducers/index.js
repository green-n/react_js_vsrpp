import loggedReducer from './isNotLoggedIn'
import { combineReducers } from 'redux'
import usesrInfoReduser from './userInfo';
import testPanelShowReducer from './testPanelInfo';
import setLogedUserReducer from './setLogedUser';

const allReducers = combineReducers({
    isLogedIn: loggedReducer,
    userInfo: usesrInfoReduser,
    isTestPanelShown: testPanelShowReducer,
    setLogedUser:setLogedUserReducer
})

export default allReducers;