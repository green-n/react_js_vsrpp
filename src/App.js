import UserManagementPage from './pages/UserManagementPage';
import './App.css';
import React, { useEffect, useState } from 'react';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import {Routes,Link, Navigate, Route} from 'react-router-dom'
import { db } from "./firebase";
import { useSelector } from 'react-redux';
import { query, collection, getDocs, where,orderBy } from "firebase/firestore";
import TestPanel from './components/testPanel';

 function  App() {
  const isNotLoged = !useSelector(state => state.isLogedIn)
  // const isPanelShown = useSelector(state => state.isTestPanelShown)
  const [dbData,setDbData] = useState([])
  // const q = query(collection(db, "users"),orderBy('timestamp'))
  // const doc = await getDocs(q);

  // const getStateFromComponent = (state,propState) =>{
  //   setState(state)
  // }
  // const setLogin = () =>{
  //   setLogInfo(false)
  // }

  const getDataFromDb = async () =>{
     const q = query(collection(db, "users"),orderBy('id'))
     const doc = await getDocs(q);
     console.log(doc.docs[0].data())
  }
  getDataFromDb()

  return (<>
      <TestPanel />
      <Routes>
        <Route exact path="/" element = { isNotLoged ? <Navigate to="/logIn"/> : <UserManagementPage /> } />
        <Route path ='/logIn' element={<LogIn />}/>
        <Route path ='/register' element={<Register />}/>
      </Routes>
      {/* <Link to={{pathname: "/logIn"}} >take</Link> */}
      {/* <UserManagementPage state={state} returnInfo = {getStateFromComponent}/>
      
      <Register state={state} returnInfo = {getStateFromComponent}/> */}
    </>
   );
}



export default App;
