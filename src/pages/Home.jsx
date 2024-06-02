import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import View from './View'
import Category from './Category'
import Add from './Add'
import { Link } from 'react-router-dom'



function Home() {

 const[serverRes,setserverRes]=useState({}) 

 const handleresponse=(res)=>{
  setserverRes(res)
 }



  return (
    <>
    <div>
     <div className='d-flex justify-content-between'> 
      <h1 className='text-info ms-5 mb-5'>ALL VIDEO CARDS</h1>

      <Link className='me-5 mt-5'to={'/watchhistory'} style={{textDecoration:"none",fontSize:"25px",color:"blue"}}><span className='btn btn-dark'>Watch history</span></Link>
      
      </div>
      
      <div className='container-fluid '>
        <Row className='mt-5' >
          <Col lg={1}>
           <Add handleresponse={handleresponse} />
          </Col>
          <Col lg={7}>
            <View serverRes={serverRes} />
            </Col>
            <Col lg={4}>
              <Category/>
            </Col>
        </Row>
      </div>

      </div>
    </>
   
  )
}

export default Home