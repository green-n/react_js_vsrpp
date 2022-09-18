import React from 'react'
import { UserElement } from './UserElement'

const UserPlaceholder = ({Users,delt}) => {
  
    

    return (
    <>
      {Users.map((el,indx) => <UserElement User={el} key={indx} id={indx} delt = {delt} />)}
    </>
  )
}

export default UserPlaceholder