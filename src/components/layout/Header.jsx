import { useState } from 'react';
import LogoImagen from '../../assets/images/logo-madomi.png';
import { FaWhatsapp } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-4 lg:px-0">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#inicio" className="flex items-center">
              <img src={LogoImagen} alt="Madomi Logo" className="h-12 md:h-14 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">

            <a href="#historia" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
              Historia
            </a>
            <a href="#productos" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
              Productos
            </a>

            <a href="#contacto" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-2">
            <button className="btn-whatsapp">
              <span className="text-sm md:text-base">
              Contactanos
              </span>
              <a
              href="https://wa.me/3816686081"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 icon-whatsapp" />
            </a>
            </button>
            
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">

              <a
                href="#historia"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Historia
              </a>
              <a
                href="#productos"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </a>

              <a
                href="#contacto"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 