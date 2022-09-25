const testPanelShowReducer = ( state = false,action) => {
    switch(action.type){
        case 'SHOW_TEST_PANEL': return true;
        case 'HIDE_TEST_PANEL': return false;
        default: return state;
    }
}

export default testPanelShowReducer;