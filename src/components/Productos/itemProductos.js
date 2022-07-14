import React from "react";

import { Card, Row, Col } from "react-bootstrap";
import './productos.css'
import Noquis from '../../img/noquis.jpg'

const ItemProductos = () => {
  return (
    <Row className="my-3 justify-content-center">
      <Col xs={12} sm={6} lg={3} className='my-3 mx-3'>
        <Card className='card-product'>
          <Card.Img variant="top" src={Noquis} className='img-product'/>
          <Card.Body>
            <Card.Title className='text-center text-products'>Ñoquis x 500g.</Card.Title>
            <Card.Text className='text-center fw-bold text-description'>
              Papa
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} lg={3} className='my-3 mx-3'>
        <Card className='card-product'>
          <Card.Img variant="top" src={Noquis} className='img-product'/>
          <Card.Body>
            <Card.Title className='text-center text-products'>Ñoquis x 500g.</Card.Title>
            <Card.Text className='text-center fw-bold text-description'>
              Papa
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} lg={3} className='my-3 mx-3'>
        <Card className='card-product'>
          <Card.Img variant="top" src={Noquis} className='img-product'/>
          <Card.Body>
            <Card.Title className='text-center text-products'>Ñoquis x 500g.</Card.Title>
            <Card.Text className='text-center fw-bold text-description'>
              Papa
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} lg={3} className='my-3 mx-3'>
        <Card className='card-product'>
          <Card.Img variant="top" src={Noquis} className='img-product'/>
          <Card.Body>
            <Card.Title className='text-center text-products'>Ñoquis x 500g.</Card.Title>
            <Card.Text className='text-center fw-bold text-description'>
              Papa
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ItemProductos;
