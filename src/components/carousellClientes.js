import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Image } from "react-bootstrap";
import Sanatorio9DeJulio from "../img/carousel-clientes/9deJulio.png";
import Capo from "../img/carousel-clientes/Capo.jpg";
import CaramHnos from "../img/carousel-clientes/CaramHnos.jpg";
import Carrefour from "../img/carousel-clientes/Carrefour.jpg";
import CatalinasPark from "../img/carousel-clientes/CatalinasPark.webp";
import ChangoMas from "../img/carousel-clientes/ChangoMas.jpg";
import ClinicaMayo from "../img/carousel-clientes/ClinicaMayo.png";
import DistMiguelRamos from "../img/carousel-clientes/DistMiguelRamos.jpg";
import DistUruguay from "../img/carousel-clientes/DistUruguay.png";
import ElMarques from "../img/carousel-clientes/ElMarques.png";
import GomezPardo from "../img/carousel-clientes/GomezPardo.jpg";
import Hilton from "../img/carousel-clientes/Hilton.jpg";
import Libertad from "../img/carousel-clientes/Libertad.jpg";
import Lince from "../img/carousel-clientes/Lince.jpg";
import NyG from "../img/carousel-clientes/nyg.png";
import SanRamon from "../img/carousel-clientes/SanRamon.png";
import SupermercadoYa from "../img/carousel-clientes/SupermercadoYa.jpg";
import Tatito from "../img/carousel-clientes/Tatito.jpg";

const CarouselClientes = () => {
  const responsive = {
    0: { items: 1 },
    150: { items: 2 },
    300: { items: 3 },
    450: { items: 4 },
    600: { items: 5 },
  };

  const items = [
    <div className="item-carousel-clientes" data-value="1">
      <Image src={Sanatorio9DeJulio} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-clientes" data-value="2">
      <Image src={Capo} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-clientes" data-value="3">
      <Image src={CaramHnos} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-clientes" data-value="4">
      <Image src={Carrefour} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-clientes" data-value="5">
      <Image src={CatalinasPark} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-clientes" data-value="6">
      <Image src={ChangoMas} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-clientes" data-value="7">
      <Image src={ClinicaMayo} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-clientes" data-value="1">
      <Image src={DistMiguelRamos} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-clientes" data-value="2">
      <Image src={DistUruguay} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-clientes" data-value="3">
      <Image src={ElMarques} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-clientes" data-value="4">
      <Image src={GomezPardo} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-clientes" data-value="5">
      <Image src={Hilton} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-clientes" data-value="6">
      <Image src={Libertad} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-clientes" data-value="7">
      <Image src={Lince} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-clientes" data-value="1">
      <Image src={NyG} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-clientes" data-value="2">
      <Image src={SanRamon} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-clientes" data-value="3">
      <Image src={SupermercadoYa} className="img-carousel-1"></Image>
    </div>,
    <div className="item-carousel-clientes" data-value="4">
      <Image src={Tatito} className="img-carousel-1"></Image>
    </div>,
  ];
  return (
    <AliceCarousel
      items={items}
      animationDuration={1000}
      responsive={responsive}
      autoPlay={true}
      autoPlayStrategy="default"
      infinite={true}
      mouseTracking={true}
      touchTracking={true}
    />
  );
};

export default CarouselClientes;
