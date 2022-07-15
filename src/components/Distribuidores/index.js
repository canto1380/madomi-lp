import React from "react";
import { Col, Container, Image, Row, Form, Button } from "react-bootstrap";
import Distribuidores from "../../img/distribuidores/distribuidores2.jpeg";

import "./distribuidores.css";

const Index = () => {
  return (
    <Container fluid className="px-0 py-0">
      <Row className="px-0 mx-0">
        <Image className="px-0 ass" src={Distribuidores}></Image>
        <Row className="justify-content-center">
          <Col xs={10} lg={8} className='text-img'>
          <div className='text-img-t'> Sumate a nuestra red de distribuidosres</div>
          <span className='text-img-d'>Si estas interesado en sumarte a nuestro equipo de distribuidos, por favor completa el siguiente fomrulario y nos pondremos en contacto a la brevedad. Muchas gracias!</span>
          </Col>
          <Col xs={10} lg={6} className="form-img col-form">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-form">Apellido<span className="text-danger"> *</span></Form.Label>
                <Form.Control type="email" placeholder="Jose" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-form">Nombre<span className="text-danger"> *</span></Form.Label>
                <Form.Control type="email" placeholder="Perez" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-form">Telefono<span className="text-danger"> *</span></Form.Label>
                <Form.Control type="email" placeholder="3815123456" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-form">Email<span className="text-danger"> *</span></Form.Label>
                <Form.Control type="email" placeholder="usuario@dominio.com" />
              </Form.Group>
            </Form>
              <Form.Label className="text-form">Departamento<span className="text-danger"> *</span></Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Seleccione</option>
              <option value="1">Capital</option>
              <option value="2">Yerba Buena</option>
              <option value="3">Trancas</option>
            </Form.Select>
            <Button className="my-4 w-100 fw-bold">Enviar solicitud</Button>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Index;
