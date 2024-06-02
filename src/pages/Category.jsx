import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { aDDCategory, deleteCategory, getallCategory, getvideo, updateCategory } from '../Services/allapi';
import Trash2 from 'feather-icons-react/build/IconComponents/Trash2';
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap';




function Category() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [allCategory, setallCategory] = useState([])

  const [categoryItem, setCategoryItem] = useState({
    id: "", categoryName: "", allvideos: []
  })

  const addcategoryForm = (e) => {
    const { name, value } = e.target
    setCategoryItem({ ...categoryItem, [name]: value })
  }
  console.log(categoryItem);

  const handleaddCategory = async (e) => {
    e.preventDefault()
    const { id, categoryName } = categoryItem

    if (!id || !categoryName) {
      toast('please fill the form completely')

    } else {
      let response = await aDDCategory(categoryItem)

      if (response.status >= 200 && response.status < 300) {

        console.log(response.data);

        setShow(false);
        toast.success("Category added successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",

        })
        getCategoryList()

      } else {
        toast.warning("please provide a unique id")
      }


    }
  }

  const getCategoryList = async () => {
    let response = await getallCategory()
    setallCategory(response.data);
  }
  console.log(allCategory);

  useEffect(() => {
    getCategoryList()
  }, [])


  const handledeleleteCategory = async (e, id) => {
    e.preventDefault()
    console.log(id);
    await deleteCategory(id)
    getCategoryList()

  }

  const dragover = e => {
    e.preventDefault()
    console.log("dragging over the category board!!!");
  }

  const dropped = async (e, categoryId) => {
    console.log(categoryId);
    let sourceCarId = e.dataTransfer.getData("cardId")
    console.log("source card id is :", sourceCarId);

    let { data } = await getvideo(sourceCarId)
    console.log("source id", data);

    let selectCategory = allCategory.find(item => item.id == categoryId)
    console.log("target categoty details", selectCategory);

    selectCategory.allvideos.push(data)
    console.log("updated target category details", selectCategory);

    await updateCategory(categoryId, selectCategory)
    getCategoryList()



  }



  return (
    <>
      {/* d-grid -nellathil kittan vendi */}
      <div className="d-grid">
        <div onClick={handleShow} className='btn btn-dark'>
          Add Categories
        </div>
      </div>

      {
        allCategory.map((item) => (
          <div>
            <div droppable onDragOver={e => dragover(e)} onDrop={e => dropped(e, item?.id)} className='d-flex justify-content-between mt-3 p-2 border rounded mb-2'>
              <h4>{item.categoryName}</h4>
              <span onClick={e => handledeleleteCategory(e, item?.id)}><Trash2 color="red"></Trash2></span>

              <div className='mt-4'>
                <Row>
                  {
                    item?.allvideos.map((card) => (
                      <Col className='p-2 mb-2 sm{12}'>

                        <div className='border rounded p-5'>

                          <VideoCard card={card} insideCategory={true} />
                          
                        </div>


                      </Col>
                    ))
                  }

                </Row>
              </div>
            </div>
          </div>
        ))
      }


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <FloatingLabel className='mb-3' controlId="floatingId" label=" Id">
            <Form.Control type="text" name='id' onChange={addcategoryForm} placeholder=" Id" />
          </FloatingLabel>

          <FloatingLabel className='mb-3' controlId="floatingcategory" label="Category">
            <Form.Control type="text" name='categoryName' onChange={addcategoryForm} placeholder="Category" />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleaddCategory} variant="primary">ADD</Button>
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

export default Category