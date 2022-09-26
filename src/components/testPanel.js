import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { hideTestPanel,logOut,addUserInfo,deleteElmByEmail,addNewUserCount } from '../redux/actions'
import { Button } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



const TestPanel = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const Users = useSelector(state => state.userInfo)
    const curUsers = useSelector(state => state.setLogedUser)
    const indx = useSelector(state => state.userCount)
    const [userNum,setNum] = useState( 1 )

    const addNewDefaultUser = () => {
        const newDefaulUser = {
            userName: userNum.toString(),
            password: userNum.toString(),
            email: userNum.toString()+"email.com",
            id: indx
        }
        dispatch(addNewUserCount())
        dispatch(addUserInfo(newDefaulUser))
        setNum(userNum + 1)

    }
    const deleteAllUsersExeptCurentOne = () => {
        let counter = 0
        while(Users[counter]){
            if(counter != Users.indexOf(Users.find(({email})=> email == curUsers.email))){
                // console.log(Users[counter])
                dispatch(deleteElmByEmail(Users[counter].email))
            }
            counter++
        }
        if(curUsers.userName == 1){
            setNum(2)
            return 0
        }
        if(curUsers.userName != 1){
            setNum(1)
            return 0
        }

    }
  return (
    <div>
        <AppBar position='static'>
            <Toolbar variant="dense">
                <Button color="inherit" onClick={()=>navigate('/register')}> test register </Button>
                <Button color="inherit" onClick={()=>dispatch(logOut())}  > test log in </Button>
                <Button color="inherit" onClick={()=>addNewDefaultUser()}  > add new default user </Button>
                <Button color="inherit" onClick={()=>deleteAllUsersExeptCurentOne()}  > Delete all users exept current one </Button>
            </Toolbar>
        </AppBar>
        {/* <div>
            <Button onClick={()=>navigate('/register')}> test register </Button>
            <Button onClick={()=>dispatch(logOut())}  > test log in </Button>
            <Button onClick={()=>addNewDefaultUser()}  > add new default user </Button>
            <Button onClick={()=>deleteAllUsersExeptCurentOne()}  > Delete all users exept current one </Button>
        </div>
        <div>
            <button onClick={()=> dispatch(hideTestPanel())}> close test panel </button>
        </div> */}
        
    </div>
  )
}

export default TestPanel