import LogoImagen from '../../assets/images/logo-madomi-blanco.png';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Logo y descripción */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <a href="#" className="block">
                <img src={LogoImagen} alt="Madomi Logo" className="h-24 w-auto" />
              </a>
              <p className="text-gray-300 text-center md:text-left leading-relaxed max-w-sm">
                30 años de tradición. Desde 1993 elaborando la mejor pasta fresca de Tucumán.
              </p>
            </div>

            {/* Información de contacto */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <h3 className="text-white font-semibold text-lg mb-2">Contacto</h3>
              <div className="space-y-2 text-gray-300">
                <p>San Miguel de Tucumán, Argentina</p>
                <p>Tel: 0381 4274562</p>
                <p>Email: madomipastas@gmail.com</p>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <h3 className="text-white font-semibold text-lg mb-2">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/madomipastas/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:scale-110">
                  <FaInstagram className="w-6 h-6 text-white" />
                </a>
                <a href="https://www.facebook.com/MadomiPastasOK" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                  <FaFacebook className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex justify-center items-center">
            <div className="text-gray-400 text-sm text-center">
              © {currentYear} Madomi. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 