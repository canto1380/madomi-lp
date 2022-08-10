import React from "react";

import { Card, Row, Col } from "react-bootstrap";
import './productos.css'
import Noquis from '../../img/productos/Pastas-frescas/noquis.jpg'
import Ravioles from '../../img/productos/Pastas-frescas/ravioles.jpg'
import Ravioles1 from '../../img/productos/Pastas-frescas/ravioles1.jpg'
import Sorrentinos from '../../img/productos/Pastas-frescas/sorrentinos.jpg'

const PastasFrescas = () => {
  return (
    <Row className="my-3 justify-content-center">
      <Col xs={12} sm={6} lg={3} className="my-3 mx-3 mb-5">
        <Card className="border-0 card-product w-100">
          <Card.Img variant="top" src={Noquis} className="img-product" />
          <Card.Body>
            <Card.Title className="text-center text-products">
              Ñoquis x 500g
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
              Ravioles x 500g
            </Card.Title>
            <Card.Text className="text-center fw-bold text-description">
              Pollo y Verduras
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} lg={3} className="my-3 mx-3 mb-5">
        <Card className="border-0 card-product">
          <Card.Img variant="top" src={Ravioles1} className="img-product" />
          <Card.Body>
            <Card.Title className="text-center text-products">
              Ravioles x 96Ud
            </Card.Title>
            <Card.Text className="text-center fw-bold text-description">
              Pollo y Verduras
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} lg={3} className="my-3 mx-3 mb-5">
        <Card className="border-0 card-product">
          <Card.Img variant="top" src={Sorrentinos} className="img-product" />
          <Card.Body>
            <Card.Title className="text-center text-products">
              Sorrentinos x 500g
            </Card.Title>
            <Card.Text className="text-center fw-bold text-description">
              Pollo y Verduras
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default PastasFrescas;
