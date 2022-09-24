import React from 'react'
import { UserElement } from './UserElement'
import { useSelector } from 'react-redux'

const UserPlaceholder = () => {
  
  const Users = useSelector(state => state.userInfo)

    return (
    <>
      {Users.map((el,indx) => <UserElement User={el} key={indx} id={indx}/>)}
    </>
  )
}

export default UserPlaceholder