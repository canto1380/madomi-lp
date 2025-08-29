import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
// Importar iconos de react-icons
import { FiPhone, FiMail, FiMapPin, FiClock, FiMessageCircle } from 'react-icons/fi';

const Contacto = () => {
  return (
    <section id="contacto" className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold mb-1">
              Contáctanos
              {/* Elementos decorativos laterales centrados con el texto */}
              <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-10 h-0.5 bg-gradient-to-r from-transparent to-gray-300"></div>
              <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-10 h-0.5 bg-gradient-to-l from-transparent to-gray-300"></div>
            </h2>
            {/* Línea decorativa inferior */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-gradient-to-r from-white via-gray-800 to-white rounded-full shadow-lg"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8">
            ¿Listo para disfrutar de la mejor pasta fresca? Contáctanos y te llevaremos la frescura y calidad de Madomi a tu mesa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mapa de Google */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
            <h3 className="text-2xl text-center md:text-left font-bold mb-6 text-white">Nuestra ubicación</h3>
            
            <div className="w-full h-96 rounded-xl overflow-hidden shadow-2xl border-2 border-gray-600 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3561.0697475512475!2d-65.1980276!3d-26.8059077!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d958843118b%3A0xea02eebd9c950933!2sMadomi%20Pastas!5e0!3m2!1ses-419!2sar!4v1756256325584!5m2!1ses-419!2sar" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Madomi Pastas"
                className="transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay sutil para efecto profesional */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            <div className="mt-6 text-center bg-gray-700/50 rounded-lg p-4 border border-gray-600">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <p className="text-gray-200 font-semibold">📍 Madomi Pastas</p>
              </div>
              <p className="text-sm text-gray-400">San Miguel de Tucumán, Tucumán, Argentina</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className=" text-center md:text-left text-2xl font-bold mb-4 mt-8">Información de contacto</h3>
              <h3 className=" text-center md:text-left text-gray-300 mb-8">
                Estamos aquí para ayudarte. Contáctanos a través de cualquiera de estos medios:
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex justify-center md:justify-start md:flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-white hidden md:flex">
                  <FiPhone className="w-6 h-6 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-semibold mb-1">Teléfono</h4>
                  <p className="text-gray-300">0381 6686081</p>
                  <p className="text-gray-400 text-sm">Lun - Vie, 9:00 - 13:30 |  16:00 - 19:00</p>
                  <p className="text-gray-400 text-sm">Sab, 9:00 - 14:00</p>
                </div>
              </div>

              <div className="flex justify-center md:justify-start md:flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-400 rounded-lg flex items-center justify-center flex-shrink-0  border-2 border-white hidden md:flex">
                  <FiMail className="w-6 h-6 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-300">madomipastas@gmail.com</p>
                  <p className="text-gray-400 text-sm">Respuesta en 24 horas</p>
                </div>
              </div>

            </div>

            {/* WhatsApp Button */}
            <div className="pt-8 border-t border-gray-700 text-center md:text-left">
              <h4 className="font-semibold mb-4">Contacto directo</h4>
              <a 
                href="https://wa.me/3816686081" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-green-600 hover:bg-white hover:text-green-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-sm md:text-base">Chatear por WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto; 