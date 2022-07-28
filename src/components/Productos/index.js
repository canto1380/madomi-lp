import React from "react";
import { Container, Image, Row } from "react-bootstrap";

import NavCategoria from "./navCategoria";
import ItemProductos from "./itemProductos";
import PastasFrescas from "./PastasFrescas";
import Tapas from "./Tapas";
import Otros from './Otros'
import "./productos.css";

// import ProductosInicial from "../../img/productos/principal-v1.png";
import ProductosInicial from "../../img/productos/principal-v3.png";

const Productos = () => {
  return (
    <Container fluid className="px-0 py-0">
      <Row className="px-0 mx-0">
        <Image className="img-inicial px-0" src={ProductosInicial}></Image>
      </Row>
      <NavCategoria />
      <div className="py-5 px-5">
        <div id='divTallarines' className='pt-2 pb-5'>
          <div className='text-center mb-5'>
            <h3 className='text-titulo'>Tallarines</h3>
            <span className='text-descripcion'>Para disfrutar con la familia</span>
          </div>
          <ItemProductos />
        </div>
        <hr className='my-4'/>
        <div id='divTapas' className='py-4'>
          <div className='text-center mb-5'>
            <h3 className='text-titulo'>Tapas</h3>
            <span className='text-descripcion'>Las más elegidas</span>
          </div>
          <Tapas />
        </div>
        <hr className='my-4'/>
        <div id='divPastas' className='py-4'>
          <div className='text-center mb-5'>
            <h3 className='text-titulo'>Pastas Frescas</h3>
            <span className='text-descripcion'>El secreto del verdadero sabor</span>
          </div>
          <PastasFrescas />
        </div>
        <hr className='my-4'/>
        <div id='divBombitas' className='py-4'>
          <div className='text-center mb-5'>
            <h3 className='text-titulo'>Nuevos</h3>
            <span className='text-descripcion'>Probalos, te van a encantar</span>
          </div>
          <Otros />
        </div>
      </div>
    </Container>
  );
};

export default Productos;
