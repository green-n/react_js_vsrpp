import React, { useEffect } from 'react'
import { TextField,Box,Button, InputLabel } from '@mui/material'
import { useState } from 'react'
import { Stack } from '@mui/system'
import { useNavigate  } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux'
import { logIn,addUserInfo,setThisUser,addNewUserCount } from '../redux/actions'
import { registerWithEmailAndPassword } from '../firebase';


const style = {
    FormLogIn:'mx-auto text-center left-[45vw] top-[20vh] absolute max-w-[20vw] justify-center ',
    StackClass:'bg-slate-50'

}

const Register =  () => {
    const dispatch = useDispatch()
    const [logInfo,setInfo] = useState({})
    const [clear,clean] = useState(false)
    let tempState = useSelector(state => state.userInfo);
    let indx = useSelector(state => state.userCount);
    let navigate = useNavigate();

   

    const returnNewUser = async (e) =>{
        e.preventDefault();

        if(!logInfo.email){alert("please enter email")
        return 0}
        
        if(tempState.find(({email})=> email == logInfo.email)){
            alert("this email already taken")

            return 0
        }   
        
        if(!logInfo.userName){alert("please enter username")
        return 0}
       

        // tempState = [...tempState,logInfo]
        // returnInfo(tempState)
        setInfo(Object.assign(logInfo,{id:indx}))
        let tempDoc = await registerWithEmailAndPassword(logInfo)
        console.log(tempDoc)
        // dispatch(addNewUserCount())
        // dispatch(addUserInfo(logInfo))
        // dispatch(setThisUser(logInfo))
        if(tempDoc == 0){
        navigate('/')
        dispatch(logIn())
    }


       
    }

    const cleanEmail =()=>{
        clean(true)
    }
    
    useEffect(()=>{clean(false)},[logInfo])

    const handleChange = (e) =>{
        const {name,value} = e.target
        setInfo(Object.assign(logInfo,{[name]:value}))
    }
    
  return (
    <div className={style.FormLogIn}>
        <form  onSubmit={returnNewUser} >
            <Box >
                <Stack
                 className={style.StackClass}
                 direction="column"
                 justifyContent="center"
                 alignItems="center"
                 spacing={4}>
                    <InputLabel>Create new account</InputLabel>
                    <TextField
                    label="email"
                    name="email" 
                    onChange={handleChange}/>
                     <TextField
                    label="Username"
                    name="userName" 
                    onChange={handleChange}/>
                    <TextField 
                    label="password"
                    name ="password"
                    onChange={handleChange} 
                    />
                    <Button type='submit'>Register</Button>
                </Stack>
            </Box>
        </form>
        
    </div>
  )
}

export default Register