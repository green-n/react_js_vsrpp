const setLogedUserReducer = (state = {},action) => {
    switch(action.type){
        case 'SET_THIS_USER_AS_LOGED_IN': state = action.user;
        default: return state       
    }
    
}

export default setLogedUserReducer