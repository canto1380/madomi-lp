import React, { useState } from "react";
import { Image, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Suscribirse from "../../components/suscripcion/suscribirse";

import "./navbar.css";

import Logo from "../../img/madomi-grande-sf.png";

const Index = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="container-img-navbar">
          <Image src={Logo} className="img-logo"></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="align-navbar">
          <Nav className="me-0 my-2 my-lg-0" navbarScroll>
            <Nav.Link className="btn fw-bolder text-hover text-start" href="/">
              Inicio
            </Nav.Link>
            <Nav.Link className="btn fw-bolder text-hover text-start" href="">
              Productos
            </Nav.Link>
            <Nav.Link
              className="btn fw-bolder text-hover text-start"
              href="/contacto"
            >
              Contacto
            </Nav.Link>
            <Nav.Link className="btn fw-bolder text-hover text-start" href="">
              Nosotros
            </Nav.Link>
            <Nav.Link
              className="btn fw-bolder text-hover text-start"
              href=""
              onClick={() => setModalShow(true)}
            >
              Suscribirse
            </Nav.Link>
            <Suscribirse show={modalShow} onHide={() => setModalShow(false)} />
            <Nav.Link className="btn fw-bolder text-hover text-start" href="">
              Iniciar Sesion
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Index;

{
  /* <>
  <Button variant="primary" onClick={() => setModalShow(true)}>
    Launch vertically centered modal
  </Button>

  <MyVerticallyCenteredModal
    show={modalShow}
    onHide={() => setModalShow(false)}
  />
</>; */
}
