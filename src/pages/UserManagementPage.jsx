
import Adduser from '../components/Adduser'
import UserPlaceholder from '../components/UserPlaceholder';
import React, { useEffect, useState } from 'react';

function UserManagementPage({returnInfo,state}) {
  

  const [allInfo,setInfo] = useState([])

  useEffect(()=>{setInfo(state)},[])

  const [userInfo,setUserInfo] = useState({})
  const getForm =(info)=>{
    info.id = allInfo.length
    allInfo.find(({email})=> email == info.email)? alert("this email already taken, please choose another"):console.log("works ")
    if(allInfo.find(({email})=> email == info.email))return 1
    setUserInfo(info)
    setInfo([...allInfo,info])
    return 0
  }

  const deleteElmByEmail =(emailForRemoval)=>{
    console.log(emailForRemoval)
   // const indexForRemovedEl = allInfo.indexOf(allInfo.find(({email})=> email == emailForRemoval))
    // console.log(indexForRemovedEl)
    let temp = allInfo.filter(el => el.email != emailForRemoval)
    console.log(temp)
    setInfo(temp)
  }
   
  // useEffect(()=>{setInfo(allInfo.filter((el)=>{return el!={}}))},[userInfo])
  useEffect(()=>{returnInfo(allInfo)},[allInfo])

  console.log(allInfo)
  return (
    <div className="App">
      <Adduser getForm = {getForm} id={allInfo.length}/>
      <UserPlaceholder Users = {allInfo}  delt = {deleteElmByEmail}/>
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

export default UserManagementPage;
