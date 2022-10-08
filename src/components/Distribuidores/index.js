import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Image, Row, Form, Button } from "react-bootstrap";

import emailjs from "emailjs-com";

import { scrollToTop } from "../../helpers/helpers";
import { messageSendEmail, ErrorSendMail } from "../../helpers/messages";
import MsjError from "../../helpers/MsjError";

import Distribuidores from "../../img/distribuidores/distribuidores2.jpeg";
import { provincias, deptos } from "./prov-depto";

import {
  onlyEmail,
  nombreER,
  apellidoER,
  telefonoER,
} from "../../helpers/regularExpression";

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

  const [validaApe, setValidaApe] = useState("");
  const [noValidaApe, setNoValidaApe] = useState("");
  const [validaNom, setValidaNom] = useState("");
  const [noValidaNom, setNoValidaNom] = useState("");
  const [validaTel, setValidaTel] = useState("");
  const [noValidaTel, setNoValidaTel] = useState("");
  const [validaEmail, setValidaEmail] = useState("");
  const [noValidaEmail, setNoValidaEmail] = useState("");
  const [validaProv, setValidaProv] = useState('')
  const [noValidaProv, setNoValidaProv] = useState('')
  const [validaLoc, setValidaLoc] = useState('')
  const [noValidaLoc, setNoValidaLoc] = useState('')

  const [errorValid, setErrorValid] = useState("");

  const validarApe = () => {
    setValidaApe("");
    setNoValidaApe("");
    const ape = apellidoER;
    if (
      distribuidor.apellido.trim() !== "" &&
      ape.test(distribuidor.apellido)
    ) {
      setValidaApe(true);
      return true;
    } else {
      setNoValidaApe(true);
      return false;
    }
  };
  const validarNom = () => {
    setValidaNom("");
    setNoValidaNom("");
    const nom = nombreER;
    if (distribuidor.nombre.trim() !== "" && nom.test(distribuidor.nombre)) {
      setValidaNom(true);
      return true;
    } else {
      setNoValidaNom(true);
      return false;
    }
  };
  const validarTel = () => {
    setValidaTel("");
    setNoValidaTel("");
    const tel = telefonoER;
    if (
      distribuidor.telefono.trim() !== "" &&
      tel.test(distribuidor.telefono)
    ) {
      setValidaTel(true);
      return true;
    } else {
      setNoValidaTel(true);
      return false;
    }
  };
  const validarEmail = () => {
    setValidaEmail("");
    setNoValidaEmail("");
    const emailValidar = onlyEmail;
    if (
      distribuidor.email.trim() !== "" &&
      emailValidar.test(distribuidor.email)
    ) {
      setValidaEmail(true);
      return true;
    } else {
      setNoValidaEmail(true);
      return false;
    }
  };
  const validarLocalidad = () => {
    setValidaLoc("");
    setNoValidaLoc("");
    if (
      localidadSelect !== ""
    ) {
      setValidaLoc(true);
      return true;
    } else {
      setNoValidaLoc(true);
      return false;
    }
  };
  const validarProvincia = () => {
    setValidaProv("");
    setNoValidaProv("");
    if (
      provinciaSelect !== ""
    ) {
      setValidaProv(true);
      return true;
    } else {
      setNoValidaProv(true);
      return false;
    }
  };

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
    e.preventDefault()
    try {
      if (validarApe() && validarNom() && validarTel() && validarEmail() && validarLocalidad() && validarProvincia()) {
        const distribuidorContacto = {
          apellido: distribuidor.apellido,
          nombre: distribuidor.nombre,
          telefono: distribuidor.telefono,
          email: distribuidor.email,
          provincia:
            Number.parseInt(provinciaSelect) === 1
              ? "Tucuman"
              : Number.parseInt(provinciaSelect) === 2
              ? "Salta"
              : Number.parseInt(provinciaSelect) === 3
              ? "Jujuy"
              : Number.parseInt(provinciaSelect) === 4
              ? "Santiago del Estero"
              : "Catamarca",
          localidad: localidadSelect,
        };
        emailjs
          .send(
            "service_1ng5el9",
            "template_u46fh44",
            distribuidorContacto,
            "6Eo-HKD7OTixioYCw"
          )
          .then(
            (result) => {
              if (result.status === 200) {
                e.target.reset();
                messageSendEmail();
                navigate("/");
                scrollToTop();
              }
            },
            (error) => {
              ErrorSendMail();
            }
          );
      } else {
        setErrorValid(true);
        setTimeout(() => {
          setErrorValid(false);
        }, 2000);
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <Container fluid className="px-0 py-0">
      <Row className="px-0 mx-0">
        <Image className="px-0 ass" src={Distribuidores}></Image>
        <Row className="justify-content-center">
          <Col xs={10} lg={8} className="text-img">
            <div className="text-img-t">
              {" "}
              Sumate a nuestra red de distribuidores
            </div>
            <span className="text-img-d">
              Si estás interesado en sumarte a nuestro equipo de distribuidores,
              por favor completa el siguiente formulario y nos pondremos en
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
                  minLength="3"
                  maxLength="30"
                  onBlur={validarApe}
                  isInvalid={noValidaApe}
                  isValid={validaApe}
                  onChange={handleValores}
                  placeholder="Jose"
                />
                <Form.Control.Feedback
                  type="invalid"
                  className="text-danger small"
                >
                  Campo Obligatorio, al menos debe contener entre 3 - 30
                  caracteres.
                </Form.Control.Feedback>
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
                  minLength="3"
                  maxLength="40"
                  onBlur={validarNom}
                  isInvalid={noValidaNom}
                  isValid={validaNom}
                  onChange={handleValores}
                  placeholder="Perez"
                />
                <Form.Control.Feedback
                  type="invalid"
                  className="text-danger small"
                >
                  Campo Obligatorio, al menos debe contener entre 3 - 40
                  caracteres.
                </Form.Control.Feedback>
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
                  minLength="10"
                  maxLength="12"
                  onBlur={validarTel}
                  isInvalid={noValidaTel}
                  isValid={validaTel}
                  onChange={handleValores}
                  placeholder="3815123456"
                />
                <Form.Control.Feedback
                  type="invalid"
                  className="text-danger small"
                >
                  Campo Obligatorio, al menos debe contener entre 10 - 12
                  caracteres.
                </Form.Control.Feedback>
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
                  minLength="11"
                  maxLength="50"
                  onBlur={validarEmail}
                  isInvalid={noValidaEmail}
                  isValid={validaEmail}
                  onChange={handleValores}
                  placeholder="usuario@dominio.com"
                />
                <Form.Control.Feedback
                  type="invalid"
                  className="text-danger small"
                >
                  Campo Obligatorio, al menos debe contener entre 11 - 50
                  caracteres.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Label className="text-form">
                Provincia<span className="text-danger"> *</span>
              </Form.Label>
              <Form.Select
                className="mb-3"
                aria-label="Default select example"
                onBlur={validarProvincia}
                isInvalid={noValidaProv}
                  isValid={validaProv}
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
                <Form.Control.Feedback
                  type="invalid"
                  className="text-danger small"
                >
                  Campo Obligatorio, debe seleccionar una provincia.
                </Form.Control.Feedback>
              <Form.Label className="text-form">
                Localidad<span className="text-danger"> *</span>
              </Form.Label>
              <Form.Select
                onBlur={validarLocalidad}
                isInvalid={noValidaLoc}
                  isValid={validaLoc}
                aria-label="Default select example"
                onChange={handleLocalidad}
              >
                <option key="--">Seleccione</option>
                {deptos.map((depto) => {
                  if (Number.parseInt(provinciaSelect) === depto.idProvincia) {
                    return (
                      <option key={depto.id} value={depto.depto}>
                        {depto.depto}
                      </option>
                    );
                  } else {
                    return null;
                  }
                })}
              </Form.Select>
                <Form.Control.Feedback
                  type="invalid"
                  className="text-danger small"
                >
                  Campo Obligatorio, debe seleccionar una localidad.
                </Form.Control.Feedback>
              <Button type="submit" className="my-4 w-100 fw-bold">
                Enviar solicitud
              </Button>
              {errorValid ? (
                <MsjError
                  text1="Datos incorrectos"
                  text2="Todos los campos son obligatorios"
                />
              ) : null}
            </Form>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Index;
