import React from 'react'
import { TextField,Box,Button, InputLabel } from '@mui/material'
import { useState } from 'react'
import { Stack } from '@mui/system'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { logIn,setThisUser } from '../redux/actions'



const style = {
    FormLogIn:'mx-auto text-center left-[45vw] top-[20vh] absolute max-w-[20vw] justify-center ',
    StackClass:'bg-slate-50',
    TextStyle:'block top-[90vh] left-[45vw] absolute',
    LinkStyle:'text-cyan-600'
}



const LogIn = () => {

    let state = useSelector(state => state.userInfo);

    const dispatch = useDispatch()


    let navigate = useNavigate();
    const [logInfo,setInfo] = useState({})

    const handleChange = (e) =>{
        
        const {name,value} = e.target
            
        setInfo(Object.assign(logInfo,{[name]:value}))
    }

    const loggining =()=>{
        let temp = state.find(({email})=> email == logInfo.email)

        // if(temp == undefined){
        //     alert("this email doesn't exist")
        //     return 2
        // }

        
        // console.log(temp)
        // if(temp.password != logInfo.password){
        //     alert("wrong password")
        //     return 1
        // }
        
            dispatch(setThisUser(logInfo))
            dispatch(logIn())
            navigate('/')
            return 0
        
    }
  return (
    <>
        <div className={style.FormLogIn}>
            <form >
                <Box >
                    <Stack
                    className={style.StackClass}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}>
                        <InputLabel>Get into your account</InputLabel>
                        <TextField
                        label="email"
                        name="email" 
                        onChange={handleChange}/>
                        <TextField 
                        label="password"
                        name ="password"
                        onChange={handleChange} 
                        />
                        <Button onClick={loggining}>Log In</Button>
                    </Stack>
                </Box>
            </form>
        </div>
        
        <p className={style.TextStyle}>Dont have account?<Link to="/register" className={style.LinkStyle}> Register...</Link></p>
    </>
  )
}

export default LogIn