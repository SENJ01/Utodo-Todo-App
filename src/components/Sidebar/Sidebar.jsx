import React from 'react'
import "../../styles/Sidebar.css";
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
       <Tab.Container >
      <Row>
        <Col sm={12}>
          <ListGroup >
            <ListGroup.Item className='sidebar-fields' href="#link1">
              Link 1
            </ListGroup.Item>
            <ListGroup.Item className='sidebar-fields' href="#link2">
              Link 2
            </ListGroup.Item>
            <ListGroup.Item href="#link3">
              Link 3
            </ListGroup.Item>
          </ListGroup>
        </Col>
        
      </Row>
    </Tab.Container>

    <Tab.Container >
  
        <Col sm={12}>
          <ListGroup className="logout">
            <ListGroup.Item  href="#link1">
              Link 1
            </ListGroup.Item>
          </ListGroup>
        </Col>
  
    </Tab.Container>
    </div>
  )
}

export default Sidebar
