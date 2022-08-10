import React from "react";

import { Card, Row, Col } from "react-bootstrap";
import './productos.css'
import Noquis from '../../img/productos/Tapas/Pascualinas Light.jpg'
import Ravioles from '../../img/productos/Tapas/tapas empanadas.jpg'
import Ravioles1 from '../../img/productos/Tapas/tapas tartas.jpg'

const Tapas = () => {
  return (
    <Row className="my-3 justify-content-center">
      <Col xs={12} sm={6} lg={3} className="my-3 mx-3 mb-5">
        <Card className="border-0 card-product w-100">
          <Card.Img variant="top" src={Noquis} className="img-product" />
          <Card.Body>
            <Card.Title className="text-center text-products">
              Pascualina Light x 2Ud
            </Card.Title>
            <Card.Text className="text-center fw-bold text-description">
              Papa
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} lg={3} className="my-3 mx-3 mb-5">
        <Card className="border-0 card-product">
          <Card.Img
            variant="top"
            src={Ravioles}
            className="img-product"
          />
          <Card.Body>
            <Card.Title className="text-center text-products">
              Tapa empanadas x 12Ud
            </Card.Title>
            <Card.Text className="text-center fw-bold text-description">
              Criolla - Hojaldre
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} lg={3} className="my-3 mx-3 mb-5">
        <Card className="border-0 card-product">
          <Card.Img variant="top" src={Ravioles1} className="img-product" />
          <Card.Body>
            <Card.Title className="text-center text-products">
              Pascualina x 2Ud
            </Card.Title>
            <Card.Text className="text-center fw-bold text-description">
              Criolla - Hojaldre
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      
    </Row>
  );
};

export default Tapas;
