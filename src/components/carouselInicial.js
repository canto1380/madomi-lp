import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Empanadas from '../img/carousel-inicial/empanadas.jpg'
import Noquis from '../img/carousel-inicial/plato-noquis.jpg'
import Tallarines from '../img/carousel-inicial/tallarines.jpg'
import Tartas from '../img/carousel-inicial/tartas.jpg'

const CarouselInicial = () => {
    return (
        <Carousel controls={true} fade={true} interval={5000} variant="light" className='carousel-inicial px-0'>
        <Carousel.Item>
          <img
            className="d-block img-carousel-inicial"
            src={Empanadas}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-carousel-inicial"
            src={Noquis}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-carousel-inicial"
            src={Tallarines}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-carousel-inicial"
            src={Tartas}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
};

export default CarouselInicial;