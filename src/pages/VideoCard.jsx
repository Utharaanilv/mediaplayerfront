import { Trash2 } from 'feather-icons-react/build/IconComponents';
import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addHistory, deleteVideos } from '../Services/allapi';
import { v4 as uuidv4 } from 'uuid';


function VideoCard({card,handledeleteStatus,insideCategory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {setShow(true)
  
  // const uid=uuidv4();
  // console.log(uid);

  let cardTime=new Date()
  console.log(cardTime);

  const{caption,url,id}=card

  if(id!=""&&caption!="" &&url!=""&&cardTime!="" ){
    const body={
      id:id,cardName:caption,url,date:cardTime
    }
const response=await addHistory(body)
console.log(response);
    
  }
  
  };


  const removeItem=async(id)=>{
  let response= await deleteVideos(id)
  // console.log(response);
  if(response.status >= 200 && response.status < 300){
    handledeleteStatus(true)
  }

  }

 const dragStated=(e,id)=>{
  console.log("drag started at id",id);
  e.dataTransfer.setData("cardId",id)
 }
 

  return (
    <>
      <div>

        <Card draggable onDragStart={e=>dragStated(e,card?.id)}
        className='shadow'   >
          <Card.Img onClick={handleShow} variant="top" height={'200px'} src={card?.thumbnail} />
          <Card.Body>
            <Card.Title>{card?.caption}</Card.Title>
           { 
           insideCategory?"":
           <Trash2 onClick={ () => removeItem (card?.id)} color="red" style={{ float: 'right' }} />
           }

          </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{card?.caption}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <iframe width="100%" height="400px" src={`${card.url}?autoplay=1`} title="Neela Nilave - Video Song | RDX | Kapil Kapilan | Sam CS | Shane Nigam,Antony Varghese,Neeraj Madhav" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Modal.Body>

        </Modal>

      </div>
    </>
  )
}

export default VideoCard