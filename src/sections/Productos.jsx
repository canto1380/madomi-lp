import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ImagenPrueba from '../assets/images/tallarines.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonios = () => {
  const testimonios = [
    {
      nombre: "producto 1",
      imagen: ImagenPrueba,
    },
    {
      nombre: "producto 1",
      imagen: ImagenPrueba,
    },
    {
      nombre: "producto 1",
      imagen: ImagenPrueba,
    },
    {
      nombre: "producto 1",
      imagen: ImagenPrueba,
    },
    {
      nombre: "producto 1",
      imagen: ImagenPrueba,
    },
    {
      nombre: "producto 1",
      imagen: ImagenPrueba,
    },
    {
      nombre: "producto 1",
      imagen: ImagenPrueba,
    },
    {
      nombre: "producto 1",
      imagen: ImagenPrueba,
    },

  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="productos" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            {/* Elemento decorativo superior */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
 
            {/* Subtítulo pequeño */}
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-5">
              Descubre nuestros productos
            </p>
 
            {/* Título principal */}
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2 relative z-10 font-serif">
              Productos
              {/* Elementos decorativos laterales centrados con el texto */}
              <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-10 h-0.5 bg-gradient-to-r from-transparent to-gray-300"></div>
              <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-10 h-0.5 bg-gradient-to-l from-transparent to-gray-300"></div>
            </h2>
 
            {/* Línea decorativa inferior */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-gradient-to-r from-gray-500 via-transparent to-gray-500 rounded-full shadow-lg"></div>
          </div>
 
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Botones de navegación externos */}
          <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-10">
            <button className="swiper-button-prev-custom bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-10">
            <button className="swiper-button-next-custom bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            loop={true}
            className="testimonials-swiper"
          >
            {testimonios.map((testimonio, index) => (
              <SwiperSlide key={index}>
                <div className="card-product">
                  <img
                    src={testimonio.imagen}
                    alt={testimonio.nombre}
                    className="w-full h-full object-cover grayscale-10"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style jsx>{`
          .testimonials-swiper .swiper-pagination-bullet {
            background: #3b82f6 !important;
            opacity: 0.3 !important;
          }
          .testimonials-swiper .swiper-pagination-bullet-active {
            opacity: 1 !important;
          }
          .testimonials-swiper .swiper-button-next,
          .testimonials-swiper .swiper-button-prev {
            display: none !important;
          }
          .swiper-button-next-custom:hover,
          .swiper-button-prev-custom:hover {
            background-color: #f3f4f6 !important;
            transform: scale(1.05);
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonios; 