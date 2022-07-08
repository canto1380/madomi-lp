import React from "react";
import { Container, Image, Row } from "react-bootstrap";

import NavCategoria from "./navCategoria";
import ItemProductos from "./itemProductos";
import "./productos.css";

import ProductosInicial from "../../img/productos/principal-v1.png";

const Productos = () => {
  return (
    <Container fluid className="px-0 py-0">
      <Row className="px-0 mx-0">
        <Image className="img-inicial px-0" src={ProductosInicial}></Image>
      </Row>
      <NavCategoria />
      <div className="py-5 px-5">
        <div id='divTallarines' className='pt-2 pb-5'>
          <div className='text-center'>
            <h3 className='text-titulo'>Tallarines</h3>
            <span className='text-descripcion'>Breve descripcion</span>
          </div>
          <ItemProductos />
        </div>
        <hr className='my-4'/>
        <div id='divTapas' className='py-4'>
          <div className='text-center'>
            <h3 className='text-titulo'>Tapas</h3>
            <span className='text-descripcion'>Breve descripcion</span>
          </div>
          <ItemProductos />
        </div>
        <hr className='my-4'/>
        <div id='divPastas' className='py-4'>
          <div className='text-center'>
            <h3 className='text-titulo'>Pastas Frescas</h3>
            <span className='text-descripcion'>Breve descripcion</span>
          </div>
          <ItemProductos />
        </div>
        <hr className='my-4'/>
        <div id='divBombitas' className='py-4'>
          <div className='text-center'>
            <h3 className='text-titulo'>Bombitas</h3>
            <span className='text-descripcion'>Breve descripcion</span>
          </div>
          <ItemProductos />
        </div>
      </div>
    </Container>
  );
};

export default Productos;
