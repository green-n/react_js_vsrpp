import logo from './logo.svg';
import './App.css';
import Adduser from './components/Adduser';
import UserPlaceholder from './components/UserPlaceholder';
import React, { useEffect, useState } from 'react';

function App() {
  const [allInfo,setInfo] = useState([])
  const [userInfo,setUserInfo] = useState({})
  const getForm =(info)=>{
    info.id = allInfo.length
    setUserInfo(info)
    setInfo([...allInfo,info])
    console.log(info)
    console.log("--------------------------------")
  }
   
  // useEffect(()=>{setInfo(allInfo.filter((el)=>{return el!={}}))},[userInfo])
  

  console.log(allInfo)
  return (
    <div className="App">
      <Adduser getForm = {getForm} id={allInfo.length+1}/>
      <UserPlaceholder Users = {allInfo} />
    </div>
  );
}



















// class App extends React.Component{
//   constructor(props){
//   super(props)
//   this.state = {
//     userInfo:[]
//   }
//   }
//   getForm =(info)=>{
//     console.log(this.state.userInfo)
//     console.log(info)
//     this.setState(
//        {userInfo:[...this.state.userInfo,info]}
//     )
    
//   }

//   render(){
//       return (
//     <div className="App">
//       <Adduser getForm = {this.getForm} />
//     </div>
//   );

//   }
// }

export default App;
