import React from "react";
import { Image } from "react-bootstrap";

import img1 from "../../img/nosotros/1.jpg";
import img2 from "../../img/nosotros/2.jpg";
import img3 from "../../img/nosotros/3.jpg";
import img4 from "../../img/nosotros/4.jpg";
import img5 from "../../img/nosotros/5.jpg";
import img6 from "../../img/nosotros/6.jpg";

import "./nosotros.css";

const Index = () => {
  return (
    <body>
    {/* // <Container className="px-0 py-0"> */}
      <div class="hero">
        <h1 className='text-t'>30 Años de historia y tradicion</h1>
      </div>
      <div className='container'>
        <div className="evento" data-aos="fade-right">
          <div className="foto" data-aos="fade-right">
            <Image alt="timepo-1" src={img1}></Image>
          </div>
          <h3 className="fecha">9 de Enero de 2021</h3>
        </div>
        <div className="evento">
          <div className="foto" data-aos="fade-right">
            <Image alt="timepo-1" src={img2}></Image>
          </div>
          <h3 className="fecha">3 de Febrero de 2011</h3>
        </div>
        <div className="evento" data-aos="fade-right">
          <div className="foto" data-aos="fade-right">
            <Image alt="timepo-1" src={img3}></Image>
          </div>
          <h3 className="fecha">7 de Junio de 2005</h3>
        </div>
        <div className="evento">
          <div className="foto">
            <Image alt="timepo-1" src={img4}></Image>
          </div>
          <h3 className="fecha">18 de Agosto de 2000</h3>
        </div>
        <div className="evento">
          <div className="foto">
            <Image alt="timepo-1" src={img5}></Image>
          </div>
          <h3 className="fecha">26 de Noviembre de 1990</h3>
        </div>
        <div className="evento">
          <div className="foto">
            <Image alt="timepo-1" src={img6}></Image>
          </div>
          <h3 className="fecha">7 de Diciembre de 1985</h3>
        </div>
      </div>
    {/* // </Container> */}
    <script>
      AOS.init();
    </script> 
    </body>
  );
};

export default Index;
