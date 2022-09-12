import logo from './logo.svg';
import './App.css';
import Adduser from './components/Adduser';
import React, { useEffect, useState } from 'react';

function App() {
  const [allInfo,setInfo] = useState([])
  const [userInfo,setUserInfo] = useState({})
  const getForm =(info)=>{
    setUserInfo(info)
    setInfo([...allInfo,userInfo])
    console.log(info)
    console.log("--------------------------------")
    
  }

  

  console.log(allInfo)
  return (
    <div className="App">
      <Adduser getForm = {getForm} id={allInfo.length+1}/>
      {}
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
