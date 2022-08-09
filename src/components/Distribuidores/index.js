import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Col, Container, Image, Row, Form, Button } from "react-bootstrap";

import emailjs from 'emailjs-com'

import { scrollToTop } from "../../helpers/helpers";
import { messageSendEmail, ErrorSendMail } from '../../helpers/messages'

import Distribuidores from "../../img/distribuidores/distribuidores2.jpeg";
import { provincias, deptos } from "./prov-depto";

import "./distribuidores.css";

const Index = () => {
  const navigate = useNavigate();
  const [distribuidor, setDistribuidor] = useState({
    apellido: "",
    nombre: "",
    telefono: "",
    email: "",
    provincia: "",
    localidad: "",
  });
  const [provinciaSelect, setProvinciaSelect] = useState();
  const [localidadSelect, setLocalidadSelect] = useState("");

  console.log(distribuidor)
  // console.log(provincias, deptos)

  const handleValores = (e) => {
    setDistribuidor({ ...distribuidor, [e.target.name]: e.target.value });
  };

  const handleProvincia = (e) => {
    setProvinciaSelect(e.target.value);
  };

  const handleLocalidad = (e) => {
    setLocalidadSelect(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const distribuidorContacto = {
      apellido: distribuidor.apellido,
      nombre: distribuidor.nombre,
      telefono: distribuidor.telefono,
      email: distribuidor.email,
      provincia: (Number.parseInt(provinciaSelect) === 1) ? ('Tucuman') : (Number.parseInt(provinciaSelect) === 2) ? ('Salta') : (Number.parseInt(provinciaSelect) === 3) ? ('Jujuy') : (Number.parseInt(provinciaSelect) === 4) ? ('Santiago del Estero') : ('Catamarca'),
      localidad: localidadSelect,
    };
    emailjs.send('service_1ng5el9','template_u46fh44',distribuidorContacto, '6Eo-HKD7OTixioYCw')
      .then(
        (result) => {
          if (result.status === 200) {
            e.target.reset()
            messageSendEmail()
            navigate("/");
            scrollToTop()
          }
        },
          (error) => {
            ErrorSendMail()
          }
        
      )
  };

  return (
    <Container fluid className="px-0 py-0">
      <Row className="px-0 mx-0">
        <Image className="px-0 ass" src={Distribuidores}></Image>
        <Row className="justify-content-center">
          <Col xs={10} lg={8} className="text-img">
            <div className="text-img-t">
              {" "}
              Sumate a nuestra red de distribuidosres
            </div>
            <span className="text-img-d">
              Si estas interesado en sumarte a nuestro equipo de distribuidos,
              por favor completa el siguiente fomrulario y nos pondremos en
              contacto a la brevedad. Muchas gracias!
            </span>
          </Col>
          <Col xs={10} lg={6} className="form-img col-form">
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-form">
                  Apellido<span className="text-danger"> *</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="apellido"
                  onChange={handleValores}
                  placeholder="Jose"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-form">
                  Nombre<span className="text-danger"> *</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  onChange={handleValores}
                  placeholder="Perez"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-form">
                  Telefono<span className="text-danger"> *</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="telefono"
                  onChange={handleValores}
                  placeholder="3815123456"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-form">
                  Email<span className="text-danger"> *</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleValores}
                  placeholder="usuario@dominio.com"
                />
              </Form.Group>

              <Form.Label className="text-form">
                Provincia<span className="text-danger"> *</span>
              </Form.Label>
              <Form.Select
                className="mb-3"
                aria-label="Default select example"
                onChange={handleProvincia}
              >
              <option key="-">Seleccione</option>
                {provincias.map((prov) => {
                  return (
                    <option className="" key={prov.id} value={prov.id}>
                      {prov.nombre}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Label className="text-form">
                Localidad<span className="text-danger"> *</span>
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={handleLocalidad}
              >
                <option key="--">Seleccione</option>
                {
                  deptos.map((depto) => {
                    if(Number.parseInt(provinciaSelect) === depto.idProvincia) {
                      return(
                        <option key={depto.id} value={depto.depto} >{depto.depto}</option>
                      )
                    } else {
                      return null
                    }
                  })
                }

              </Form.Select>
              <Button type="submit" className="my-4 w-100 fw-bold">
                Enviar solicitud
              </Button>
            </Form>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Index;
