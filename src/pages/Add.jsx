import React from 'react'
import { PlusCircle } from 'feather-icons-react/build/IconComponents';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideos } from '../Services/allapi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Add({handleresponse}) {

  const [uploadData, setuploadData] = useState({
    id: "", caption: "", thumbnail: "", url: ""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const setInput = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target

    setuploadData({ ...uploadData, [name]: value })
    console.log(uploadData);

  }
  const extractUrl = (e) => {
    let youtubeUrl = e.target.value

    if (youtubeUrl.includes("v=")) {
      let index = youtubeUrl.indexOf("v=")
      console.log(index);

      let videoUrl = youtubeUrl.substring(index + 2, index + 13)
      console.log(videoUrl);

      let videoData = uploadData
      videoData.url = `https://www.youtube.com/embed/${videoUrl}`

      setuploadData(videoData)

    }
    console.log(uploadData);
  }
  //original- https://www.youtube.com/watch?v=tQPmDiI1f_M 
  //i frame- src="https://www.youtube.com/embed/tQPmDiI1f_M"

  const handleAdd = async () => {
    const { id, caption, thumbnail, url } = uploadData

    if (!id || !caption || !thumbnail || !url) {
      toast('please fill the form completely')
    } else {
      const response = await addVideos(uploadData)

      if (response.status > 200 && response.status < 300) {
        // console.log(response.data);

        handleresponse(response.data)
       
        setShow(false);
        toast.success("video added successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          
        })
      } else {
        toast("please provide a unique id")
      }

    }

  }







  return (
    <>
      <div>
        <div onClick={handleShow} className='btn btn-dark '> Add<PlusCircle color='light' size={30} /> </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <FloatingLabel className='mb-3' controlId="floatingId" label="Upload video Id">
              <Form.Control type="text" name='id' placeholder="uploading video id" onChange={setInput} />
            </FloatingLabel>

            <FloatingLabel className='mb-3' controlId="floatingCaption" label="Upload video Caption">
              <Form.Control type="text" name='caption' placeholder="uploading video Caption" onChange={setInput} />
            </FloatingLabel>


            <FloatingLabel className='mb-3' controlId="floatingImage" label="Upload video Cover Image Url">
              <Form.Control type="text" name='thumbnail' placeholder="uploading video Image" onChange={setInput} />
            </FloatingLabel>


            <FloatingLabel className='mb-3' controlId="floatingLink" label="Upload video Link ">
              <Form.Control type="text" name='url' placeholder="uploading video Link" onChange={extractUrl} />
            </FloatingLabel>


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
    </>

  )
}

export default Add