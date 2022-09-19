import React from 'react'
import { TextField,Box,Button, InputLabel } from '@mui/material'
import { useState } from 'react'
import { Stack } from '@mui/system'

const style = {
    FormLogIn:'mx-auto text-center left-[45vw] top-[20vh] absolute max-w-[20vw] justify-center ',
    StackClass:'bg-slate-50'

}

const LogIn = () => {
    const [setInfo,logInfo] = useState({})
    const handleChange = (e) =>{
        
        const {name,value} = e.target
        console.log(e.target.value)
        // setInfo(Object.assign(logInfo,{[name]:value}))
    }
  return (
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
                    onChange={handleChange}/>
                    <TextField 
                    label="password"
                    onChange={handleChange} 
                    />
                    <Button>Log In</Button>
                </Stack>
            </Box>
        </form>
        
    </div>
  )
}

export default LogIn