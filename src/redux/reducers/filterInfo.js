const filterReducer = (state = "",action) =>{
    switch(action.type){
        case"SET_FILTER": return state=action.info;
        default: return state     
    }
}
export default filterReducer;