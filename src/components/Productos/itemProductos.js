import React from "react";

import { Card, Row, Col } from "react-bootstrap";
import './productos.css'
import Tallarines from '../../img/productos/Tallarines/tallarines.jpg'
import Tallarines1 from '../../img/productos/Tallarines/tallarines1.png'
import Tallarines2 from '../../img/productos/Tallarines/tallarines2.png'

const ItemProductos = () => {
  return (
    <Row className="my-3 justify-content-center">
      <Col xs={12} sm={6} lg={3} className='my-3 mx-3'>
        <Card className='border-0 card-product w-100'>
          <Card.Img variant="top" src={Tallarines} className='img-product'/>
          <Card.Body>
            <Card.Title className='text-center text-products'>Tallerines x 500g</Card.Title>
            <Card.Text className='text-center fw-bold text-description'>
              Morron
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} lg={3} className='my-3 mx-3'>
        <Card className='border-0 card-product'>
          <Card.Img variant="top" src={Tallarines1} className='img-product'/>
          <Card.Body>
            <Card.Title className='text-center text-products'>Tallarines x 500g</Card.Title>
            <Card.Text className='text-center fw-bold text-description'>
              Huevo
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} lg={3} className='my-3 mx-3'>
        <Card className='border-0 card-product'>
          <Card.Img variant="top" src={Tallarines2} className='img-product'/>
          <Card.Body>
            <Card.Title className='text-center text-products'>Tallarines x 500g.</Card.Title>
            <Card.Text className='text-center fw-bold text-description'>
              Espinaca
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ItemProductos;
