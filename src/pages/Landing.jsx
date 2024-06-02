import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';




function Landing() {

  const navigate=useNavigate()
  
  const handleNavigate=()=>{
    navigate('/home')
  }

  return (
   <>
    <div >
    <Carousel>
      <Carousel.Item interval={1000}>
<img className='img-fluid ' style={{width:'1800px', height:'400px'}} src="https://static.toiimg.com/photo/msid-104209439/104209439.jpg?imgsize=129226" alt="" />
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img className='img-fluid ' style={{width:'1800px', height:'400px'}} src="https://rollingstoneindia.com/wp-content/uploads/2022/12/website-adapt-K-MUSIC-VIDEOS-01.jpg" alt="" />
       
       
      </Carousel.Item>
      <Carousel.Item>

      <img className='img-fluid ' style={{width:'1800px', height:'400px'}} src="https://dl-asset.cyberlink.com/web/prog/learning-center/html/13763/PDR19-YouTube-141_Best_Mediaplayer_Win/img/Best-Video-Players-Windows.jpg" alt="" />
        
      </Carousel.Item>
    </Carousel>



       <Row className='align-items-center mt-3'>

        <Col lg={1}></Col>
        <Col lg={6}>
        <p className='fw-bolder fs-4   font-family: "Zilla Slab", serif;' style={{textAlign:"justify"}}>when user can use their favourite videos. User can upload youtube videos by copy and paste their url 
        video.com allow to add and remove their uploaded videos and also arrange them in different 
        categories by drag and drop.It is free try it now !!!</p>

        <button onClick={handleNavigate} className='btn btn-success mt-2' >Click here to know more!!!</button>


        </Col>
        <Col lg={5}>
            <img className='img-fluid mt-3 ' style={{width:'350px',marginLeft:'70px'}} src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=1536,quality=75,format=auto/Upload_or_Create_Your_Video_8267135efb/Upload_or_Create_Your_Video_8267135efb.png" alt="" />
            
        </Col>


       </Row>

      

    </div>
    </>
  )
}

// "https://dl-asset.cyberlink.com/web/prog/learning-center/html/13763/PDR19-YouTube-141_Best_Mediaplayer_Win/img/Best-Video-Players-Windows.jpg

export default Landing