import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Container, Image } from "react-bootstrap";

import emailjs from 'emailjs-com'

import { scrollToTop } from "../../helpers/helpers";
import { messageSendEmail, ErrorSendMail } from '../../helpers/messages'
// import { onlyEmail } from "../../helpers/regularExpression";

import Logo from "../../img/madomi-grande-sf.png";
import Wsp from "../../img/whatsapp.png";

import "./contacto.css";
import "../index.css";

const Index = () => {
  const navigate = useNavigate();



  const [contacto, setContacto] = useState({
    apeYNom: "",
    email: "",
    consulta: ""
  })


  const handleValores = (e)=>{
    setContacto({...contacto, [e.target.name]: e.target.value})
  }
  
  const handleContacto = (e) => {
    e.preventDefault()


    const mensajeContacto = {
      nombre: contacto.apeYNom,
      email: contacto.email,
      consulta: contacto.consulta
    }
    
    emailjs.send('service_1ng5el9','template_jqumwme',mensajeContacto, '6Eo-HKD7OTixioYCw')
      .then(
        (result) => {
          if (result.status === 200) {
            e.target.reset()
            messageSendEmail()
            navigate("/");
            scrollToTop()
          }
        },
          (error) => {
            ErrorSendMail()
          }
        
      )
  }

  return (
    <Container className="py-5">
      <article className="row justify-content-around">
        <div className="col-sm-12 col-md-6 my-3">
          <h3>Envianos un mensaje</h3>
          <form action="" href='/' onSubmit={handleContacto}>
            <div className="form-group py-2">
              <label htmlFor="">Nombre y Apellido*</label>
              <input
                type="text"
                name='apeYNom'
                onChange={handleValores}
                placeholder="Juan Perez"
                required
                className="form-control"
              ></input>
            </div>
            <div className="form-group py-2">
              <label htmlFor="">Email*</label>
              <input
                type="email"
                name='email'
                onChange={handleValores}
                placeholder="juanperez@gmail.com"
                required
                className="form-control"
              ></input>
            </div>
            <div className="form-group py-2">
              <label htmlFor="">Consulta*</label>
              <textarea
                name="consulta"
                onChange={handleValores}
                id=""
                cols="30"
                rows="4"
                className="form-control"
                placeholder="ingrese su consulta"
                required
              ></textarea>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" defaultChecked />
              <label className="form-check-label">
                Suscribite a nuestras novedades
              </label>
            </div>
            <div className="pt-2 pb-5">
              <button className="btn btn-success" type="submit">
                Enviar
              </button>
            </div>
          </form>
          <div>
            <a
              className="btn-wsp border-0 py-3 px-4 m-0"
              href="https://wa.me/5493816686081"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <span><i className="fa-brands fa-whatsapp-square whatsapp-icon btn-wsp-icon"></i></span> */}
              <span className="btn-wsp-span text-start">
                <Image className="p-0 btn-wsp-icon" src={Wsp}></Image>
              </span>
              <span className="btn-wsp-text">Envianos un WhatsApp</span>
            </a>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 my-3 aa">
          <img src={Logo} alt="Logo de la empresa" className="w-50" />
          <hr />
          <h6>Rivadavia 1891, San Miguel de Tucumán, Tucumán, Argentina</h6>
          <h6>Email: madomipastas@gmail.com</h6>
          <h6>Horarios de atención:</h6>
          <ul>
            <li>De Lunes a Viernes de 9:00 a 13:30 y de 17:00 a 20:00hs.</li>
          </ul>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.0696754735254!2d-65.1976608848682!3d-26.805909995214662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d958843118b%3A0xea02eebd9c950933!2sMadomi%20Pastas!5e0!3m2!1ses-419!2sar!4v1656015756382!5m2!1ses-419!2sar"
              className="w-100"
              height="250"
              aria-hidden="false"
              title="madomi"
            ></iframe>
          </div>
        </div>
      </article>
    </Container>
  );
};

export default Index;