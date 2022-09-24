
import Adduser from '../components/Adduser'
import UserPlaceholder from '../components/UserPlaceholder';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import { logOut } from '../redux/actions'

function UserManagementPage({returnInfo,state}) {
  const dispatch = useDispatch();

  // let navigate = useNavigate();
  // const allInfo = useSelector(state => state.userInfo)

  // useEffect(()=>{setInfo(state)},[])

  // const [userInfo,setUserInfo] = useState({})
  // const getForm =(info)=>{
  //   info.id = allInfo.length
  //   allInfo.find(({email})=> email == info.email)? alert("this email already taken, please choose another"):console.log("works ")
  //   if(allInfo.find(({email})=> email == info.email))return 1
  //   setUserInfo(info)
  //   setInfo([...allInfo,info])
  //   return 0
  // }

  // const deleteElmByEmail =(emailForRemoval)=>{
  //   console.log(emailForRemoval)
  //  // const indexForRemovedEl = allInfo.indexOf(allInfo.find(({email})=> email == emailForRemoval))
  //   // console.log(indexForRemovedEl)
  //   let temp = allInfo.filter(el => el.email != emailForRemoval)
  //   console.log(temp)
  //   setInfo(temp)
  // }
   
  // useEffect(()=>{setInfo(allInfo.filter((el)=>{return el!={}}))},[userInfo])
  // useEffect(()=>{returnInfo(allInfo)},[allInfo])
  return (
    <div className="App">
      <Adduser />
      <UserPlaceholder />

      <button onClick={()=>{dispatch(logOut())}}>logInTest</button>
      
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
