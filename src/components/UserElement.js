import React from 'react'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { query,deleteDoc, collection,doc, getDocs, where,orderBy } from "firebase/firestore";
import { db } from '../firebase';
import { fetchDataPlebsFromDb } from '../redux/actions/asyncActions';


export const UserElement = ({User,id}) => {
  const dispatch = useDispatch()
  const deleteDocById = async() => {
    try{
      console.log("work")
      await deleteDoc(doc(db, "plebs", User.id)).then(dispatch(fetchDataPlebsFromDb()))

    }
    catch(err){
      console.log(err)
    }
  }

    let res = `element ${id}: id:${User.id} ; Username: ${User.name}; password: ${User.password}; email: ${User.email}.`

  return (
    <>
    <h2>{res}</h2>
    <Button variant="outlined" color ="error" onClick={()=>deleteDocById()}>Delete</Button>
    </>

  )
}
