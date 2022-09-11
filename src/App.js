import logo from './logo.svg';
import './App.css';
import Adduser from './components/Adduser';
import { useEffect, useState } from 'react';

function App() {
  const [allInfo,setInfo] = useState([])
  const [userInfo,setUserInfo] = useState({})
  const getForm =(info)=>{
    setUserInfo(info)
  }
  console.log(userInfo)
  // 
  useEffect(()=>{setInfo([...allInfo,userInfo])},userInfo)

  console.log(allInfo)
  return (
    <div className="App">
      <Adduser getForm = {getForm} id={allInfo.length+1}/>
      {}
    </div>
  );
}

export default App;
