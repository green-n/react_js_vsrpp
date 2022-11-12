import loggedReducer from './isNotLoggedIn'
import { combineReducers } from 'redux'
import usesrInfoReduser from './userInfo';
import testPanelShowReducer from './testPanelInfo';
import setLogedUserReducer from './setLogedUser';
import userCountReducer from './userCount';

const allReducers = combineReducers({
    isLogedIn: loggedReducer,
    userInfo: usesrInfoReduser,
    isTestPanelShown: testPanelShowReducer,
    setLogedUser:setLogedUserReducer,
    userCount: userCountReducer,
})

export default allReducers;