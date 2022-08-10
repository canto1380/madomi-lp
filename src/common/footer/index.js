import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";

const Index = () => {
  return (
    <Container fluid className="footer-cont">
      <Row xs={12} className="justify-content-center mb-2 pb-3">
        <Col xs={6} className="text-end">
          <a
          href={"https://www.facebook.com/MadomiPastasOK"}
          target="_blank"
          rel="noopener noreferrer"
          className='text-muted'
          >
          <FacebookFilled style={{ fontSize: "30px" }} />
          </a>
        </Col>
        <Col xs={6}>
          <a
            href={"https://www.instagram.com/madomipastas/"}
            target="_blank"
            rel="noopener noreferrer"
            className='text-muted'
          >
            <InstagramFilled style={{ fontSize: "30px" }}/>
          </a>
        </Col>
      </Row>
      <Row className="justify-content-md-center mb-1">
        <Col xs={12} className="text-center">
          <div>
            <p className="footer-text">
              Copyright © 2022 Madomi Pastas - Todos los derechos reservados.
            </p>
            <hr className="wa"></hr>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <div>
            <p className="footer-text mb-0">developed by Alejandro Peñalba</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
