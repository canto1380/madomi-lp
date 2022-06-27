import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Image } from "react-bootstrap";
import Noquis from "../img/noquis.jpg";
import Ravioles from "../img/ravioles.jpg";
import Ravioles1 from "../img/ravioles1.jpg";
import Sorrentinos from "../img/sorrentinos.jpg";
import Tallarines from "../img/tallarines.jpg";
import Tallarines1 from "../img/tallarines1.jpg";
import Tallarines2 from "../img/tallarines2.jpg";
import Tapas from "../img/tapas.png";

const CarouselProductos = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div className="item-carousel-prod" data-value="1">
      <Image src={Noquis} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-prod" data-value="2">
      <Image src={Ravioles} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-prod" data-value="3">
      <Image src={Ravioles1} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-prod" data-value="4">
      <Image src={Sorrentinos} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-prod" data-value="5">
      <Image src={Tallarines} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-prod" data-value="5">
      <Image src={Tallarines1} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-prod" data-value="5">
      <Image src={Tallarines2} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-prod" data-value="5">
      <Image src={Tapas} className="img-carousel-1"></Image>
    </div>,
  ];
  return (
    <AliceCarousel
      items={items}
      animationDuration={1000}
      responsive={responsive}
      autoPlay={true}
      autoPlayStrategy='default'
      infinite={true}
      mouseTracking={true}
      touchTracking={true}
    />
  );
};

export default CarouselProductos;
