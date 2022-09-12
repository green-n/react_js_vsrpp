import React, { useEffect }  from 'react'
import { useState } from 'react'

const Adduser = ({getForm},id) => {
    const [userInfo,setInfo] = useState({})
    const [prevState,setPrevState] = useState({})
    const submition =(e)=>{

        if(userInfo.userName == null){
            console.log(prevState)
           setInfo({userName:prevState.userName}) 
        }
        e.preventDefault();
        getForm(userInfo);
        prevSet(userInfo)
        console.log(prevState)
    }
    const prevSet =(inf)=>{
        setPrevState(inf)
        setInfo({})
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
            value={userInfo.userName}
            onChange={handleChange}
            />
            <input 
            type="text"
            name="lastName"
            id= "lastName"
            onChange={handleChange}
            />
            <input 
            type="text"
            name="email"
            id= "emali"
            onChange={handleChange}
            />

        </form>

    </div>
  )
}

export default Adduser