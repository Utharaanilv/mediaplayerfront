import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Upload from 'feather-icons-react/build/IconComponents/Upload';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div> <Navbar className="bg-primary">
    <Container>
      <Navbar.Brand href="#home">

      <Link to={''} style={{textDecoration:'none'}}>
       
       <Upload color="white" size={25}/>
       

       <span className='text-light ms-3'>VIDEO UPLOAD</span></Link>
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header