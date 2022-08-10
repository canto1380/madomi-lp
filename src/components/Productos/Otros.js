import React from 'react';

import { Card, Row, Col } from "react-bootstrap";
import './productos.css'
// import Nachos from '../../img/productos/Otros/Masa para Tacos.jpg'
// import Ravioles from '../../img/productos/Tapas/tapas empanadas.jpg'
// import Ravioles1 from '../../img/productos/Tapas/tapas tartas.jpg'
// import Sorrentinos from '../../img/productos/Tapas/tapas.png'

const Otros = () => {
    return (
        <Row className="my-3 justify-content-center">
      <Col xs={12} sm={6} lg={3} className="my-3 mx-3 mb-5">
        <Card className="border-0 card-product w-100">
          <Card.Img variant="top" src={Nachos} className="img-product" />
          <Card.Body>
            <Card.Title className="text-center text-products">
              Masa para Tacos
            </Card.Title>
            <Card.Text className="text-center fw-bold text-description">
              
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      
      </Row>
    );
};

export default Otros;