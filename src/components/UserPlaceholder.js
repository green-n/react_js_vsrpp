import React from 'react'
import { UserElement } from './UserElement'

const UserPlaceholder = ({Users}) => {

    

    return (
    <>
      {Users.map((el,indx) => <UserElement User={el} key={indx} />)}
    </>
  )
}

export default UserPlaceholder