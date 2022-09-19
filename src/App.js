import UserManagementPage from './pages/UserManagementPage';
import './App.css';
import React, { useEffect, useState } from 'react';
import LogIn from './pages/LogIn';
import Register from './pages/Register';

function App() {
  const [state,setState] = useState([])
  const getStateFromComponent = (state,propState) =>{
    setState(state)
  }
  return (<>

      <UserManagementPage state={state} returnInfo = {getStateFromComponent}/>
      {/* <LogIn state={state}/> */}
      <Register state={state} returnInfo = {getStateFromComponent}/>
    </>
   );
}



export default App;
