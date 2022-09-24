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
export const deleteElmByEmail = (emailForRemoval) =>{
    return {
        type:'REMOVE_USER_INFO',
        emailForRemoval: emailForRemoval
    }
}

