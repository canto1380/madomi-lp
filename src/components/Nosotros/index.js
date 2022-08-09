import React from "react";
import { Container, Row, Col} from "react-bootstrap";

import "./nosotros.css";

const Index = () => {
  return (
    <Container fluid className='px-0 py-0 aaa'>
      <div className='img-fondo'>
        <Row xs={12} className='parte-1 align-items-center mx-0'>
          <Col xs={12}>
          <h1 className='font-t text-center my-0'>30 AÑOS</h1>
          <p className='font-st text-center'>De Tradicion</p>
          <p className='font-d text-center py-3 my-0'>Breve descripcion de como empezo</p>
          </Col>
        </Row>

        <Row xs={12} className='parte-2 mx-0 align-items-center aas'>
          <Col xs={12} md={6} className='px-0'>
            <div className='img-fondo-row-2'>
            </div>
          </Col>
          <Col xs={12} md={6} className='col-2 h-100 text-center'>
            <h2 className="font-t-col-2 my-0">CALIDAD + SABOR</h2>
            <p className="font-st-col-2">100% NATURAL</p>
            <p className="font-d-col-2 py-5">Somos la 2º generación de una familia dedicada a la elaboración de productos derivados de la harina.
            Amamos la buena cocina y es por esto que elaboramos nuestros productos con los mejores ingredientes.</p>
            <h4 className='font-p-col-2 py-3'>Tu familia va a disfrutar comidas más ricas.</h4>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Index;
