import React from 'react'

export const UserElement = (User) => {
    console.log(User)
    let res = `id ${User.email}`
  return (
    <><h2>{res}</h2></>
  )
}
