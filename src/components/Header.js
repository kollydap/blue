import React from 'react'
import "../styles/Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import LogOut from './LogOut';
import { Button,Navbar,NavDropdown,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
function Header() {
  return (
  
    <Navbar collapseOnSelect expand="lg" style={{padding:"15px 0px"}} className='boot' >
  <Container>
  <Navbar.Brand><Link to='/'>BlueCare</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      {/* <Nav.Link>Features</Nav.Link>
      <Nav.Link>Pricing</Nav.Link> */}
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
     { Link='/login' ? (
     <Link to='/login' style={{textDecoration:"none", color:"#0000008c",marginRight:"10px"}}> <Nav >Login</Nav></Link>
     ) : (
       console.log(path)
     )
}
     <Link to='/signup' style={{textDecoration:"none", color:"#0000008c",marginRight:"10px"}}> <Nav >Sign Up</Nav></Link>
    
     <Link to='/patient' style={{textDecoration:"none", color:"#0000008c"}}> <Nav >Dashboard </Nav></Link>
      
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header