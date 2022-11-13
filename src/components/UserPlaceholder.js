import React from 'react'
import { UserElement } from './UserElement'
import { useSelector } from 'react-redux'

const UserPlaceholder = () => {
  
  const tempUsers = useSelector(state => state.userInfo)
  const filter = useSelector(state => state.filter)
  console.log(filter)
  let Users = tempUsers.filter(user => user.name.includes(filter)||user.email.includes(filter))
  console.log(Users,filter)
    return (
    <>
      {Users.map((el,indx) => <UserElement User={el} key={indx} id={indx}/>)}
    </>
  )
}

export default UserPlaceholder