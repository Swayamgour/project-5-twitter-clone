import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './image.jpg'

function NavScrollExample() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">GYM</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
          {/* <div className='center'> */}
        
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About us</Nav.Link>
            <Nav.Link href="#action2">Classes</Nav.Link>
            <Nav.Link href="#action2">Blogs</Nav.Link>
            {/* </div> */}
          
              <NavDropdown.Divider />
              
              
            
           
          </Nav>
          <Form className="d-flex">
           
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
        
      </Container>
     
    </Navbar>
         <img src= "https://wallpapercave.com/wp/wp4377335.jpg" width="100%"/>
     </>
  );
}

export default NavScrollExample;