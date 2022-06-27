import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const Suscribirse = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>Suscribirse</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='fw-bold'>Ingresa tu email para recibir todas las novedades!</p>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="email" placeholder="usuario@dominio" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" className='fw-bold' label="Acepto los terminos y condiciones" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" type="submit">Enviar</Button>
        <Button variant='secondary' onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Suscribirse;
