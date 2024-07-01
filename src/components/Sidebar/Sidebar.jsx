import React from 'react'
import "../../styles/Sidebar.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      
      <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button style={{backgroundColor:"#FC6736"}}>Search</Button>
                </Form>
      
       <Navbar className="">
        <Container>
          <Navbar.Brand  style={{marginTop:"20px",color:"#fff"}} href="#">
          <img
              alt=""
              src="./src/components/Sidebar/favorite.svg"
              color="#FC6736"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <a href="" style={{color:"#fff", marginLeft:'10px', textDecoration:"none"}}>Your Day</a>
          </Navbar.Brand>
          
        </Container>
        
      </Navbar>
      <Navbar className="">
        <Container>
          <Navbar.Brand  style={{color:"#fff"}} href="#">
          <img
              alt=""
              src="./src/components/Sidebar/favorite.svg"
              color="#FC6736"
              width="30"
              height="30"
              className="d-inline-block align-top"
              
            />{' '}
            <a href="" style={{color:"#fff", marginLeft:'10px', textDecoration:"none"}}>Important</a>
          </Navbar.Brand>
          
        </Container>
        
      </Navbar>
      <Navbar className="">
        <Container>
          <Navbar.Brand  style={{ color:"#fff"}} href="#">
          <img
              alt=""
              src="./src/components/Sidebar/favorite.svg"
              color="#FC6736"
              width="30"
              height="30"
              
              className="d-inline-block align-top"
            />{' '}
            <a href="" style={{color:"#fff", marginLeft:'10px', textDecoration:"none"}}>All Tasks</a>
          </Navbar.Brand>
          
        </Container>
        
      </Navbar>
      <Navbar >
        <Container className="logout">
          <Navbar.Brand  style={{ color:"#fff"}} href="#">
          <img
              alt=""
              src="./src/components/Sidebar/favorite.svg"
              color="#FC6736"
              width="30"
              height="30"
              
              className="d-inline-block align-top"
            />{' '}
            <a href="" style={{color:"#fff", marginLeft:'10px', textDecoration:"none"}}>Logout</a>
          </Navbar.Brand>
          
        </Container>
        
      </Navbar>

    </div>
  )
}

export default Sidebar
