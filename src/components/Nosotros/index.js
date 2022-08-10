import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./nosotros.css";

const Index = () => {
  return (
    <Container fluid className="px-0 py-0">
      <div className="img-fondo">
        <Row xs={12} className="parte-1 align-items-center mx-0">
          <Col xs={12}>
            <h1 className="font-t text-center my-0">30 AÑOS</h1>
            <p className="font-st text-center">De Tradicion</p>
            <p className="font-d text-center py-3 my-0">
              Somos una Empresa dedicada a la fabricación de Pastas Frescas
              desde 1995. Nacimos en la ciudad de San Miguel de Tucumán,
              Tucumán, Argentina con la misión de acercar a tu mesa Frescura y
              Calidad. Madomi Pastas, Simplemente la Mejor.
            </p>
          </Col>
        </Row>

        <Row xs={12} className="parte-2 mx-0 align-items-center bg-parte-2">
          <Col xs={12} lg={6} className="px-0">
            <div className="img-fondo-row-2"></div>
          </Col>
          <Col xs={12} lg={6} className="col-2 h-100 text-center">
            <h2 className="font-t-col-2 my-0">CALIDAD + SABOR</h2>
            <p className="font-st-col-2">100% NATURAL</p>
            <p className="font-d-col-2 py-5">
              Somos la 2º generación de una familia dedicada a la elaboración de
              productos derivados de la harina. Amamos la buena cocina y es por
              esto que elaboramos nuestros productos con los mejores
              ingredientes.
            </p>
            <h4 className="font-p-col-2 py-3">
              Tu familia va a disfrutar comidas más ricas.
            </h4>
          </Col>
        </Row>
        <Row xs={12} className="justify-content-center mx-0 parte-3">
          <Col xs={12} lg={6} className="h-100">
            <h2 className="font-t-3 text-center">Nuestra Visión</h2>
            {/* <hr className="wa"></hr> */}
            <div className="my-4">
              <p className="font-d-3 mx-0 my-0">
                Elaborar alimentos con la máxima calidad e inocuidad a precios
                competitivos para nuestros consumidores actuales y potenciales.
                Mantener un sistema de distribución eficiente, que asegure
                disponibilidad de productos en cada punto de venta donde Madomi
                Pastas tiene presencia, logrando beneficios comerciales para
                todo el canal.
              </p>
            </div>
          </Col>
          <Col xs={12} lg={6} className="h-100 parte-3-col-2">
            <h2 className="font-t-3 text-center">Nuestra Misión</h2>
            <div className="my-4">
              <p className="font-d-3 mx-0 my-0">
                Posicionar a Don Yeyo entre las principales empresas de
                elaboración de alimentos derivados del trigo a nivel nacional,
                con innovación constante en el desarrollo de productos,
                optimización de los procesos de fabricación y certificaciones
                internacionales de calidad e inocuidad.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Index;
