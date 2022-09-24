const loggedReducer = (state = false, action) => {
 
    switch(action.type){
        case 'SING_IN':
            return true;
        case 'LOG_OUT':
            return false;
        default: return state
    }
}

export default loggedReducer;