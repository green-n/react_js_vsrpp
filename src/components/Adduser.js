
import { useEffect, useState } from 'react'

const Adduser = ({getForm},id) => {
    const [userInfo,setInfo] = useState({})
    const [prevState,setPrevState] = useState({})
    const [clear, setClean] = useState(false)
    
    const submition =(e)=>{
       
        e.preventDefault();

        if(userInfo.userName == null){alert("please enter user name")
        return 0}
        if(userInfo.lastName == null){alert("please enter Lastname")
        return 0}
        if(userInfo.email == null){alert("please enter email")
        return 0}
        
        
        getForm(userInfo);
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
        <button type='submit'>ff</button>
            <input 
            type="text"
            name="userName"
            id= "userName"
            onChange={handleChange}
            value={clear ?"" : userInfo.userName}
            />
            <input 
            type="text"
            name="lastName"
            id= "lastName"
            onChange={handleChange}
            value={clear ?"" : userInfo.lastName}
            />
            <input 
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