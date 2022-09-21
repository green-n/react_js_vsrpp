import UserManagementPage from './pages/UserManagementPage';
import './App.css';
import React, { useEffect, useState } from 'react';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import {Routes,Link, Navigate, Route} from 'react-router-dom'

function App() {
  const [state,setState] = useState([])
  const [isNotLoged, setLogInfo] = useState(true)
  const getStateFromComponent = (state,propState) =>{
    setState(state)
  }
  const setLogin = () =>{
    setLogInfo(false)
  }
  return (<>
      <Routes>
        <Route exact path="/" element = { isNotLoged ? <Navigate to="/logIn"/> : <UserManagementPage state={state} returnInfo = {getStateFromComponent}/> } />
        <Route path ='/logIn' element={<LogIn state={state} isLogedIn = {setLogin}/>}/>
        <Route path ='/register' element={<Register state={state} isLogedIn = {setLogin} returnInfo = {getStateFromComponent}/>}/>
      </Routes>
      {/* <Link to={{pathname: "/logIn"}} >take</Link> */}
      {/* <UserManagementPage state={state} returnInfo = {getStateFromComponent}/>
      
      <Register state={state} returnInfo = {getStateFromComponent}/> */}
    </>
   );
}



export default App;
