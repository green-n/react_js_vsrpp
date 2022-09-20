import UserManagementPage from './pages/UserManagementPage';
import './App.css';
import React, { useEffect, useState } from 'react';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import {Routes,Link, Route} from 'react-router-dom'

function App() {
  const [state,setState] = useState([])
  const getStateFromComponent = (state,propState) =>{
    setState(state)
  }
  return (<>
      <Routes>
        <Route path ='/logIn' element={<LogIn state={state}/>}/>
      </Routes>
      {/* <Link to={{pathname: "/logIn"}} >take</Link> */}
      {/* <UserManagementPage state={state} returnInfo = {getStateFromComponent}/>
      
      <Register state={state} returnInfo = {getStateFromComponent}/> */}
    </>
   );
}



export default App;
