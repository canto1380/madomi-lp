import React from "react";
// import AliceCarousel from "react-alice-carousel";
import { Container, Image, Row, Col } from "react-bootstrap";
import { DownloadOutlined } from "@ant-design/icons";

import "./index.css";

import CarouselProductos from "./carouselProductos";
import CarouselInicial from "./carouselInicial";
import Contacto from "./Contacto";

import MadomiItalia from "../img/madomi-italia.png";
import MadomiBienvenidos from "../img/madomi-bienvenidos.png";
import pdf from "./pdf-prueba.pdf";

const Index = () => {
  return (
    <Container fluid className="">
      <Row xs={1}>
        {/* <Button className="w-100 fs-5 fw-semibold btn-pedido" variant="dark">
          <a href="https://wa.me/5493816686081" target="_blank" className="btn-pedido-text" rel="noopener noreferrer">
            Hace tu Pedido
          </a>
        </Button> */}
      </Row>
      <Row xs={12} className="">
        <CarouselInicial />
        {/* <Image className="w-100 p-0" fluid src={MadomiGrande}></Image> */}
      </Row>
      <Row xs={12}>
        <section className="px-0 py-65">
          <p className="px-0"></p>
        </section>
      </Row>
      <Row xs={12} className="">
        <Image src={MadomiItalia} className="h-img-italia w-100 p-0"></Image>
      </Row>
      <Row xs={12}>
        <section className="px-0 py-65">
          <p className="px-0"></p>
        </section>
      </Row>
      <Row xs={12} className="align-items-center">
        <Col className="text-center p-4" xs={12} lg={6}>
          <Image
            fluid
            src={MadomiBienvenidos}
            className="img-bienvenido"
          ></Image>
        </Col>
        <Col className="p-4" xs={12} lg={6}>
          <h2 className="t-bienvenido pb-4">BIENVENIDO</h2>
          <span className="p-bienvenido text-secondary">
            Somos una Empresa dedicada a la fabricación de Pastas Frescas desde
            1995.
          </span>
          <span className="p-bienvenido text-secondary">
            <br />
            Nacimos en la ciudad de San Miguel de Tucumán, Tucumán, Argentina
            con la misión de acercar a tu mesa Frescura y Calidad.
          </span>
          <span className="p-bienvenido text-secondary">
            <br />
            <br />
            Madomi Pastas, Simplemente la Mejor.
          </span>
        </Col>
      </Row>
      <Row xs={12}>
        <section className="px-0 py-65">
          <p className="px-0"></p>
        </section>
      </Row>
      <Row xs={12} className="align-items-center">
        <section className="pt-5">
          <div className="text-center">
            <h2>PRODUCTOS PRINCIPALES</h2>
            <hr className="wa"></hr>
          </div>
        </section>
        <section className="px-4 py-3">
          <CarouselProductos />
        </section>
      </Row>
      <Row xs={12}>
        <section className="px-0 py-65">
          <p className="px-0"></p>
        </section>
      </Row>
      <Row xs={12}>
        <section className="pt-5">
          <div className="text-center">
            <h2>CONFIAN EN NOSOTROS</h2>
            <hr className="wa"></hr>
          </div>
        </section>
        <section></section>
      </Row>
      <Row xs={12}>
        <section className="px-0 py-65">
          <p className="px-0"></p>
        </section>
      </Row>
      <Row xs={12} className="align-items-center">
        <section className="pt-5">
          <div className="text-center">
            <h2>DESCARGAS</h2>
            <hr className="wa"></hr>
          </div>
        </section>
      </Row>
      <section className="container w-50 section-download">
        <a
          className="link-download-div-text"
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          download="pdf-prueba.pdf"
        >
          <div className="row justify-content-between link-download p-3">
            <div className="col-10">Catalogo Madomi(pdf)</div>
            <div className="col-1 text-end">
              <span>
                <DownloadOutlined style={{ fontSize: "22px" }} />
              </span>
              {/* <span>Descargar</span> */}
            </div>
          </div>
        </a>
      </section>
      <section className="container w-50 section-download pt-1">
        <a
          className="link-download-div-text"
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          download="pdf-prueba.pdf"
        >
          <div className="row justify-content-between link-download p-3">
            <div className="col-10">Listado de Productos Madomi (xlsx)</div>
            <div className="col-1 text-end fw-bolder">
              <span>
                <DownloadOutlined style={{ fontSize: "22px" }} />
              </span>
              {/* <span>Descargar</span> */}
            </div>
          </div>
        </a>
      </section>

      <Row xs={12}>
        <section className="px-0 py-65">
          <p className="px-0"></p>
        </section>
      </Row>
      <Row xs={12}>
        <Col xs={12} className='div-contacto'>
        <section className="container w-75 pt-5">
          <div className="centrar-tit text-center">
            <h2 className='text-center'>CONTACTO</h2>
            <hr className="wa"></hr>
          </div>
        </section>

        <Contacto />
        </Col>
      </Row>
     
    </Container>
  );
};

export default Index;
