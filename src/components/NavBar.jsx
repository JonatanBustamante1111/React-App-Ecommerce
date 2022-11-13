// primero importamos el paquete react
import React from "react";
import CartWidget from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "../assets/styles/NavBar.css"
import { Link } from "react-router-dom";

// declaramos una funcion
const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container className="navbar-cont bg-light p-3  " fluid bg="light">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand className="text-center"><Link className="text-decoration-none text-dark" to='/'>DON LIBRO</Link></Navbar.Brand>
          <Link to='/Cart'>
            <div className="shoping__cart cart">
              <CartWidget /><span id="cart_menu_num" data-action="cart-can" className="badge rounded-circle">1</span>
            </div>
          </Link>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center">
              {/* <Nav.Link><Link className="text-decoration-none text-dark" to='/' >Inicio</Link></Nav.Link> */}
              <Nav.Link><Link className="text-decoration-none text-dark" to='/category/1' >Finanzas</Link></Nav.Link>
              <Nav.Link><Link className="text-decoration-none text-dark" to='/category/3' >Desarrollo Personal</Link></Nav.Link>
              <Nav.Link><Link className="text-decoration-none text-dark" to='/category/5' >Liderazgo</Link></Nav.Link>
              {/* <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar; 