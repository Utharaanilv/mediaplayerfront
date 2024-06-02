import React, { useState } from 'react'
import { deleteWatchhistory, getHistory } from '../Services/allapi'
import { useEffect } from 'react'
import Trash2 from 'feather-icons-react/build/IconComponents/Trash2';


function Watchhistory() {


const[history,sethistory]=useState([])

const getwatchHistory=async()=>{
const{data}=  await getHistory()

sethistory(data)
}
console.log(history);

useEffect(() => {
 
    getwatchHistory()

  
}, [])
const watchDelete=async(e,id)=>{
    e.preventDefault()
    console.log(id);

   await deleteWatchhistory(id)
   getwatchHistory()

}



  return (

    <>

<div className='container-fluid'>
        <h1 className='fw-bolder fs-3 mt-3 '>watch history</h1>
        <table className='table shadow   rounded border '>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>CARD NAME</th>
                    <th>URL</th>
                    <th>DATE</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody>
               { 
               history?.map((item)=>(
               
               <tr>
                    <td>{item.id}</td>
                    <td>{item.cardName}</td>
                    <td>{item.url}</td>
                    <td>{item.date}</td>
                    <td><Trash2 color="red" onClick={e=>watchDelete(e,item.id)}></Trash2></td>
                </tr>
             ))  
             
             }
            </tbody>
    
        </table>
    
        
</div>
    </>
  )
}

export default Watchhistory