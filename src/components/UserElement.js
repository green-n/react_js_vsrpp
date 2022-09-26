import React from 'react'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { deleteElmByEmail } from '../redux/actions'

export const UserElement = ({User,id}) => {
  const dispatch = useDispatch()
 

    let res = `element ${id}: id:${User.id} ; Username: ${User.userName}; password: ${User.password}; email: ${User.email}.`

  return (
    <>
    <h2>{res}</h2>
    <Button variant="outlined" color ="error" onClick={()=>dispatch(deleteElmByEmail(User.email))}>Delete</Button>
    </>

  )
}
