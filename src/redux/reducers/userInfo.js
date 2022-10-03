import { registerWithEmailAndPassword } from "../../firebase";

const usesrInfoReduser =(state = [],action)=>{
    switch(action.type){
        case 'ADD_USERS_INFO': {
            registerWithEmailAndPassword(action.info)
            return [...state,action.info]
        };
        case 'REMOVE_USER_INFO': return state.filter(el => el.email != action.emailForRemoval);
        case 'SET_USERS_TO_STATE_FROM_DB':{
            console.log(action.info)
            return state = action.info};
        default: return state
    }
    
}

export default usesrInfoReduser

  
  