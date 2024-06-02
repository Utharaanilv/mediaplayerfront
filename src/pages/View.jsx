import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getVideos } from '../Services/allapi'
import { useEffect } from 'react'


function View({serverRes}) {

  const [allVideos,setallVideos]=useState([])
  const[deleteStatus,setdeleteStatus]=useState(false)

  const handledeleteStatus=(res)=>{

    setdeleteStatus(res)

  }

useEffect(() => {
  
  getallVideos()

 
}, [serverRes,deleteStatus])




 const getallVideos=async()=>{
 let response= await getVideos()
 setallVideos(response.data);

 }
 console.log(allVideos);


  return (
    <>
    <div className='border p-3 rounded ms-4'>
        <Row>
            {
              allVideos.map((video)=>(

              
              <Col className='p-3 mb-3' sm={12} md={6}>
                <VideoCard card={video} handledeleteStatus={handledeleteStatus}/>
            </Col>
            ))
            }
        </Row>

    </div>
    </>
  )
}

export default View