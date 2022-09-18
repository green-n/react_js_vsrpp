import React from 'react'
import { Button } from '@mui/material'

export const UserElement = ({User,delt,id}) => {
  console.log(User.email)
  const deteteElement =()=>{
    delt(User.email)
  } 
    console.log(User)
    let res = `id: ${id}; Username: ${User.userName}; lastname: ${User.lastName}; email: ${User.email}.`
    console.log(delt)
  return (
    <>
    <h2>{res}</h2>
    <Button variant="outlined" color ="error" onClick={deteteElement}>Delete</Button>
    </>

  )
}
