import { db } from "../../firebase"
import { query, collection, getDocs, where,orderBy } from "firebase/firestore";
import { getPlebsFromDb } from ".";

export const fetchDataPlebsFromDb = () =>{
    return async function(dispatch){
        let temp = await getDataFromDb()
        console.log(temp)
        dispatch(getPlebsFromDb(temp))
    }
}
const getDataFromDb = async () =>{
    const q = query(collection(db, "plebs"),orderBy('email'))
    const doc = await getDocs(q);
    let tempnfo = []
    doc.docs.map(info =>{
     let tempData = info.data()
     tempData.id = info.id

     tempnfo = [...tempnfo,tempData]})
    console.log(tempnfo)
    return tempnfo
    }