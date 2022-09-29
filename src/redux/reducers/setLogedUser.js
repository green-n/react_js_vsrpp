import { logInWithEmailAndPassword } from "../../firebase"

const setLogedUserReducer = async (state = {},action) => {
    switch(action.type){
        case 'SET_THIS_USER_AS_LOGED_IN': {
            console.log(action.user)
            logInWithEmailAndPassword(action.user.email,action.user.password)
            state = action.user};
        default: return state       
    }
    
}

export default setLogedUserReducer