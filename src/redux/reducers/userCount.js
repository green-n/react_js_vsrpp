
const userCountReducer = (state = 0, action)=>{
    switch(action.type){
        case'INCREMENT_USER_COUNT':return state + 1;
        default: return state
    }
}

export default userCountReducer