const usesrInfoReduser =(state = [],action)=>{
    switch(action.type){
        case 'ADD_USERS_INFO': return [...state,action.info];
        case 'REMOVE_USER_INFO': return state.filter(el => el.email != action.emailForRemoval);
        default: return state
    }
    
}

export default usesrInfoReduser

  
  