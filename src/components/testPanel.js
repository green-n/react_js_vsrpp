import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { hideTestPanel,logOut,addUserInfo,deleteElmByEmail,addNewUserCount } from '../redux/actions'
import { Button } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { addPlebsToBase } from '../firebase'
import { fetchDataPlebsFromDb } from '../redux/actions/asyncActions'


const TestPanel = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const Users = useSelector(state => state.userInfo)
    const curUsers = useSelector(state => state.setLogedUser)
    const indx = useSelector(state => state.userCount)
    const [userNum,setNum] = useState( 1 )


    const addNewDefaultUser = () => {
        console.log(Users)
        ша(Users.find(obj => {obj.name == userNum})==false){
            console.log("name intersept")  
        }
        const newDefaulUser = {
            userName: userNum.toString(),
            password: userNum.toString(),
            email: userNum.toString()+"email.com",
        }
        addPlebsToBase(newDefaulUser)
        dispatch(fetchDataPlebsFromDb())
        setNum(userNum + 1)

    }

  return (
    <div>
        <AppBar position='static'>
            <Toolbar variant="dense">
                <Button color="inherit" onClick={()=>navigate('/register')}> test register </Button>
                <Button color="inherit" onClick={()=>dispatch(logOut())}  > test log in </Button>
                <Button color="inherit" onClick={()=>addNewDefaultUser()}  > add new default user </Button>
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