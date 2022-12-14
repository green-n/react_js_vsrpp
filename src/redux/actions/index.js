export const logIn = () =>{
    return {
        type:'SING_IN'
    }
}

export const logOut = () =>{
    return {
        type:'LOG_OUT'
    }
}

export const addUserInfo = (info) =>{
    return {
        type:'ADD_USERS_INFO',
        info: info
    }
}

export const deleteElmById = (id) =>{
    return {
        type:'REMOVE_USER_INFO',
        id: id
    }
}

export const showTestPanel = () =>{
    return{
        type:'SHOW_TEST_PANEL'
    }
}

export const hideTestPanel = () =>{
    return{
        type:'HIDE_TEST_PANEL'
    }
}

export const setThisUser = (user) =>{
    return{
        type:'SET_THIS_USER_AS_LOGED_IN',
        user: user
    }
}

export const addNewUserCount = () => {
    return {
        type: 'INCREMENT_USER_COUNT'
    }
}


export const setStateToInfoFromDb = (info) => {
    return {
        type: 'SET_USERS_TO_STATE_FROM_DB',
        info: info
    }
}

export const getPlebsFromDb = (info) => {
    return {
        type: 'SET_USERS_TO_STATE_FROM_DB',
        info: info
    }
}

export const setFilter = (info) =>{
    return {
        type: 'SET_FILTER',
        info: info
    }
}

