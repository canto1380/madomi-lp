import React from "react";
// import AliceCarousel from "react-alice-carousel";
import { Button, Container, Image, Row, Col } from "react-bootstrap";
import { DownloadOutlined } from "@ant-design/icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from "@fortawesome/free-regular-svg-icons";
// import {
//   solid,
//   regular,
//   brands,
// } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./index.css";
import MadomiGrande from "../img/madomi-grande.png";
import MadomiItalia from "../img/madomi-italia.png";
import MadomiBienvenidos from "../img/madomi-bienvenidos.png";
import Wsp from "../img/whatsapp.png";
import pdf from "./pdf-prueba.pdf";

const Index = () => {
  // const handleDragStart = (e) => e.preventDefault();

  // const items = [
  //   <img
  //     src={MadomiGrande}
  //     onDragStart={handleDragStart}
  //     role="presentation"
  //     alt="carrousel"
  //   />,
  //   <img
  //     src={MadomiItalia}
  //     onDragStart={handleDragStart}
  //     role="presentation"
  //     alt="carrousel"
  //   />,
  //   <img
  //     src={MadomiBienvenidos}
  //     onDragStart={handleDragStart}
  //     role="presentation"
  //     alt="carrousel"
  //   />,
  // ];

  return (
    <Container fluid className="">
      <Row xs={1}>
        <Button className="w-100 fs-5 fw-semibold btn-pedido" variant="dark">
          <a href="https://wa.me/5493816686081" target="_blank" className="btn-pedido-text">
            Hace tu Pedido
          </a>
        </Button>
      </Row>
      <Row xs={12}>
        <Image className="w-100 p-0" fluid src={MadomiGrande}></Image>
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
            <h2>GALERIA DE PRODUCTOS</h2>
            <hr className="wa"></hr>
          </div>
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
        <section>
          {/* <AliceCarousel mouseTracking items={items} animationDuration={100} /> */}
        </section>
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
        <Col xs={12} lg={6} className="div-contacto">
          <section className="container w-75 pt-5">
            <div className="centrar-tit">
              <h2>CONTACTO</h2>
              <hr className="wa"></hr>
            </div>
          </section>
          <section className="container w-75 pt-media-2">
            <a
              className="btn-wsp border-0 py-3 px-4 m-0"
              href="https://wa.me/5493816686081"
              target="_blank"
            >
              {/* <span><i className="fa-brands fa-whatsapp-square whatsapp-icon btn-wsp-icon"></i></span> */}
              <span className="btn-wsp-span text-start">
                <Image className="p-0 btn-wsp-icon" src={Wsp}></Image>
              </span>
              <span className="btn-wsp-text">Envianos un WhatsApp</span>
            </a>
          </section>
          <section className="container w-75 pt-5">
            <h4 className="tit-secon">Madomi Pastas</h4>
            <div className="pt-4">
              <span className="email-text text-secondary">
                Rivadavia 1891, San Miguel de Tucumán, Tucumán, Argentina
              </span>
            </div>
            <div className="pt-4">
              <span className="email-text">madomipastas@gmail.com</span>
            </div>
          </section>
          <section className="container w-75 pt-5">
            <h4 className="tit-secon">Horarios</h4>
            <div className="pt-4">
              <span className="email-text text-secondary">
                De Lunes a Viernes de 9:00 a 13:30 y de 17:00 a 20:00hs.
              </span>
            </div>
          </section>
        </Col>
        <Col xs={12} lg={6} className="">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.0696754735254!2d-65.1976608848682!3d-26.805909995214662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d958843118b%3A0xea02eebd9c950933!2sMadomi%20Pastas!5e0!3m2!1ses-419!2sar!4v1656015756382!5m2!1ses-419!2sar"
              width="w-100"
              height="450"
              loading="lazy"
              aria-hidden="false"
              title="madomi"
            ></iframe>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14240.408879082126!2d-65.2072018!3d-26.8367009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses!2sar!4v1605124610314!5m2!1ses!2sar"
              className="w-100"
              height="600"
              aria-hidden="false"
            ></iframe> */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
