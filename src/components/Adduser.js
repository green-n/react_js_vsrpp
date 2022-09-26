
import { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { useDispatch,useSelector } from 'react-redux'
import {addUserInfo,addNewUserCount} from '../redux/actions'


const style = {
    inputStyle:'bg-gray-50 w-{150px}  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500'
}

const Adduser = () => {
    const [userInfo,setInfo] = useState({})
    const dispatch = useDispatch()
    const [clear , setClean] = useState(false)
    let allUsers = useSelector(state => state.userInfo);
    let indx = useSelector(state => state.userCount);
    
    const submition =(e)=>{
       
        e.preventDefault();

        if(userInfo.userName == null){alert("please enter user name")
        return 0}
        if(userInfo.password == null){alert("please enter Lastname")
        return 0}
        if(userInfo.email == null){alert("please enter email")
        return 0}
        
        setInfo(Object.assign(userInfo,{id:indx}))
        dispatch(addNewUserCount())
        dispatch(addUserInfo(userInfo));
        cleanForm()
        setInfo({})
        
       
    }

    
    
    useEffect(()=>{setClean(false)},[userInfo])
    
    const cleanForm = () =>{
        setClean(true)
    }
    //useEffect(()=>{setInfo({id:id})},[])

    const handleChange = (e) =>{
        
        const {name,value} = e.target
        
        setInfo(Object.assign(userInfo,{[name]:value}))
    }
  return (
    <div>

        <form onSubmit={submition}>
        <Button variant="contained" color ="secondary" size="medium" type='submit'>Add user</Button>
            <input 
            className={style.inputStyle}
            type="text"
            name="userName"
            id= "userName"
            onChange={handleChange}
            value={clear ?"" : userInfo.userName}
            />
            <input 
            className={style.inputStyle}
            type="text"
            name="password"
            id= "password"
            onChange={handleChange}
            value={clear ?"" : userInfo.password}
            />
            <input 
            className={style.inputStyle}
            type="text"
            name="email"
            id= "emali"
            onChange={handleChange}
            value={clear ?"" : userInfo.email}
            />

        </form>
        
        

    </div>
  )
}

export default Adduser